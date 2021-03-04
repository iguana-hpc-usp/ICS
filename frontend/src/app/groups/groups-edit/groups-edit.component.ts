import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {GroupsStr} from "../../_model/groups";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'groups-app-edit',
  templateUrl: './groups-edit.component.html',
  styleUrls: ['./groups-edit.component.css']
})
export class GroupsEditComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  response = {} as ResponseStr;
  group: GroupsStr;

  groupId: string;

  constructor(
      private formBuilder: FormBuilder,
      private host: HostService,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      private _snackBar: MatSnackBar,
  ){}

  ngOnInit() {
    //Credentials
    if (this.host.getSessionID().Module != "Admin") {
      this.router.navigate(['welcome']);
      return;
    }

    this.registerForm = this.formBuilder.group({
      Name: ['',
        [Validators.required,
          Validators.minLength(4),
        ]
      ],
      Description: ['',[]],
      Id: ['',[]],
    }, {});

    this.groupId = window.localStorage.getItem("editGroupId");

    if (this.groupId)
      this.getGroups(this.groupId);
  }

  get fe() { return this.registerForm.controls; }

  getGroups(groupId) {

    let filter: ParamStr[] = [];
    filter.push({Name: "Id", Value: groupId});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "groups-edit",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          delete data[0]['mCount'];
          this.registerForm.setValue(data[0]);
          //console.log("Groups Edit | dbList: ", data, requestDB);
        });
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  setResponse(message, action) {
    let snackBarRef = this._snackBar.open(message, 'Go to Groups', {
      duration: 3000, panelClass: [action]
    });

    snackBarRef.onAction().subscribe(() =>
        this.router.navigate(['view-group'])
    );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: this.registerForm.value,
      Custom: "Groups",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.response = data;

          if (this.response.Name == "ok" && !this.groupId)
            this.response.Status = "Record inserted successfully.";

          if (this.response.Name == "ok" && this.groupId)
            this.response.Status = "Record updated successfully.";

          this.setResponse(this.response['Status'], this.response['Name']);
          //this.router.navigate(['Groups']);
          //console.log("Groups onSubmit | edit: ", this.editForm.value);
        });
  }

}
