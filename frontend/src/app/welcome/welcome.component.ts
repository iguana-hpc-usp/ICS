import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HostService} from "../_services/host.service";
import {AuthStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userSession = {} as AuthStr;

  constructor(
      private router: Router,
      private host: HostService,
      private _eventEmitter: EventEmitterService,
  ) {
  }

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    //Getting value from child HostCredentials
    this._eventEmitter.loginChange.subscribe(
        data => {
          this.userSession = this.host.getSessionID();
        },
    );

  }

  setRoute(val) {
    this.router.navigate(['add-user']);
  }

}