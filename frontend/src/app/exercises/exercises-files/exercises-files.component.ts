import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {ExerciseFilesStr} from "../../_model/exercises";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'exercises-app-files',
    templateUrl: './exercises-files.component.html',
    styleUrls: ['./exercises-files.component.css']
})
@Injectable({
    providedIn: 'root'
})
export class ExercisesFilesComponent implements OnInit {
    // @ts-ignore
    @ViewChild('inputFile')
    inputFile: ElementRef;

    displayedColumns = ['Id', 'Name', 'Size', 'Action'];
    dataSource: MatTableDataSource<ExerciseFilesStr>;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

    // @ts-ignore
    @ViewChild('selectfile') el:ElementRef;   //in html we make variable of selectfile
    progress = { loaded : 0 , total : 0 };

    response = {} as ResponseStr;
    editForm: FormGroup;
    exerciseFiles = {} as ExerciseFilesStr;

    files: ExerciseFilesStr[] = [];

    exerciseId: string;
    load = 0;

    constructor(
        private host: HostService,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private _snackBar: MatSnackBar,
    ) {}

    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }

        this.editForm = this.formBuilder.group({
            avatar: [null]
        });

        this.exerciseId = window.localStorage.getItem("ExerciseId");
        if (this.exerciseId)
            this.getFiles();

        //Getting value from child CodeComponent
        this._eventEmitter.exercise.subscribe(
            data => {
                if (data && data['Id']) {
                    window.localStorage.setItem("ExerciseId", data['Id'].toString());
                    this.exerciseId = data['Id'].toString();
                    this.getFiles();
                }
            });
    }

    setResponse(message, action) {
        //console.log(message, action);

        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }

    setRoute(val) {
        this.router.navigate([val])
    }

    download(file: ExerciseFilesStr) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    }

    delete(file: ExerciseFilesStr): void {

        let filter: ParamStr[] = [];

        filter.push({Name: "Id", Value: file.Id.toString()});

        let requestDB: UniversalDTOStr = {
            Operation: "drop",
            TableData: null,
            Custom: "exercises-files",
            Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.response = data;
                this.setResponse(this.response['Status'], this.response['Name']);

                this.getFiles();
            });
    }

    uploadFile() {
        this.response = {} as ResponseStr;

        var filedata = this.el.nativeElement.files[0];

        let param = {} as ParamStr;
        param.Name = "Exercise";
        param.Value = this.exerciseId;

        this.host.uploadFileData(filedata, param)
            .subscribe(
                (data: any) => {
                    if (data.type == 1 && data.loaded && data.total) {
                        this.progress.loaded = data.loaded;
                        this.progress.total = data.total;
                    } else if (data.body) {
                        //console.log("Data Uploaded");
                        //console.log(data.body);
                        this.response = data.body;

                        if (data['body']['Name'] == "ok")
                            this.response['Status'] = "File inserted successfully."

                        this.setResponse(this.response['Status'], data['body']['Name']);
                        this.inputFile.nativeElement.value = "";
                        this.getFiles();
                        this.load = 0;
                    }
                },
                error => console.log(error)
            )
    }

    formatBytes(bytes,decimal=2){
        if(0===bytes)
            return"0 Bytes";
        const c=0>decimal?0:decimal,d=Math.floor(Math.log(bytes)/Math.log(1024));
        return parseFloat((bytes/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
    }

    getFiles() {
        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: this.exerciseId});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe( data => {
                this.files = data;
                this.dataSource = new MatTableDataSource(this.files);
                if (this.files)
                    this.dataSource.sort = this.sort;

                this.load = 1;
                this.progress = { loaded : 0 , total : 0 };
            });
    }
}
