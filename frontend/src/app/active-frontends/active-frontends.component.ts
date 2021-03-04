import {Component, Input, OnInit} from '@angular/core';
import {HostInfoStr} from "../_model/hostInfo";
import {HostService} from "../_services/host.service";
import {AuthStr, ParamStr, RequestStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";

@Component({
  selector: 'app-active-frontends',
  templateUrl: './active-frontends.component.html',
  styleUrls: ['./active-frontends.component.css']
})
export class ActiveFrontendsComponent implements OnInit {

  hosts: HostInfoStr[] = [];
  hostInfo = {} as HostInfoStr;

  haveUpdate: string = "";

  constructor(
    private host: HostService,
    private _eventEmitter: EventEmitterService,
  ) { }

  ngOnInit() {
    this.getFrontendInfo();

    //Getting value from App Component
    this._eventEmitter.hostInfo.subscribe(
      data => {
        this.hostInfo = data;

        if (this.hostInfo.Updates["activeFrontends"]) {
            let hu = this.haveUpdate;
            hu = this.hostInfo.Updates["activeFrontends"];

            if (hu != this.haveUpdate) {
                this.getFrontendInfo();
                //console.log('OperationMode: active-frontends: ', hu, this.haveUpdate);
            }
            //console.log('OperationMode: active-frontends: ', hu, this.haveUpdate);
        }
      },
    );
  }

  getFrontendInfo() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "activeFrontends",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
      .subscribe(data => {
        this.hosts = data;
        if (data)
          this.haveUpdate = this.hosts.length.toString();
        else
          this.haveUpdate = "0";
      });
  }

}
