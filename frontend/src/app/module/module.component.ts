import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthStr, ResponseStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {EventEmitterService} from "../_services/event-emitter.service";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  userSession = {} as AuthStr;
  response = {} as ResponseStr;

  constructor(
    private router: Router,
    private host: HostService,
    private _eventEmitter: EventEmitterService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    //Getting value from HostCredentials
    this._eventEmitter.loginChange.subscribe(
      data => {
        this.userSession = this.host.getSessionID();
        //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', this.userSession);
      },
    );
  }

  setRoute(val) {
    //Getting Credentials
    this.userSession = this.host.getSessionID();

    if (!this.userSession.Owner) {

      let snackBarRef = this._snackBar.open("Please, login first!", 'Login', {
        duration: 3000, panelClass: ['info']
      });
      snackBarRef.onAction().subscribe(()=>
          this.router.navigate(['host-login'])
      );

      this.router.navigate(['welcome']);
      return;
    } else {
      this.response = {} as ResponseStr;
    }
    this.router.navigate([val])
  }
}
