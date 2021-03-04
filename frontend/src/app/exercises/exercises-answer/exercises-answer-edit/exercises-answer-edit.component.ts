import { Component, OnInit } from '@angular/core';
import {AnswersHistoryStr, ExerciseAnswersStr, ExercisesStr} from "../../../_model/exercises";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../../_model/service";
import {HostService} from "../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../_services/event-emitter.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DiffEditorModel} from "ngx-monaco-editor";
import {formatDate} from "@angular/common";
import {CodeEmitterStr} from "../../../_model/code";
import {DialogComponent} from "../../../_services/dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-exercises-answer-edit',
  templateUrl: './exercises-answer-edit.component.html',
  styleUrls: ['./exercises-answer-edit.component.css']
})
export class ExercisesAnswerEditComponent implements OnInit {

  editForm: FormGroup;
  editor: any;

  resultOptions = {
    theme: 'vs-dark',
    language: 'c',
    automaticLayout: true,
    readOnly: true,
    ignoreTrimWhitespace: false,
  };

  responseEdit = {} as ResponseStr;
  exercise = {} as ExercisesStr;
  answer = {} as ExerciseAnswersStr;
  answersUser = {} as ExerciseAnswersStr;

  diff: string= '';
  exerciseId: string= '';
  answerId: string='';

  code = {} as CodeEmitterStr;
  userSession = {} as AuthStr;

  history = [];
  load = 0;
  TotalEx = 0;
  Score = '';

  Countdown: string;

  navActive = 1;

  constructor(
      private host: HostService,
      public dialog: MatDialog,
      private formBuilder: FormBuilder,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      private _snackBar: MatSnackBar,
  ){}

