import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../_services/event-emitter.service";
import {ParamStr, RequestStr, ResponseStr, UniversalDTOStr} from "../_model/service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CodeEmitterStr, CodeResponseStr, CodeStr, CodeTempStr, QueueStr} from "../_model/code";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {HostInfoStr} from "../_model/hostInfo";
import {ContainerStr} from "../_model/node";
import {ExerciseFilesStr, ExercisesStr} from "../_model/exercises";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  // @ts-ignore
  @ViewChild("ResultsTab", { static: false }) re;

  // @ts-ignore
  @ViewChild('selectfile') el:ElementRef;   //in html we make variable of selectfile
  progress = { loaded : 0 , total : 0 };

  codeForm: FormGroup;
  submitted = false;

  editor: any;
  editorOptions = {
    theme: 'vs-dark',
    language: 'c',
    automaticLayout: true,
    cursorSmoothCaretAnimation: true,
    fontSize: 12,
    suggest: true,
    tabCompletion: true,
    minimap:
        {
          enabled: true,
          showSlider: "always",
        },
  };

  resultOptions = {
    theme: 'vs-dark',
    language: 'c',
    automaticLayout: true,
    readOnly: true,
  };

  response = {} as CodeResponseStr;
  responseTemp = {} as CodeResponseStr;
  responseQueue = {} as QueueStr;
  responseFile = {} as ResponseStr;

  codePacket: CodeStr;
  disabled: boolean;
  disabledCmd: string;
  btnCompile: string;
  sequence: string[];
  programStatus:  string;
  queueStatus:  string;
  programTimeout:  number;
  msgProcess: any[];

  fullScreenEditor: boolean;
  OpMode: string;

  code = {} as CodeEmitterStr;
  codeTemp = {} as CodeTempStr;
  codeTempMode: string;

  hostInfo = {} as HostInfoStr;
  nodes: string[];

  containers = new FormControl();

  command: string;
  codeExample: string;
  loadParameters: string;

  exercise = {} as ExercisesStr;

  exerciseFiles: string[];
  files = new FormControl();
  fileName='';

  navActive = 1;
  queue = false;
  tryACode = "0";

  isHelpFile = false;

  numberOfCPUs = 0;
  msgOverLoad = "";

  hasChoiceCompile = 0;

  constructor(
      private host: HostService,
      public dialog: MatDialog,
      private formBuilder: FormBuilder,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      private _snackBar: MatSnackBar,
  ){}

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      CompCmd: ['',
        [Validators.required,
          Validators.minLength(1),
        ]
      ],
      CompArgs: ['',
        [Validators.required,
          Validators.minLength(1),
        ]
      ],
      ExecCmd: ['', []],
      ExecArgs: ['', []],
      ExtraArgs: ['', []],
      File: ['', []],
      NumberProc: ['',
        [Validators.required,
          Validators.min(1),
        ]
      ],
      run: ['', []],
    }, {});

    this.disabled = false;
    this.btnCompile = "Compile and Run";

    this.exercise.Id = parseInt(window.localStorage.getItem("ExerciseId"));

    //Getting value from child CodeComponent
    this._eventEmitter.code.subscribe(
        data => {
          this.code = data;

          if (this.code.Command) {
            let r = this.code.Command.split("|");
            this.loadParameters = r[0];
            this.fc['CompCmd'].setValue(r[1]);
            this.fc['CompArgs'].setValue(r[2]);
            this.fc['ExecCmd'].setValue(r[3]);
            this.fc['ExecArgs'].setValue(r[4]);
            this.fc['ExtraArgs'].setValue(r[5]);
            this.fc['NumberProc'].setValue(r[6]);

            if (this.loadParameters != "Manual") {
              this.fc['CompCmd'].disable();
              this.fc['CompArgs'].disable();
              this.fc['ExecCmd'].disable();
              this.fc['ExecArgs'].disable();
            }

          }
        },
    );

    this.tryACode = window.localStorage.getItem("TryACode");

    if (this.exercise.Id)
      this.getFiles();

    //Getting value from child CodeComponent
    this._eventEmitter.exercise.subscribe(
        data => {
          //console.log(data);
          this.exercise = data;
          if (this.exercise && this.exercise.Id) {
            window.localStorage.setItem("ExerciseId", this.exercise.Id.toString());
            this.getFiles();
          }
        },
    );

    this.getActiveNodes();
    this.getHostInfo();
    //this.codeForm.disable();
  }

  onInit(editor) {
    this.editor = editor;
    this.codeTempMode = "auto";
  }

  onQueue() {
    this.queue = !this.queue;
  }

  onChange(editor) {
    this._eventEmitter.setCode(this.code);

    if (this.hasChoiceCompile == 0) {
      this.setAutoParameters(this.code.Code);
    }

    //Save in temp code
    //Getting Credentials
    let userSession = this.host.getSessionID();
    this.codeTemp.IdUser = parseInt(userSession.Id);
    this.codeTemp.IdExerciseAnswers = this.exercise.Id;
    this.codeTemp.Code = this.code.Code;
    this.codeTemp.Command = this.code.Command;
    if (this.codeTempMode == "auto")
      this.updateCodeTemp();
  }

  setTheme(val: string) {
    monaco.editor.setTheme(val);
  }

  setFont(val: number) {
    let font = {"fontSize": val}
    this.editor.updateOptions(font);
  }

  setMiniMap(val: string) {
    this.editor.updateOptions({ minimap: { enabled: val } });
  }

  getHostInfo() {
    let params: ParamStr[] = [];
    let request: RequestStr = {
      Request: "hostInfo",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.hostInfo = data;
        });
  }

  // convenience getter for easy access to form fields
  get fc() { return this.codeForm.controls; }

  getCodeExample(example) {
    this.hasChoiceCompile = 1;

    this.host.CodeExample(example)
        .then( result => {
          this.code.Code = result;
        })
        .catch( error => {
          console.log('Error Getting Data: ', error);
        });
    this.OpMode = 'vs-dark';

    this.codeExample = example;

    this.setParameters(this.codeExample);
  }

  setFileParameters(tec) {
    this.hasChoiceCompile = 1;

    let ExtraArgs = this.fc['ExtraArgs'].value.toString();
    let ExtraArgsTemp = ExtraArgs.split(" ");

    //check if all files in the selected box are in the input ExtraArgs
    if (this.files.value) {
      for (var i = 0; i < this.files.value.length; i++) {
        if (ExtraArgsTemp.indexOf(this.files.value[i]) > -1) {
          continue;
        } else {
          ExtraArgs += " " + this.files.value[i];
        }
      }
    }

    // Removing key index from exerciseFiles
    if (this.exerciseFiles) {
      let exerciseFilesTemp = [];
      for (var i = 0; i < this.exerciseFiles.length; i++) {
        exerciseFilesTemp[i] = this.exerciseFiles[i]['FileName'];
      }

      //check if all files in the input ExtraArgs are in the selected box
      ExtraArgsTemp = ExtraArgs.split(" ");
      ExtraArgs = "";
      for (var i = 0; i < ExtraArgsTemp.length; i++) {
        if (exerciseFilesTemp.indexOf(ExtraArgsTemp[i]) > -1) {
          if (this.files.value.indexOf(ExtraArgsTemp[i]) > -1) {
            ExtraArgs += " " + ExtraArgsTemp[i];
          }
        } else {
          ExtraArgs += " " + ExtraArgsTemp[i];
        }
      }
    }

    // Check if file uploaded from input File
    ExtraArgsTemp = ExtraArgs.split(" ");
    if (this.fileName != null) {
      if (ExtraArgsTemp.indexOf(this.fileName) === -1) {
        ExtraArgs += " " + this.fileName;
      }
    }

    this.fc['ExtraArgs'].setValue(ExtraArgs);

    this.setParameters(tec);
  }

  setManualParameters(tec) {
    this.hasChoiceCompile = 1;
    this.setParameters(tec);
  }

  setAutoParameters(code) {
    let c = 0;
    if (code.indexOf('mpi.h') !== -1) {
      this.setParameters('MPI');
      c += 1
    }
    if (code.indexOf('omp.h') !== -1) {
      this.setParameters('OpenMP');
      c += 1
    }
    if (c == 2) {
      this.setParameters('OpenMP_MPI');
    }
  }

  updateParameters() {
    //console.log("updateParameters");
    this.code.Command = this.loadParameters + "|";
    this.code.Command += this.fc['CompCmd'].value.toString() + "|";
    this.code.Command += this.fc['CompArgs'].value.toString() + "|";
    this.code.Command += this.fc['ExecCmd'].value.toString() + "|";
    this.code.Command += this.fc['ExecArgs'].value.toString() + "|";
    this.code.Command += this.fc['ExtraArgs'].value.toString() + "|";
    if (this.fc['NumberProc'].value > 0)
      this.code.Command += this.fc['NumberProc'].value.toString();
    this._eventEmitter.setCode(this.code);
  }

  setParameters(tec) {
    if (tec != '')
      this.loadParameters = tec;

    if (this.loadParameters != "Manual") {
      this.fc['CompCmd'].disable();
      this.fc['CompArgs'].disable();
      this.fc['ExecCmd'].disable();
      this.fc['ExecArgs'].disable();
    } else {
      this.fc['CompCmd'].enable();
      this.fc['CompArgs'].enable();
      this.fc['ExecCmd'].enable();
      this.fc['ExecArgs'].enable();
    }

    let nProcess;
    if (this.fc['NumberProc'].value > 0)
      nProcess = this.fc['NumberProc'].value.toString();

    if (nProcess > this.numberOfCPUs) {
      this.msgOverLoad = "Attention, you are allocating more processes than " +
          "the total number of CPUs in the cluster. " +
          "Performance degradation may occur."
    } else {
      this.msgOverLoad = "";
    }

    let hosts;
    if (this.nodes)
      hosts = "-host " + this.nodes.join(",");
    if (this.containers.value != null) {
      if (this.containers.value[0]) {
        hosts = "-host " + this.containers.value;
      }
    }

    let CompCmd = this.fc['CompCmd'].value.toString();
    let CompArgs = this.fc['CompArgs'].value.toString();
    let ExecCmd = this.fc['ExecCmd'].value.toString();
    let ExecArgs = this.fc['ExecArgs'].value.toString();
    let ExtraArgs = this.fc['ExtraArgs'].value.toString();

    if (this.loadParameters == "MPI") {
      CompCmd = "mpic++";
      CompArgs = "main.c -o main";
      ExecCmd = "mpiexec";
      ExecArgs = "-n "+nProcess+" "+hosts+" main";
    }

    if (this.loadParameters == "OpenMP_MPI") {
      CompCmd = "mpic++";
      CompArgs = "-fopenmp main.c -o main";
      ExecCmd = "mpiexec";
      ExecArgs = "-n "+nProcess+" "+hosts+" main";
    }

    if (this.loadParameters == "OpenMP") {
      CompCmd = "g++";
      CompArgs = "-fopenmp main.c -o main";
      ExecCmd = "main";

      this.fc['ExecArgs'].setValidators([,]);
      this.fc['ExecArgs'].updateValueAndValidity();
      ExecArgs = "";
    }

    if (this.loadParameters == "CUDA") {
      CompCmd = "nvcc";
      CompArgs = "main.cu -o main";
      ExecCmd = "main";

      this.fc['ExecArgs'].setValidators([,]);
      this.fc['ExecArgs'].updateValueAndValidity();
      ExecArgs = "";
    }

    CompCmd = CompCmd.replace(/\s{2,}/g, ' ');
    CompArgs = CompArgs.replace(/\s{2,}/g, ' ');
    ExecCmd = ExecCmd.replace(/\s{2,}/g, ' ');
    ExecArgs = ExecArgs.replace(/\s{2,}/g, ' ');
    ExtraArgs = ExtraArgs.replace(/\s{2,}/g, ' ');

    this.fc['CompCmd'].setValue(CompCmd.trim());
    this.fc['CompArgs'].setValue(CompArgs.trim());
    this.fc['ExecCmd'].setValue(ExecCmd.trim());
    this.fc['ExecArgs'].setValue(ExecArgs.trim());
    this.fc['ExtraArgs'].setValue(ExtraArgs.trim());

    this.updateParameters();
  }

  uploadFile() {
    //this.response = {} as ResponseStr;

    var filedata = this.el.nativeElement.files[0];

    if (parseInt(filedata.size) > this.exercise.MaxFileSize) {
      this.responseFile.Name = "error";
      this.responseFile.Status = "The file is larger than the limit set for the exercise. \n" +
          "\nFile: " + filedata.name +
          "\nSize: " + this.formatBytes(filedata.size) +
          "\nMaximum allowed size: " + this.formatBytes(this.exercise.MaxFileSize);
      return;
    }

    let param = {} as ParamStr;
    param.Name = "Code";
    param.Value = this.host.getSessionID().Token;

    this.host.uploadFileData(filedata, param)
        .subscribe(
            (data: any) => {
              if (data.type == 1 && data.loaded && data.total) {
                this.progress.loaded = data.loaded;
                this.progress.total = data.total;
              } else if (data.body) {
                //console.log("Data Uploaded");
                //console.log(data.body);
                this.setFileParameters('');
                this.responseFile.Name = "ok";
                this.responseFile.Status = "File uploaded successfully. " +
                    "You can call the file directly in your code by the name: " + filedata.name;

              }
              if (data.loaded == data.total) {
                //console.log(filedata);
                this.fileName = filedata['name'];

                //this.load = 0;
                if (data.body && data['body']['Name'] == "error") {
                  this.responseFile = data['body'];
                }
              }
            },
            error => console.log(error)
        )
  }

  download(file: ExerciseFilesStr) {
    //console.log(file);
    this.host.downloadFileData(file, 'ExerciseFiles');
  }

  onClick(mode) {
    this.btnCompile = "Compile";
    this.fc['ExecCmd'].setValidators([,]);
    this.fc['ExecCmd'].updateValueAndValidity();

    if (mode == "Compile and Run") {
      this.fc['ExecCmd'].setValidators([Validators.required, Validators.minLength(1)]);
      this.fc['ExecCmd'].updateValueAndValidity();
    }

    this.btnCompile = mode;

    return
  }

  checkFileParameters() {
    //Check if user include fopen in his code but forget of input the file
    if (this.code.Code.indexOf('fopen') !== -1 &&
        (!this.fileName && !this.files.value) ) {
      this._snackBar.open("Attention, you are called a file in your code. " +
          "Go to the Files tab and send or select the correct file.", '', {
        duration: 10000, panelClass: ['info']
      });
      return false;
    }

    if (this.exerciseFiles) {
      //Select automatically the filename in the select box
      let extraArguments = this.fc['ExtraArgs'].value.split(" ");
      let getFilesName = [];
      for (var va of extraArguments) {
        for (var ve of this.exerciseFiles) {
          if (va == ve['FileName'])
            getFilesName.push(va);
        }
      }

      if (getFilesName.length > 0)
        this.files.setValue(getFilesName);
    }
  }

  onSubmitCode() {

    this.checkFileParameters();

    this.re.nativeElement.scrollIntoView({ behavior: "smooth" });

    this.submitted = true;

    if (!this.host.getSessionID()) {
      this.openModal('Work Area', 'Please, login first!', 'Close', '');
      return
    }
    // stop here if form is invalid
    if (this.codeForm.invalid) {
      this.navActive = 1;
      return;
    }

    this.navActive = 4;

    this.codeForm.disable();
    this.disabled = true;

    let container = {} as ContainerStr[];

    //console.log(this.code.MaxTimeout ,this.hostInfo.CodeExecTimeout);

    if (this.exercise.MaxTimeout == 0 || !this.exercise.MaxTimeout)
      this.exercise.MaxTimeout = this.hostInfo.CodeExecTimeout;

    this.codePacket = {
      Token:        this.host.getSessionID().Token,
      Code:         this.code.Code,
      NumberProc:   this.fc['NumberProc'].value.toString(),
      CompArgs:     this.fc['CompArgs'].value.toString(),
      ExecArgs:     this.fc['ExecArgs'].value.toString() + " " + this.fc['ExtraArgs'].value.toString(),
      ExecCmd:      this.fc['ExecCmd'].value.toString(),
      CompCmd:      this.fc['CompCmd'].value.toString(),
      FileName:     this.fileName,
      Container:    this.containers.value,
      Files:        this.files.value,
      Queue:        this.queue.toString(),
      Sequence:     "",
      IdExercise:   this.exercise.Id.toString(),
      MaxTimeout:   (this.exercise.MaxTimeout+2).toString(),
      Next: "",
    };

    //console.log(this.codePacket);

    this.sequence = ['queue', 'compile'];
    if (this.btnCompile == "Compile and Run") {
      this.sequence.push('run');
      this.codePacket.Next = "run";
    }

    this.code.Result = "";

    this.response['Name'] = 'ok';
    this.response['Status'] = "Please wait, we are sending your request to the server.";
    this.programStatus = "is running...";
    this.managerStatus();

  }

  showProcess() {
    let lines = [];
    let process = [];

    lines = this.response['Status'].split('\n');
    lines.forEach(function(v, k){

      //PROCESSOR
      let reg = '{P}(.+){P}';
      let matP = v.match(reg);
      if (matP && matP[1] && !process[matP[1]]) {
        process[matP[1]] = [];
      }
      //RANK && MESSAGE
      reg = '{R}(.+){R}';
      let matR = v.match(reg);
      reg = '{M}(.+){M}';
      let matM = v.match(reg);

      let val = "";
      if (matR && matR[1])
        val = "Rank " + matR[1];

      if (matM && matM[1])
        val += ": " + matM[1];

      if (val != "")
        process[matP[1]].push(val);

    });
    return process;
  }

  getActiveNodes() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "activeNodes",
      Param: params,
    };

    let nodesTemp: string[] = [];
    let num = 0;

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {

          if (data) {
            data.forEach(function (v, k) {
              num += parseInt(v['NumberOfCPUs']);

              if (v['Container'] != null) {
                let c = Object.keys(v['Container']).length;
                if (c > 0) {
                  v['Container'].forEach(function (v1, k1) {
                    if (v1['IP'] != "")
                      nodesTemp.push(v1['IP']);
                  });
                }
              }
            });
          }
          this.numberOfCPUs = num;
          this.fc['NumberProc'].setValue(this.numberOfCPUs);
          this.nodes = nodesTemp;
        });
  }

  getFiles() {
    let filter: ParamStr[] = [];
    filter.push({Name: "Id", Value: this.exercise.Id.toString()});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-answer-files",
      Filter: filter,
    };

    let fileTemp: string[] = [];
    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.exerciseFiles = data;
        });
  }

  showQueue() {
    let params: ParamStr[] = [];
    params.push({Name: "", Value: this.codePacket.Token});

    let request: RequestStr = {
      Request: "queueCheck",
      Param: params,
    };
    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          //console.log(this.codePacket.Token, data);
          this.responseQueue = data;
        });
  }

  runCode() {
    //console.log("CodeEditor | runCode", this.codePacket);
    this.host.request(this.codePacket, 'runExecCode')
        .subscribe(data => {
          this.responseTemp = data;
          this.response = this.responseTemp;
        });
  }

  async managerStatus() {
    let wait = true;
    let wait_queue = false;
    let wait_compile = false;
    let wait_run = false;
    let sequence = "queue";
    let timeout = false;

    //console.log(this.code);
    this.programTimeout = this.exercise.MaxTimeout;
    this.command = "";
    this.code.Event = "";
    this.response.Command = "";
    this.responseQueue = {} as QueueStr;

    while (wait) {
      //Let's refresh the Session Timeout
      this._eventEmitter.setLoginChange({Name: "RefreshSession", Status: ""});

      if (timeout == true) {
        if (this.responseQueue.Count > 5)
          this.programTimeout = this.exercise.MaxTimeout - this.responseQueue.Count;
        else
          this.programTimeout--;
      }

      await this.delay(1000);
      if (wait_queue && this.responseQueue.Position > 1)
        this.queueStatus = "getting position..."
      await this.delay(1000);

      //console.log(sequence, this.responseTemp);

      if (sequence == "queue") {
        if (!wait_queue) {
          this.responseTemp = {} as CodeResponseStr;
          this.codePacket.Sequence = "queue";
          this.runCode();
          wait_queue = true;
        }

        if (wait_queue) {
          if (this.responseTemp['Name'] == "ok") {
            this.showQueue();
            if (this.responseQueue.Position)
              this.queueStatus = this.responseQueue.Position.toString();
          }

          if (this.responseQueue.Position == 1) {
            sequence = "compile";
          }
        }
      }

      if (sequence == "compile") {
        if (!wait_compile) {
          this.responseTemp = {} as CodeResponseStr;
          this.codePacket.Sequence = "compile";
          this.runCode();
          wait_compile = true;
        }

        if (wait_compile) {
          if (this.responseTemp['Name'] == 'ok' || this.responseTemp['Name'] == 'info') {

            //SHOW COMPILE RESULTS
            this.code.Event = this.response.Command + " (time " + this.response.CompTime + ")";

            if (this.fileName)
              this.code.Event += "\nFilename: " + this.fileName;

            this.command += this.code.Event

            this.code.Event += "\n" + this.response.Status;
            this._eventEmitter.setCode(this.code);

            if (this.sequence.includes("run"))
              sequence = "run";
            else
              wait = false;
          }
        }
      }

      if (sequence == "run") {
        if (!wait_run) {
          this.responseTemp = {} as CodeResponseStr;
          this.codePacket.Sequence = "run";
          this.runCode();
          this.responseQueue = {} as QueueStr;
          wait_run = true;
        }

        if (wait_run) {
          timeout = true;
          this.showQueue();
          if (this.responseTemp['Name'] == 'ok') {
            //SHOW RUN RESULTS
            this.msgProcess = this.showProcess();
            this.code.Result = this.responseTemp.Status;
            this.code.CheckCount = this.responseTemp.CheckCount;
            this.code.CheckList = this.responseTemp.CheckList;
            this.code.ExecTime = this.responseTemp.ExecTime;

            this.code.Event = this.response.Command + " (time " + this.response.ExecTime + ")";
            this.command += "\n\n" + this.code.Event

            this.code.Event += "\n" + this.response.Status;
            this.code['DIFF'] = true;
            this._eventEmitter.setCode(this.code);

            this.responseTemp.Status = "Code copied to result area.";
            wait = false;
          }
        }
      }

      if (this.responseTemp['Name'] == 'error') {
        wait = false;
        this.programTimeout = 0;
      }

    }

    this.queueStatus = "done!";

    this.codeForm.enable();
    this.disabled = false;
    this.sequence = [''];
    this.programStatus = "output";
    this.programTimeout = 0;

    if (!this.exercise.Id) {
      this._snackBar.open("Execution finished.", '', {
        duration: 5000, panelClass: ['ok']
      });
    }

  }

  codeTempCall(option) {
    if (option == "load") {
      let userSession = this.host.getSessionID();
      this.getCodeTemp(userSession.Id, this.exercise.Id);
    }
    if (option == "none")
      this.codeTempMode = "none";
    if (option == "auto")
      this.codeTempMode = "auto";
  }


  getCodeTemp(userId, exerciseId) {
    if (!exerciseId)
      exerciseId = -1;

    let filter: ParamStr[] = [];
    filter.push({Name: "UserId", Value: userId.toString()});
    filter.push({Name: "IdExerciseAnswers", Value: exerciseId.toString()});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "code-temp",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data) {
            //console.log(requestDB, data);
            this.codeTemp = data[0];
            this.code.Code = this.codeTemp.Code;
            this.code.Command =this.codeTemp.Command
          }
        });
  }

  updateCodeTemp() {
    if (!this.codeTemp.IdExerciseAnswers)
      this.codeTemp.IdExerciseAnswers = -1;

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: this.codeTemp,
      Custom: "CodeTemp",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data['Name'] == "ok" && parseInt(data['Status']) >= 1)
            this.codeTemp.Id = data['Status'];
        });
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  openModal(title, text, yes, no) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: title,
      text: text,
      yes: yes,
      no: no
    };

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  }

  formatBytes(bytes,decimal=2){
    if(0===bytes)
      return"0 Bytes";
    const c=0>decimal?0:decimal,d=Math.floor(Math.log(bytes)/Math.log(1024));
    return parseFloat((bytes/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
  }

}
