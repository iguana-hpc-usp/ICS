import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../../_services/dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'users-app-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  response = {} as ResponseStr;
  userSession = {} as AuthStr;

  ForceChangePass: string;

  userId: string;

  constructor(
      private formBuilder: FormBuilder,
      private host: HostService,
      private router: Router,
      public dialog: MatDialog,
      private _eventEmitter: EventEmitterService,
      private _snackBar: MatSnackBar,
  ){}

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      Name: ['',
        [Validators.required,
          Validators.minLength(4),
        ]
      ],
      Password: ['',
        [Validators.required,
          Validators.minLength(4),
        ]
      ],
      CPassword: ['',
        [Validators.required,
          Validators.minLength(4),
        ]
      ],
      Email: ['',
        [Validators.required,
          Validators.minLength(4),
          Validators.email
        ]
      ],
      Module: ['User',[]],
      ForceChangePass: ['0',[]],
      TempChangePass: ['',[]],
      Id: ['',[]],
    }, {validator: this.checkPassword});

    //Getting Credentials
    this.userSession = this.host.getSessionID();

    this.ForceChangePass = window.localStorage.getItem("ForceChangePass");

    if (this.host.getSessionID().Module == "Admin") {

      this.userId = window.localStorage.getItem("editUserId");

      if (this.ForceChangePass == "1")
        this.userId = this.userSession.Id;

      if (this.userId)
        this.getUsers(this.userId);

    }

    //Credentials
    if (this.host.getSessionID().Module != "Admin" &&
        this.userSession.Id != "") {
      this.userId = this.userSession.Id;
      this.getUsers(this.userId);
    }
  }

  checkPassword(control: AbstractControl) {
    if (control.get('Password').value != control.get('CPassword').value) {
      control.get('CPassword').setErrors({
        mismatch: true
      });
    }
    return false;
  }

  get fe() { return this.registerForm.controls; }

  getUsers(userId) {
    let filter: ParamStr[] = [];

    if (userId) {
      filter.push({Name: 'Id', Value: userId});

      let requestDB: UniversalDTOStr = {
        Operation: "view",
        TableData: null,
        Custom: "users-edit",
        Filter: filter,
      };

      this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {

            if (data) {
              //console.log(data);
              data[0]['CPassword'] = "";

              if (this.ForceChangePass == "1")
                data[0]['ForceChangePass'] = 0;

              this.registerForm.setValue(data[0]);
            }

            this.fe['Password'].setValue('');

          });
    }
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let temp = this.registerForm.value;
    delete temp['CPassword'];

    //if (this.ForceChangePass == "1")
    //  temp['ForceChangePass'] = "0";

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: temp,
      Custom: "Users",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.response = data;

          if (this.response.Name == "ok") {
            if (!this.userId)
              this.response.Status = "Record inserted successfully.";
            else
              this.response.Status = "Record updated successfully.";
          }

          let action, route = '';
          if (this.userSession.Module == 'Admin') {
            action = 'Go to Users';
            route = 'view-user';
          } else {
            if (!this.userId) {
              action = 'Go to Login Page';
              route = 'host-login';
            } else {
              action = this.response.Name;
              route = 'view-user';
            }
          }

          if (this.response.Name != "ok")
            action = this.response.Name;

          let snackBarRef = this._snackBar.open(this.response.Status, action, {
            duration: 3000, panelClass: [this.response.Name]
          });
          snackBarRef.onAction().subscribe(() =>
            this.router.navigate([route])
          );


          //console.log("Users onSubmit | edit: ", this.response, parseInt(this.response.Status));


          window.localStorage.setItem("ForceChangePass", "0");
          //this.router.navigate(['Users']);
          //console.log("Users onSubmit | edit: ", temp);

          if (this.ForceChangePass == "1") {
            this.openModal('Password changed',
                'Please login with the new password.',
                'Close', '');

            this.host.killSessionID();
            this.userSession = {} as AuthStr;
            this._eventEmitter.setLoginChange({Name: "ok", Status: ""});
            this.router.navigate(['welcome']);
          }

        });

  }

  openModal(title, text, yes, no) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: title,
      text: text,
      yes: yes,
      no: no,
    };

    const modalDialog = this.dialog.open(DialogComponent, dialogConfig);

    return modalDialog;
  }
}
