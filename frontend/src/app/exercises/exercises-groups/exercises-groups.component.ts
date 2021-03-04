import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {GroupsStr} from "../../_model/groups";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {EventEmitterService} from "../../_services/event-emitter.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'exercises-app-groups',
  templateUrl: './exercises-groups.component.html',
  styleUrls: ['./exercises-groups.component.css']
})
export class ExercisesGroupsComponent implements OnInit {

  response = {} as ResponseStr;
  editForm: FormGroup;

  groups: GroupsStr[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  memberCtrl = new FormControl();
  filteredMembers: Observable<GroupsStr[]>;
  members: GroupsStr[] = [];
  membersDrop: GroupsStr[] = [];

  exerciseId: string;
  load = 0;

  @ViewChild('memberInput', {static: false}) memberInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(
      private host: HostService,
      private formBuilder: FormBuilder,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      private _snackBar: MatSnackBar,
  ) {
    this.filteredMembers = this.memberCtrl.valueChanges.pipe(
        startWith(null),
        map((member: string | null) => member ? this._filter(member) : this.groups.slice()));
  }

  ngOnInit() {
    //Credentials
    if (this.host.getSessionID().Module != "Admin") {
      this.router.navigate(['welcome']);
      return;
    }

    this.editForm = this.formBuilder.group({
      Id: [''],
      IdExercise: [''],
      IdGroup: [''],
      Name: [''],
    });

    this.exerciseId = window.localStorage.getItem("ExerciseId");
    if (this.exerciseId)
      this.getMembers();

    this.getGroups();

    //Getting value from child CodeComponent
    this._eventEmitter.exercise.subscribe(
        data => {
          if (data && data['Id']) {
            window.localStorage.setItem("ExerciseId", data['Id'].toString());
            this.exerciseId = data['Id'].toString();
            this.getMembers();
          }
        });
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  get f() {
    return this.editForm.controls;
  }

  add(member): void {
    // Add our member
    if (member && member.Id != 'undefined') {
      this.members.push(member);
      this.memberCtrl.setValue(null);
    }
  }

  setResponse(message, action) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 3000, panelClass: [action]
    });
  }

  remove(group: GroupsStr): void {
    const index = this.members.indexOf(group);

    if (index >= 0) {
      this.membersDrop.push(this.members[index]);
      this.members.splice(index, 1);
    }

    let filter: ParamStr[] = [];

    filter.push({Name: "IdExercise", Value: this.exerciseId});
    filter.push({Name: "IdGroup", Value: group.Id.toString()});

    let requestDB: UniversalDTOStr = {
      Operation: "drop",
      TableData: null,
      Custom: "exercises-groups",
      Filter : filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe(data => {
          //console.log(data, requestDB);
          this.response = data;
          this.response.Name = "ok";
          this.response.Status = "Record updated successfully.";
          this.setResponse(this.response['Status'], this.response['Name']);
        });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.members.push(event.option.value);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue(null);

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: {IdGroup: event.option.value['Id'], IdExercise: this.exerciseId},
      Custom: "ExerciseGroups",
      Filter: filter,
    };

    let res;
    this.host.request(requestDB, 'FDBRequest')
        .subscribe(data => {
          if (data) {
            res = data;
            if (res.Name == "ok" && parseInt(res.Status) > 0) {
              this.response.Name = "ok";
              this.response.Status = "Record updated successfully.";
              //console.log(res);
            }
            this.setResponse(this.response['Status'], this.response['Name']);
            //this.getMembers();
          }
        });
  }

  private _filter(value: string): GroupsStr[] {
    let usersFiltered: GroupsStr[] = [];

    if (value != "" && typeof(value) != 'object') {
      this.groups.forEach(function (i) {
        if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
          usersFiltered.push(i);
        }
      });
      return usersFiltered;
    }
  }

  getMembers() {
    let filter: ParamStr[] = [];
    filter.push({Name: "IdExercise", Value: this.exerciseId});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "exercises-groups",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data)
            this.members = data;
          //console.log("GroupsMembers | getMembers ", this.members, request);
        });
  }

  getGroups() {
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "groups",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.groups = data;
          this.load = 1;
          //console.log("groups | dbList: ", data);
        });
  }
}
