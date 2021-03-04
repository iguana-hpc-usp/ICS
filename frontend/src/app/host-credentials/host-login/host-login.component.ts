import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {HostService} from "../../_services/host.service";
import {HostInfoStr} from "../../_model/hostInfo";
import {AuthStr, ParamStr, RequestStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {Router} from "@angular/router";
import {dialogStr} from "../../_model/dialog";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../../_services/dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-host-login',
  templateUrl: './host-login.component.html',
  styleUrls: ['./host-login.component.css']
})

export class HostLoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  userSession = {} as AuthStr;

  hostInfo = {} as HostInfoStr;

  response = {} as ResponseStr;

  constructor(
      private formBuilder: FormBuilder,
      private host: HostService,
      private _eventEmitter: EventEmitterService,
      private router: Router,
      public dialog: MatDialog,
      private _snackBar: MatSnackBar,
  ){ }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      owner: ['',
        [Validators.required,
          Validators.minLength(3),
        ]
      ],
      password: ['',
        [Validators.required,
          Validators.minLength(3),
        ]
      ],
    }, {});

    this.userSession = this.host.getSessionID();

    this._eventEmitter.hostInfo.subscribe(
        data => {
          this.hostInfo = data;
        },
    );

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  checkChangePass(): void {
    let filter: ParamStr[] = [];
    filter.push({Name: "Email", Value: this.userSession.Owner});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "host-credentials",
      Filter : filter,
    };
    window.localStorage.setItem("ForceChangePass", "0");

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data && data[0]['ForceChangePass'] == "1") {
            window.localStorage.setItem("ForceChangePass", "1");
            this.router.navigate(['edit-user']);
            //console.log(data, window.localStorage.getItem("ForceChangePass"));
          }
        });
  };

  setResponse(message, action) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 3000, panelClass: [action]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.setResponse(this.response['Status'], this.response['Name']);

    let hostInfoTemp = this.hostInfo;

    hostInfoTemp['Owner'] = this.registerForm.get('owner').value;
    hostInfoTemp['Password'] = this.registerForm.get('password').value;

    this.host.request(hostInfoTemp, 'setLogin')
        .subscribe(data => {
          this.response = data;
          if (this.response['Name'] == "Admin" || this.response['Name'] == "User") {
            this.host.setSessionID(hostInfoTemp['Owner'], this.response['Name'], this.response['Status']);
            this.userSession = this.host.getSessionID();

            //console.log("App Host-Credential | userSession: ", data);

            this.setResponse("Login successfully!", "ok");

            // We will notify the root app about new login
            this._eventEmitter.setLoginChange({Name: "startSession", Status: ""});
            this.checkChangePass();
            this.router.navigate(['welcome']);

          } else {
            this.setResponse(this.response['Status'], this.response['Name']);

            //this.registerForm.reset();
            //this.f['owner'].clearValidators();
            //this.f['owner'].setErrors({ 'generic': this.response['Status'] });
            return;
          }
        });
  }

  recoverPassword() {
    this.response = {} as ResponseStr;

    let input: dialogStr[] = [];

    input.push({Model: "", Name: "email", Type: "text",  Title: "email account"});

    let ret = this.openModal('Recover Password',
        'Please enter your login email. \n' +
        'If the account exists in our database, we will send you an email for password recovery.',
        'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {

      if (data && data['button'] == 'YES') {
        if (!data['input'][0]['Model'] ||
            data['input'][0]['Model'] == "") {
          this.response['Name'] = "error";
          this.response['Status'] = "Please, type a email account...";
          return;
        }

        let email;

        if (data['input'][0] && data['input'][0]['Model'] != "")
          email = data['input'][0]['Model'];

        let params: ParamStr[] = [];
        params.push({Name:"email", Value: email});

        let request: RequestStr = {
          Request: "recoverPassword",
          Param: params,
        };

        this.setResponse("Sending request for password recovery...", "info");

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
              this.response = data;
              //console.log('Host-Credentials: data ', data);
              this.setResponse(this.response['Status'], this.response['Name']);

            });
      }
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
