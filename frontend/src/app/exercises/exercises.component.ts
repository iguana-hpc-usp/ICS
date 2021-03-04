import {Component, OnInit, ViewChild} from '@angular/core';
import {ExercisesStr} from "../_model/exercises";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../_services/event-emitter.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  cAdmin = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers', 'Action'];
  cUser = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers'];
  displayedColumns;

  dataSource: MatTableDataSource<ExercisesStr>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  exercises: ExercisesStr[] = [];
  response = {} as ResponseStr;

  exerciseCount: number;

  userSession = {} as AuthStr;

  load = 0;

  constructor(
      private host: HostService,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      public dialog: MatDialog,
      private _snackBar: MatSnackBar,
      ) {
  }

  ngAfterViewInit() {
    this.getExercises();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    window.localStorage.removeItem("TryACode");

    if (this.userSession.Module == 'Admin')
      this.displayedColumns = this.cAdmin;
    else
      this.displayedColumns = this.cUser;
  }

  addExercise(): void {
    window.localStorage.removeItem("ExerciseId");
    this.router.navigate(['add-exercise']);
  };

  viewAnswer(exercise: ExercisesStr, IsExpired: string): void {
    window.localStorage.setItem("ExerciseId", exercise.Id.toString());
    this.router.navigate(['view-answer']);
  };

  editExercise(exercise: ExercisesStr): void {
    window.localStorage.setItem("ExerciseId", exercise.Id.toString());
    this.router.navigate(['edit-exercise']);
  };

  setResponse(message, action) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 3000, panelClass: [action]
    });
  }

  deleteExercise(exercise: ExercisesStr): void {
    let ret = this.openModal('Delete Exercise: ' + exercise.Title,
        'Confirm to delete the exercise?',
        'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: exercise.Id.toString()});

        let requestDB: UniversalDTOStr = {
          Operation: "drop",
          TableData: null,
          Custom: "exercises",
          Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
              this.response = data;

              this.setResponse(this.response['Status'], this.response['Name']);

              if (this.response['Name'] == "ok") {
                this.getExercises();
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

  getExercises() {
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "exercises",
      Filter: filter,
    };

    if (this.userSession.Module == "User") {
      filter.push({Name: "User", Value: this.userSession.Id});

      requestDB = {
        Operation: "view",
        TableData: null,
        Custom: "exercises-user",
        Filter: filter,
      };
    }
    let gTemp: ExercisesStr[] = [];

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.exercises = data;
          if (this.exercises) {
            this.dataSource = new MatTableDataSource(this.exercises);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            delete this.dataSource;
          }

          this.load = 1;
          //console.log("Exercises ==> Module | dbList | this.request ",
          //    this.userSession.Module, requestDB, this.exercises);
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

}

