export interface CodeStr {
  Token:          string;
  Code:           string;
  NumberProc:     string;
  CompArgs: 	  string;
  ExecArgs: 	  string;
  CompCmd:        string;
  ExecCmd:        string;
  Sequence:       string;
  MaxTimeout:     string;
  Next:           string;
  Queue:          string;
  Container:      string[];
  IdExercise:     string;
  FileName:       string;
  Files:          string[];
}

export interface CodeEmitterStr {
  Code:             string;
  Result:           string;
  CheckCount:	    number;
  CheckList:        string;
  Command:          string;
  ExecTime:         string;
  Event:            string;
}

export interface CodeResponseStr {
  Name: 		  string;
  Status:  		  string;
  Command:  	  string;
  ExecTime:       string;
  CompTime:       string;
  CheckCount:     number;
  CheckList:      string;
}

export interface QueueStr {
  Token:          string;
  User:           string;
  Concurrency:    string;
  MaxTimeout:     number;
  Position:       number;
  StartTime:      number;
  Sequence:       string;
  Count:          number;
  Time:           string;
}

export interface CodeTempStr {
  Id:                 number;
  IdUser:             number;
  IdExerciseAnswers:  number;
  Code:               string;
  Command: 	          string;
}