  originalModel: DiffEditorModel = {
    code: '',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: '',
    language: 'text/plain',
  };

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      Code: [''],
      Date: [''],
      Result: [''],
      Status: [''],
      Command: [''],
      ExecTime: [''],
      CheckCount: [''],
      CheckList: [''],
      Comment: [''],
      Id: [''],
      IdUser: [''],
      IdExercise: [''],
      Name: [''],
    });

    this.userSession = this.host.getSessionID();

    this.exerciseId = window.localStorage.getItem("ExerciseId");
    this.answerId = window.localStorage.getItem("AnswerId");

    this.execBegin();
    
    //Getting value from child CodeComponent
    this._eventEmitter.code.subscribe(
        data => {
          this.code = data;

          let message;
          let typeM;
          if (this.code.Result && this.originalModel.code) {
            this.modifiedModel = {code: this.code.Result, language: 'text/plain'};
            if (this.originalModel.code == this.modifiedModel.code) {
              this.diff = "EQUAL";
              message = "Your result is the same as the result of the exercise. Congratulations!";
              typeM = "ok"
            } else {
              this.diff = "NOT EQUAL";
              message = "Your result is not the same as the result of the exercise!"
              typeM = "error"
            }

            if (this.code['DIFF']) {
              let snackBarRef;
              snackBarRef = this._snackBar.open(message, 'Go to DIFF tab', {
                duration: 5000, panelClass: [typeM]
              });
              snackBarRef.onAction().subscribe(() =>
                  this.navActive = 3
              );

              this.code['DIFF'] = false;
            }

          }

          if (this.code.Event)
            this.history.push(this.registerHistory(this.code.Event));

        },
    );
  }

  execBegin() {
    //Get exercise data
    if (this.exerciseId) {
      this.getExercise(this.exerciseId);
    }

    //Get answer data
    if (this.answerId) {
      this.getAnswer(this.answerId);
    }

    this.getAnswersUser(this.exerciseId);
  }

  getExercise(exerciseId) {
    let filter: ParamStr[] = [];
    filter.push({Name: "Id", Value: exerciseId});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-answer",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data) {
            //console.log(data);
            this.originalModel = {code: data[0]['Result'], language: 'text/plain'};
            this.exercise = data[0];

            this._eventEmitter.setExercise(this.exercise);
            this.managerStatus();
          }
          if (this.answerId == '')
            this.load = 1;
        });
  }

  getAnswer(answerId) {
    let filter: ParamStr[] = [];
    let requestDB;

    filter.push({Name: "Id", Value: this.answerId});

    requestDB = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-answer-edit",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {

          if (data) {
            this.answer = data[0];

            if (this.answerId) {
              this.editForm.setValue(this.answer);
              this.code = {
                Result:     this.answer.Result,
                Event:      this.answer.Event,
                Command:    this.answer.Command,
                CheckCount: this.answer.CheckCount,
                CheckList:  this.answer.CheckList,
                Code:       this.answer.Code,
                ExecTime:   this.answer.ExecTime,
              };
              this.diff = this.answer['Status'];
              this.modifiedModel = {code: this.code.Result, language: 'text/plain'};
              this._eventEmitter.setCode(this.code);
            }
          }
          //console.log("Exercises Edit | dbList: ", data, this.code);

          this.load = 1;
        });
  }

  getAnswersUser(exerciseId) {
    let filter: ParamStr[] = [];
    let requestDB;

    filter.push({Name: "IdExercise", Value: exerciseId});
    filter.push({Name: "IdUser", Value: this.userSession.Id});

    requestDB = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-answer-user",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data) {
            this.answersUser = data[0];
            this.TotalEx = parseInt(data[0]['TotalEx']);
            this.Score = data[Object.keys(data).length-1]['Score'];
          } else {
            this.TotalEx = 0;
          }
        });
    this.load = 1;
  }

  // convenience getter for easy access to form fields
  get fe() { return this.editForm.controls; }

  setRoute(val) {
    this.router.navigate([val])
  }

  onSubmit() {
    this.responseEdit = {} as ResponseStr;

    this.getAnswersUser(this.exerciseId);
    if (this.TotalEx >= this.exercise.MaxSubmissions) {
      this.responseEdit.Name = "error";
      this.responseEdit.Status = "The deadline to send the exercise has ended.";
      return;
    }

    let max = '';
    if (this.exercise.MaxSubmissions > 0) {
      max = "Remaining attempts: " +
          (this.exercise.MaxSubmissions - this.TotalEx) + "\n\n";
    }
    let ret = this.openModal('Exercise Submission',
        max + 'Do you want to submit the exercise?',
        'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        this.fe['Date'].setValue('now');
        this.fe['Result'].setValue(this.code.Result);
        this.fe['Code'].setValue(this.code.Code);
        this.fe['Status'].setValue(this.diff);
        this.fe['IdExercise'].setValue(this.exerciseId);
        this.fe['Id'].setValue('');
        this.fe['CheckCount'].setValue(this.code.CheckCount);
        this.fe['CheckList'].setValue(this.code.CheckList);
        this.fe['ExecTime'].setValue(this.code.ExecTime);
        this.fe['Command'].setValue(this.code.Command);

        delete this.fe['Name'];

        //if (!this.answerId || this.answerId == "")
        this.fe['IdUser'].setValue(this.userSession.Id.toString());

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
          Operation: "update",
          TableData: this.editForm.value,
          Custom: "ExerciseAnswers",
          Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
              this.responseEdit = data;
              //console.log(data);

              //Let's save the history
              if (this.responseEdit.Name == "ok") {
                let id;
                id = this.responseEdit.Status;

                //console.log(this.history);

                this.history.forEach((element) => {
                  this.submitHistory(element, id);
                });

                this.history = [];

                this.responseEdit = data;
                if (this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0)
                  this.responseEdit.Status = "Record inserted successfully.";

                let snackBarRef = this._snackBar.open(this.responseEdit.Status, 'Go to Answers', {
                  duration: 3000, panelClass: [this.responseEdit.Name]
                });
                snackBarRef.onAction().subscribe(() => this.router.navigate(['view-answer']));
              } else {
                let snackBarRef = this._snackBar.open(this.responseEdit.Status, this.responseEdit.Name, {
                  duration: 3000, panelClass: [this.responseEdit.Name]
                });
              }
            });
      }
      this.execBegin();
    });
  }

  registerHistory(event) {
    let history = {} as {name: string, date: string, status: string};

    if (event) {
      history.name = event;
      history.date = formatDate(new Date(), 'yyyy-MM-dd HH:mm', 'en');
      history.status = this.diff;

      return history;
    }
  }

  submitHistory(element, id) {

    let answerHistory = {} as AnswersHistoryStr;

    answerHistory.IdExerciseAnswers = id;
    answerHistory.Date = element.date;
    answerHistory.Event = element.name;
    answerHistory.Status = element.status;

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: answerHistory,
      Custom: "AnswersHistory",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          //console.log(data);
          //this.router.navigate(['Exercises']);
          //console.log("Exercises submithistory | edit: ", req, data);
        });
  }

  openModal(title, text, yes, no, input) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: title,
      text: text,
      yes: yes,
      no: no,
      input: input,
    };

    const modalDialog = this.dialog.open(DialogComponent, dialogConfig);

    return modalDialog;
  }

  countdown(distance) {
    distance = distance * 1000;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    return days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
  }

  async managerStatus() {
    let count = true;

    let n = this.exercise['ExIsExpired'];
    if (n <= 0)
      count = false;

    while (count)
    {
      await this.delay(1000);
      n--;
      if (n <= 0) {
        let ret = this.openModal('Finished Time to Submission',
            'The time to submit the exercise is over.',
            'Close', '', '');

        count = false;
        this.execBegin();
      }

      this.Countdown = this.countdown(n);

    }
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

}
