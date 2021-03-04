import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {ExercisesStr} from "../../_model/exercises";
import {MatDialog} from "@angular/material/dialog";
import {CodeEmitterStr} from "../../_model/code";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {MatSnackBar} from "@angular/material/snack-bar";
import {executionAsyncId} from "async_hooks";

@Component({
    selector: 'exercises-app-edit',
    templateUrl: './exercises-edit.component.html',
    styleUrls: ['./exercises-edit.component.css']
})
export class ExercisesEditComponent implements OnInit {
    public Editor = ClassicEditor;

    editForm: FormGroup;
    date: NgbDateStruct;
    time: NgbTimeStruct;
    exerciseId: string;

    submitted = false;

    responseEdit = {} as ResponseStr;
    exercise = {} as ExercisesStr;

    code = {} as CodeEmitterStr;

    maxFileSize='';

    constructor(
        private host: HostService,
        public dialog: MatDialog,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private _snackBar: MatSnackBar,
    ) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            Id: [''],
            Title: ['', Validators.required],
            Date: ['', Validators.required],
            Time: ['', Validators.required],
            MaxSubmissions: ['', Validators.required],
            MaxTimeout: ['', Validators.required],
            MaxFileSize: [''],
            Content: [''],
            Code: [''],
            Result: [''],
            Command: [''],
            ExecTime: [''],
            CheckCount: [''],
            CheckList: [''],
        });

        this.exerciseId = window.localStorage.getItem("ExerciseId");

        this.getInit();

        //Getting value from child CodeComponent
        this._eventEmitter.code.subscribe(
            data => {
                if (data)
                    this.code = data
            },
        );
    }

    getInit() {
        if (this.exerciseId)
            this.getExercise();
    }

    getExercise() {
        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: this.exerciseId});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-edit",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe( data => {

                if (!data) return;

                data[0]['Date'] = {
                    day: parseInt(data[0]['EDDay']),
                    month: parseInt(data[0]['EDMonth']),
                    year: parseInt(data[0]['EDYear']),
                };
                if (!data[0]['EDHour'])
                    data[0]['EDHour'] = '00';
                if (!data[0]['EDMinute'])
                    data[0]['EDMinute'] = '00';

                data[0]['Time'] = {
                    hour: parseInt(data[0]['EDHour']),
                    minute: parseInt(data[0]['EDMinute']),
                };

                delete data[0]['EDDay'];
                delete data[0]['EDMonth'];
                delete data[0]['EDYear'];
                delete data[0]['EDHour'];
                delete data[0]['EDMinute'];

                delete data[0]['FileContent'];
                delete data[0]['FileName'];

                this.editForm.setValue(data[0]);
                this.code = data[0];
                this.code['ShowDiff'] = 1;

                this._eventEmitter.setCode(this.code);
                this._eventEmitter.setExercise(data[0]);

                this.maxFileSize = this.formatBytes(data[0].MaxFileSize);
            });
    }

    // convenience getter for easy access to form fields
    get fe() { return this.editForm.controls; }

    setRoute(val) {
        this.router.navigate([val])
    }

    onSubmit() {
        this.responseEdit = {} as ResponseStr;

        this.submitted = true;

        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }

        this.fe['Code'].setValue(this.code.Code);
        this.fe['Result'].setValue(this.code.Result);
        this.fe['Command'].setValue(this.code.Command);
        this.fe['ExecTime'].setValue(this.code.ExecTime);
        this.fe['CheckCount'].setValue(this.code.CheckCount);
        this.fe['CheckList'].setValue(this.code.CheckList);

        this.date = this.fe['Date'].value;
        this.time = this.fe['Time'].value;
        //console.log(this.time);

        if (!this.time || this.fe['Time'].value == "") {
            this.fe['Time'].setValue("00:00");
        }

        let temp = this.editForm.value;

        temp['Date'] =
            this.date.year + "-" +
            this.numberFormat(this.date.month) + "-" +
            this.numberFormat(this.date.day) + " " +
            this.numberFormat(this.time.hour) + ":" +
            this.numberFormat(this.time.minute);

        delete temp['Time'];
        //console.log(temp);

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: temp,
            Custom: "Exercises",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe( data => {
                this.responseEdit = data;

                let exercise = {} as ExercisesStr;

                if (!this.exerciseId && this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0) {
                    exercise.Id = parseInt(this.responseEdit.Status);
                    this.responseEdit.Status = "Record inserted successfully.";

                } else if (this.exerciseId && this.responseEdit.Name == "ok") {
                    this.responseEdit.Status = "Record updated successfully.";
                }

                let snackBarRef = this._snackBar.open(this.responseEdit.Status, 'Go to Exercises', {
                    duration: 3000, panelClass: [this.responseEdit.Name]
                });

                if (this.responseEdit.Name == "ok") {
                    if (!this.exerciseId)
                        this.exerciseId = exercise.Id.toString();

                    window.localStorage.setItem("ExerciseId", this.responseEdit.Status);
                    this.exerciseId = this.responseEdit.Status;
                    this._eventEmitter.setExercise(exercise);

                    this.responseEdit.Status = "Record inserted successfully.";

                    snackBarRef.onAction().subscribe(() => this.router.navigate(['view-exercise'])
                    );

                }

                this.getInit();
                //this.router.navigate(['Exercises']);
                //console.log("Exercises onSubmit | edit: ", this.editForm.value);
            });
    }

    getInputMaxFileSize(input) {
        this.maxFileSize = this.formatBytes(input.path[0].value);
    }

    formatBytes(bytes,decimal=2){
        if (bytes < 10)
            return bytes + " Bytes";
        if(0===bytes)
            return"0 Bytes";
        const c=0>decimal?0:decimal,d=Math.floor(Math.log(bytes)/Math.log(1024));
        return parseFloat((bytes/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
    }

    numberFormat(number) {
        if (number.toString().length < 2)
            number = "0" + number;
        return number
    }

}
