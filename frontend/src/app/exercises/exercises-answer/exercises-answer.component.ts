import {Component, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {ExercisesStr, ExerciseAnswersStr} from "../../_model/exercises";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../../_services/dialog/dialog.component";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ExcelService} from '../../_services/file.service';
import {dialogStr} from "../../_model/dialog";
import * as JSZip from "jszip";
import { saveAs } from 'file-saver';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'exercises-answer-app-answer',
  templateUrl: './exercises-answer.component.html',
  styleUrls: ['./exercises-answer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ]
})

export class ExercisesAnswerComponent implements OnInit {
  displayedColumns = ['Id', 'Name', 'Date', 'Status', 'Score', 'TotalEx'];
  dataSource: MatTableDataSource<ExerciseAnswersStr>;
  displayedColumns2 = ['Index2', 'Date2', 'CheckCount2', 'ExecTime2', 'History2', 'Status2', 'Action2'];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;


  exercise = {} as ExercisesStr;
  answers: ExerciseAnswersStr[] = [];
  answersUser: ExerciseAnswersStr[] = [];
  answersXLS: {Name, Submission_Date, Status, Response_Time, Attempts_Number, Events, Score}[] = [];

  response = {} as ResponseStr;
  userSession = {} as AuthStr;

  exerciseId: string;
  load = 0;

  totalAnswers=0;

  constructor(
      private host: HostService,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      public dialog: MatDialog,
      private excelService: ExcelService,
      private _snackBar: MatSnackBar,
  ) { }

  ngAfterViewInit() {
    if (this.exerciseId) {
      this.getExercise(this.exerciseId);
      this.getAnswers(this.exerciseId);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    this.exerciseId = window.localStorage.getItem("ExerciseId");
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  addAnswer(): void {
    window.localStorage.setItem("ExerciseId", this.exerciseId);
    window.localStorage.removeItem("AnswerId");
    this.router.navigate(['add-answer']);
  };

  editAnswer(answer): void {
    window.localStorage.setItem("AnswerId", answer.Id.toString());
    window.localStorage.setItem("ExerciseId", this.exerciseId);
    this.router.navigate(['edit-answer']);
  };

  setResponse(message, action) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 3000, panelClass: [action]
    });
  }

  deleteAnswer(id, name, r, i): void {

    let ret = this.openModal('Delete Exercise of the User: ' + name,
        'Confirm to delete the exercise?',
        'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: id.toString()});

        let requestDB: UniversalDTOStr = {
          Operation: "drop",
          TableData: null,
          Custom: "exercises-answer",
          Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
              this.response = data;
              this.setResponse(this.response['Status'], this.response['Name']);
              if (this.response['Name'] == "ok") {
                this.getAnswers(this.exerciseId);
                //console.log("Exercises-Answer | deleteAnswer: ", this.response, this.exerciseId);
              }
            });
      }
    });
  }

  showList(list: string): void {
    let ret = this.openModal('Code Analysis by Clang-Tidy',
        list,
        'Close', '', '');
  }

  showEvents(id): void {
    this.getHistory(id);
  }

  download(choice): void {
    if (choice == "lastExec") {
      this.answersUser.forEach(answer => {
        this.answersXLS.push({
          Name: answer['Name'],
          Submission_Date: answer.Date,
          Response_Time: answer.ExecTime,
          Status: answer.Status,
          Attempts_Number: answer['TotalEx'],
          Events: answer['History'],
          Score: answer.Score
        })
      });

      this.excelService.exportAsExcelFile(this.answersXLS, this.exercise.Title);
      //console.log(this.answersXLS);
    }

    if (choice == "lastCode") {

      var zip = new JSZip();
      this.answersUser.forEach(answer => {
        zip.file(answer['Name']+'.c', answer.Code);
      });
      
      let name = this.exercise.Title;
      
      zip.generateAsync({type: "blob"}).then(function (content) {
        // see FileSaver.js
        saveAs(content, name);
      });
    }
  }

  showFeedback(id) {
    let ret = this.openModal('Feedback',
        this.answersUser[id].Feedback,
        'Close', '', '');

  }

  changeScore(index, row) {
    let input: dialogStr[] = [];

    input.push({Model: row.Score, Name: "score", Type: "text", Title: "Score"});
    input.push({Model: row.Feedback, Name: "feedback", Type: "text", Title: "Feedback *(Optional)"});

    let ret = this.openModal('Change Score',
        'Please enter the score: ',
        'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {

      if (data && data['button'] == 'YES') {

        let score, feedback;
        if (data['input'][0] && data['input'][0]['Model'] != "")
          score = data['input'][0]['Model'];

        if (data['input'][1] && data['input'][1]['Model'] != "")
          feedback = data['input'][1]['Model'];

        if (!score)
          score = "";

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
          Operation: "update",
          TableData: {IdExercise: this.exerciseId,
            IdUser: row.IdUser,
            Id: row.IdScore,
            Score: score, Feedback: feedback},
          Custom: "ExerciseScores",
          Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
              if (data) {
                if (data['Name'] == 'ok') {
                  this.answersUser[index].Score = score;
                  this.answersUser[index].Feedback = feedback;
                  this.setResponse('Record changed successfully.', 'ok');
                } else {
                  this.setResponse(data['Status'], 'error');
                }
              }
            });
      }
    });
  }

  getHistory(id) {
    let filter: ParamStr[] = [];
    filter.push({Name: "IdExerciseAnswers", Value: id.toString()});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-answer-history",
      Filter: filter,
    };

    let h = "";
    let i = 0;
    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          //console.log(data);

          if (data) {
            data.forEach(history => {
              i++;
              h += "EVENT #"+i+ "\n\nDATE: "+ history.Date + "\nSTATUS: " +
                  history.Status + "\n\n COMMAND\n" + history.Event + "\n\n"
            });
          } else {
            h = "Records not found."
          }

          let ret = this.openModal('Events',
              h,
              'Close', '', '');

        });
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
          //console.log(data);
          if (data) {
            this.exercise = data[0];
            this.exercise['countdown'] = this.countdown(this.exercise['ExIsExpired']);
          }
        });
  }

  getAnswers(exerciseId) {
    let filter: ParamStr[] = [];
    let requestDB;

    filter.push({Name: "Id", Value: this.exerciseId});

    requestDB = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-answer-admin",
      Filter: filter,
    };

    if (this.userSession.Module == "User") {
      filter.push({Name: "IdUser", Value: this.userSession.Id});

      requestDB = {
        Operation: "view",
        TableData: null,
        Custom: "exercises-answer-user",
        Filter: filter,
      };
    }

    this.answersUser = [] as ExerciseAnswersStr[];
    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {

          this.answers = data;

          if (this.answers) {
            let bId;
            let run = [];
            let bAnswer;
            let i = 0;

            this.answers.forEach(answer => {
              if (i == 0) bId = answer.IdUser;

              if (answer.IdUser != bId) {
                bAnswer['run'] = run;
                this.answersUser.push(bAnswer);
                run = [];
              }
              bAnswer = answer;
              run.push(answer);
              bId = answer.IdUser;


              if (this.answers.length == 1 ||
                  this.answers.length == i+1) {

                bAnswer['run'] = run;
                this.answersUser.push(bAnswer);
                run = [];
              }

              i++;
              this.totalAnswers++;
            });

            this.dataSource = new MatTableDataSource(this.answersUser);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

          } else {
            delete this.answersUser;
            delete this.dataSource;
          }
          this.load = 1;
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

}