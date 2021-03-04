package main

import (
	"bytes"
	"context"
	"io"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
	"time"
)

func CodeCompile(code CodeStr) CodeResponseStr {

	c := CodeResponseStr{Name:"", Status:"", Command: ""}

	if CodeCheckCmdInjection(code) == true {
		c.Name = "error"
		c.Status = "An attempt was detected to inject malicious code"
		QueueRemove(code.Token)
		return c
	}

	for {
		if QueueList(code.Token).Position == 1 { break }
		time.Sleep(time.Second * 2)
	}

	path := DEFAULT_NFS_PATH + "/" + code.Token + "/"

	err := UtilEnsureDir(path)
	Log("", nil, "0")
	if err != nil {
		c.Name = "error"
		c.Status = "There was a problem trying to create the directory in " + path
		QueueRemove(code.Token)
		return c
	}

	srvSwarm := SwarmServiceList()
	if len(srvSwarm) < 1 && code.CompCmd != "nvcc" {
		c.Name = "error"
		c.Status = "Nodes are required to run the program. Please add more nodes."
		QueueRemove(code.Token)
		return c
	}

	var compile[] string
	if code.CompCmd != "" && code.CompCmd != "nvcc" {
		code.CompCmd = strings.Replace(code.CompCmd,"main", path + "main", -1)
		compile = append(compile, code.CompCmd)
	}

	if code.CompArgs != "" {
		code.CompArgs = strings.Replace(code.CompArgs,"main", path + "main",-1)
		argsComp := strings.Split(code.CompArgs, " ")
		compile = append(compile, argsComp...)
	}

	if code.FileName != "" {
		code.Code = strings.Replace(code.Code, code.FileName, path + code.FileName, -1)
	}

	if len(code.Files) > 0 {
		for _, f := range code.Files {
			if f != "" && f != code.FileName {
				code.Code = strings.Replace(code.Code, f, path + f, -1)
				fileName, fileContent := dbGetFile("", f)

				if fileName != "" {
					tmpfile, err := os.Create(path + fileName)
					Log("", err, "0")
					defer tmpfile.Close()

					io.Copy(tmpfile, bytes.NewReader(fileContent))
				}
			}
		}
	}

	//CREATING MAIN.C|CU
	if code.CompCmd == "nvcc" {
		UtilFileCreate(path+"main.cu", code.Code)
	} else {
		UtilFileCreate(path+"main.c", code.Code)
	}

	//ret := "Code successfully compiled, wait for execution..."

	timeout := config.CodeExecTimeout
	if code.MaxTimeout != "" {
		timeout = code.MaxTimeout
	}

	//COMPILE
	var rs ExecResult

	QueueUpdate(code.Token, "compile")

	start := time.Now()
	if code.CompCmd == "nvcc" {
		cmd := exec.Command("nvcc", compile...)
		ret, err := cmd.Output()
		Log(ret, err, "0")

		rs.StdOut = string(ret[:])
		if err != nil {
			rs.StdErr = err.Error()
		}
	} else {
		rs, err = ContainerExec(GLOBAL_HOST.IdContainer, compile, timeout, code.Token)
	}
	c.CompTime =  time.Since(start).String()

	var re = regexp.MustCompile(`(^\d+.\d{2}|[a-z]+$)`)
	match := re.FindAllString(c.CompTime, -1)
	if len(match) >= 2 { c.CompTime = match[0] + match[1] }

	Log(compile, err, "0")

	c.Command = "Compile command executed:\n " +
		strings.Replace(strings.Join(compile, " "), path, "",-1)

	if err != nil {
		UtilRemoveContents(path)
		c.Name = "error"
		c.Status = "There was a problem trying to compile the code, error: " + err.Error()

		QueueRemove(code.Token)
		return c
	}

	//REMOVING THE FILEPATH OF THE ANSWER
	reg := regexp.MustCompile(path)
	rs.StdErr = reg.ReplaceAllString(rs.StdErr, "${1}")

	if rs.StdErr != "" {
		c.Name = "error"
		c.Status = rs.StdErr

		QueueRemove(code.Token)
		return c
	}

	c.Name = "ok"
	c.Status = rs.StdOut

	if rs.StdOut == "" {
		c.Status = "Build returned no errors! "
	}

	if code.Next == "" {
		QueueRemove(code.Token)
	}

	return c
}


