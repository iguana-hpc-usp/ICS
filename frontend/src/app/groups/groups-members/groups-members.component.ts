import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {UsersStr} from "../../_model/users";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'groups-app-members',
  templateUrl: './groups-members.component.html',
  styleUrls: ['./groups-members.component.css']
})
export class GroupsMembersComponent implements OnInit {

  response = {} as ResponseStr;
  editForm: FormGroup;

  users: UsersStr[] = [];
  groupName: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  memberCtrl = new FormControl();
  filteredMembers: Observable<UsersStr[]>;
  members: UsersStr[] = [];
  membersDrop: UsersStr[] = [];

  IdGroup: number;

  @ViewChild('memberInput', {static: false}) memberInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(
      private host: HostService,
      private formBuilder: FormBuilder,
      private router: Router,
      private _snackBar: MatSnackBar,
  ) {
    this.filteredMembers = this.memberCtrl.valueChanges.pipe(
        startWith(null),
        map((member: string | null) => member ? this._filter(member) : this.users.slice()));
  }

  ngOnInit() {
    //Credentials
    if (this.host.getSessionID().Module != "Admin") {
      this.router.navigate(['welcome']);
      return;
    }

    this.editForm = this.formBuilder.group({
      Id: [''],
      IdUser: [''],
      IdGroup: [''],
      Name: [''],
    });

    this.IdGroup = parseInt(window.localStorage.getItem("editGroupId"));
    this.groupName = window.localStorage.getItem("groupName");
    this.getUsers();
    this.getMembers();
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

  remove(member: UsersStr): void {
    const index = this.members.indexOf(member);

    if (index >= 0) {
      this.membersDrop.push(this.members[index]);
      this.members.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.members.push(event.option.value);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue(null);
  }

  private _filter(value: string): UsersStr[] {
    let usersFiltered: UsersStr[] = [];

    if (value != "" && typeof(value) != 'object') {
      this.users.forEach(function (i) {
        if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
          usersFiltered.push(i);
        }
      });
      return usersFiltered;
    }
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
    this.deleteMembers();

    let temp = this.editForm;
    delete temp.controls['Name'];
    delete temp.controls['Id'];

    for (let index = 0; index < this.members.length; ++index) {
      temp.controls['IdUser'].setValue(this.members[index].Id);
      temp.controls['IdGroup'].setValue(this.IdGroup);

      let filter: ParamStr[] = [];
      let requestDB: UniversalDTOStr = {
        Operation: "update",
        TableData: temp.value,
        Custom: "Members",
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
                this.setResponse(this.response['Status'], this.response['Name']);
              }
              this.getMembers();
            }
          });
    }
  }

  deleteMembers(): void {
    for (let index = 0; index < this.membersDrop.length; ++index) {
      let filter: ParamStr[] = [];

      filter.push({Name: "IdGroup", Value: this.IdGroup.toString()});
      filter.push({Name: "IdUser", Value: this.membersDrop[index].Id.toString()});

      let requestDB: UniversalDTOStr = {
        Operation: "drop",
        TableData: null,
        Custom: "members",
        Filter : filter,
      };

      this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {
            this.response = data;
            this.response.Name = "ok";
            this.response.Status = "Record updated successfully.";
            this.setResponse(this.response['Status'], this.response['Name']);
          });
    }
  }

  getMembers() {
    let filter: ParamStr[] = [];

    filter.push({Name: "IdGroup", Value: this.IdGroup.toString()});
    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "members",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data)
            this.members = data;
          //console.log("GroupsMembers | getMembers ", this.members, request);
        });
  }

  getUsers() {
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "users",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.users = data;

          //console.log("Users | dbList: ", data);
        });
  }
}
