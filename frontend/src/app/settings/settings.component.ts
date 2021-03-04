import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthStr, ParamStr, RequestStr, ResponseStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {EventEmitterService} from "../_services/event-emitter.service";

@Component({
  selector: 'settings-module',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  response = {} as ResponseStr;
  userSession = {} as AuthStr;

  constructor(
    private formBuilder: FormBuilder,
    private host: HostService,
    private router: Router,
    private _eventEmitter: EventEmitterService,
  ){}

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      PublicInterface: ['',[]],
      BackendPort: ['',[]],
      FrontendPort: ['',[]],
      StartContainers: ['',[]],
      MaxContainers: ['',[]],
      OperationMode: ['',[]],
      ClusterName: ['',[]],
      ClusterPassword: ['',[]],
      HostUser: ['',[]],
      HostPassword: ['',[]],
      SelfRegistration: ['',[]],
      CodeExecTimeout: ['',[]],
      Queue: ['',[]],
      MaxConcurrency: ['',[]],
      Debug: ['',[]],
      Error: ['',[]],
      SmtpServer: ['',[]],
      SmtpPort: ['',[]],
      SmtpUser: ['',[]],
      SmtpPassword: ['',[]],
    }, {});

    //Getting Credentials
    this.userSession = this.host.getSessionID();

    //Credentials
    if (this.host.getSessionID().Module != "Admin")
      this.router.navigate(['welcome']);

    this.getConfigs();
  }

  get fe() { return this.registerForm.controls; }

  getConfigs() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "settings",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
      .subscribe(data => {
        //console.log("Settings | getConfigs: ", data);
        this.registerForm.setValue(data);
      });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.host.request(this.registerForm.value, 'setConfigs')
      .subscribe( data => {
        this.response = data;
        //console.log("Users onSubmit | edit: ", this.registerForm.value);
      });
  }

}