func CodeRun(code CodeStr) CodeResponseStr {

	c := CodeResponseStr{Name:"", Status:"", Command: ""}

	if CodeCheckCmdInjection(code) == true {
		c.Name = "error"
		c.Status = "An attempt was detected to inject malicious code"
		QueueRemove(code.Token)
		return c
	}

	for {
		if QueueList(code.Token).Position == 1 { break }
		time.Sleep(time.Second * 2)
	}

	path := DEFAULT_NFS_PATH + "/" + code.Token + "/"

	//EXECUTE
	var execute[] string
	if code.ExecCmd != "" && code.CompCmd != "nvcc" {
		code.ExecCmd = strings.Replace(code.ExecCmd,"main", path + "main", -1)
		execute = append(execute, code.ExecCmd)
	}

	if code.ExecArgs != "" {

		//Remove two or more spaces
		//Spaces are not good for parameters
		space := regexp.MustCompile(`\s+`)
		code.ExecArgs = space.ReplaceAllString(code.ExecArgs, " ")

		code.ExecArgs = strings.Replace(code.ExecArgs, "main", path+"main", -1)

		if code.FileName != "" {
			code.ExecArgs = strings.Replace(code.ExecArgs, code.FileName, path+code.FileName, -1)
		}

		for _, f := range code.Files {
			if f != "" && f != code.FileName {
				code.ExecArgs = strings.Replace(code.ExecArgs, f, path+f, -1)
			}
		}

		argsExec := strings.Split(code.ExecArgs, " ")
		execute = append(execute, argsExec...)
	}

	if code.CompCmd == "nvcc" {
		c.CheckCount, c.CheckList = CodeCheck(path+"main.cu")
	} else {
		c.CheckCount, c.CheckList = CodeCheck(path+"main.c")
	}

	timeout := config.CodeExecTimeout
	if code.MaxTimeout != "" {
		timeout = code.MaxTimeout
	}

	var rs ExecResult
	var err error

	QueueUpdate(code.Token, "run")

	start := time.Now()
	if code.CompCmd == "nvcc" {

		ctx := context.Background()

		cmd := exec.CommandContext(ctx, path + "main", execute...)

		var timer *time.Timer
		tout, _ := strconv.Atoi(timeout)
		if  tout > 0 {
			timer = time.AfterFunc(time.Second*time.Duration(tout), func() {
				err := cmd.Process.Kill()
				if err != nil {
					panic(err)
				}
			})
		}
		if timer != nil {
			timer.Stop()
		}
		ret, err := cmd.Output()
		Log(ret, err, "0")

		rs.StdOut = string(ret[:])
		if err != nil {
			rs.StdErr = err.Error()
		}
	} else {
		rs, err = ContainerExec(GLOBAL_HOST.IdContainer, execute, timeout, code.Token)
	}
	c.ExecTime = time.Since(start).String()
	Log(execute, err, "0")

	var re = regexp.MustCompile(`(^\d+.\d{2}|[a-z]+$)`)
	match := re.FindAllString(c.ExecTime, -1)
	if len(match) >= 2 { c.ExecTime = match[0] + match[1] }

	c.Command = "Run command executed:\n " +
		strings.Replace(strings.Join(execute, " "), path, "",-1)

	QueueRemove(code.Token)

	if err != nil {
		c.Name = "error"
		c.Status = "There was a problem trying to run the code, error: " + err.Error()
		return c
	}

	//CLEAN DOCKER DIRT IN CONTAINERS
	if rs.StdOut == "" && rs.StdErr != "" {
		c.Name = "error"
		c.Status = rs.StdErr
		var re = regexp.MustCompile(`(?s)(-{74})(.*)`)
		matches := re.FindAllString(rs.StdErr, -1)
		c.Name = "error"
		if len(matches) > 0 {
			if matches[0] != "" {
				c.Status = matches[0]
			}
		} else {
			c.Name = "info"
			c.Status = "Run command executed:\n" +
				strings.Replace(strings.Join(execute, " "), path, "",-1) +
				"\n\nThe program is not showing any messages. Are you printing something? "
		}

		return c
	}

	if rs.StdOut == "" && rs.StdErr == "" {
		c.Name = "info"
		c.Status = "The execution or code did not return any message!"
		return c
	}

	c.Name = "ok"

	c.Status = rs.StdOut
	return c
}

func CodeCheck(filePath string) (int, string) {

	out, err := exec.Command("bash", "-c", "/usr/bin/clang-tidy -checks=* "+filePath).Output()
	Log("", err, "0")

	var re = regexp.MustCompile(`\^`)
	matches := re.FindAllString(string(out), -1)

	return len(matches), string(out)
}

func CodeCheckCmdInjection(code CodeStr) bool {

	step := true

	allow := []string{"mpicc", "nvcc", "mpiexec", "g++", "gcc", "c", "main"}
	deny := []string{"&&", "&", "|", ";", "||"}

	for _, cmd := range allow {
		if code.CompCmd == cmd || code.ExecCmd == cmd {
			step = false
		}
	}

	cmdA := strings.Split(code.CompArgs, " ")
	cmdA = append(cmdA, strings.Split(code.ExecArgs, " ")...)
	cmdA = append(cmdA, strings.Split(code.CompCmd, " ")...)
	cmdA = append(cmdA, strings.Split(code.ExecCmd, " ")...)

	for _, cmd := range cmdA {
		for _, d := range deny {
			if cmd == d {
				step = true
			}
		}
	}

	return step
}