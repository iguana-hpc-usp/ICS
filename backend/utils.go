package main

import (
	"./openssl"
	"bufio"
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"github.com/fatih/color"
	"io/ioutil"
	m "math/rand"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"runtime"
	"time"
)

func UtilTokenGenerator() string {
	m.Seed(time.Now().UnixNano())

	var pool = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

	bytes := make([]byte, 16)
	for i := 0; i < 16; i++ {
		bytes[i] = pool[m.Intn(len(pool))]
	}
	return string(bytes)
}

func Log(msg interface{}, err error, info string) {
	pc, file, line, ok := runtime.Caller(1)
	u, _ := url.Parse(filepath.Base(file))

	if info == "1" && msg != "" && err == nil {
		y := color.New(color.FgHiYellow)
		y.Printf("\n[INFO] %s\n", msg)
	}

	if config.Debug == "On" {
		if ok && msg != "" {
			b := color.New(color.FgHiBlue)
			b.Printf("\n[DEBUG] (%s, line #%d, func: %v)\n output: %s\n",
				u, line, runtime.FuncForPC(pc).Name(), msg)
		}
	}

	if err != nil && (config.Error == "On" || (info == "1")) {
		r := color.New(color.FgHiRed)
		r.Printf("\n[DEBUG] (%s, line #%d, func: %v)\n output: %s\n",
			u, line, runtime.FuncForPC(pc).Name(), err)
		fmt.Printf("\n")
	}

}

func UtilFileCreate(filePath string, content string) {
	file, err := os.Create(filePath)
	Log("", err, "1")

	defer file.Close()

	w := bufio.NewWriter(file)
	fmt.Fprintln(w, content)
	w.Flush()

}

func UtilDefaultDir(name string) string {
	if name == "NFS" {
		dir := "/iguana-hpc-usp/shared/master"
		configDir, _ := UtilDirExists(dir)
		if !configDir {
			err := UtilEnsureDir(dir)
			if err != nil {
				Log("Failed to create dir: " + dir, nil, "1")
				os.Exit(3)
			}
		}
		return dir
	}

	if name == "CONFIG" {
		dir := "/usr/local/etc/iguana-hpc-usp"
		configDir, _ := UtilDirExists(dir)
		if !configDir {
			err := UtilEnsureDir(dir)
			if err != nil {
				Log("Failed to create dir: " + dir, nil, "1")
				os.Exit(3)
			}
		}
		return dir
	}

	if name == "STATIC" {
		dir := "/usr/local/share/iguana-hpc-usp"
		configDir, _ := UtilDirExists(dir)
		if !configDir {
			err := UtilEnsureDir(dir)
			if err != nil {
				Log("Failed to create dir: " + dir, nil, "1")
				os.Exit(3)
			}
		}
		return dir
	}

	return ""
}

func UtilDirExists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil { return true, nil }
	if os.IsNotExist(err) { return false, nil }
	return true, err
}

func UtilEnsureDir(dirName string) error {
	err := os.MkdirAll(dirName, 0755)
	if err == nil || os.IsExist(err) {
		return nil
	} else {
		return err
	}
}

func UtilListDir() []string {
	files, err := ioutil.ReadDir(DEFAULT_NFS_PATH)
	Log("", err, "0")

	var dirs[] string

	for _, f := range files {
		dirs = append(dirs, f.Name())
	}
	
	return dirs
}

func UtilRemoveContents(dir string) error {
	err := os.RemoveAll(dir)
	if err != nil {
		return err
	}

	return nil
}

func UtilValidateNames(name string) bool {
	var IsLetter = regexp.MustCompile(`^[a-zA-Z]+$`).MatchString
	return IsLetter(name)
}

func UtilCreateHash(key string) string {

	key += "NPZ8fvABP5pKSwU3"

	hasher := md5.New()
	hasher.Write([]byte(key))
	return hex.EncodeToString(hasher.Sum(nil))
}

func UtilEncrypt(plaintext []byte, secret string) []byte {

	o := openssl.New()

	enc, err := o.EncryptBytes(secret, plaintext, openssl.DigestMD5Sum)
	Log("", err, "0")

	return enc
}

func UtilDecrypt(text []byte, secret string) []byte {

	o := openssl.New()

	dec, err := o.DecryptBytes(secret, text, openssl.DigestMD5Sum)
	if err != nil {
		Log(secret, err, "0")
		Log(text, err, "0")
	}


	return dec
}