import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "./_services/dialog/dialog.component";
import {HostService} from "./_services/host.service";
import {EventEmitterService} from "./_services/event-emitter.service";
import {HostInfoStr} from "./_model/hostInfo";
import {ClusterStr} from "./_model/cluster";
import {ParamStr, RequestStr, ResponseStr} from "./_model/service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @ts-ignore
  @ViewChild('drawer') sidenav: MatSidenav;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';

  hostConnection: ResponseStr;
  clusterConnection: ResponseStr;

  tmp_hostConnection: ResponseStr;
  tmp_clusterConnection: ResponseStr;
  tmp_OkConnection: ResponseStr;

  hostInfo = {} as HostInfoStr;
  cluster = {} as ClusterStr;

  newOpMode: string;
  hostName: string;

  load = 0;

  version: string;

  constructor(
      private router: Router,
      private host: HostService,
      public dialog: MatDialog,
      private _eventEmitter: EventEmitterService,
  ){}

  ngOnInit() {

    this.hostInfo.Cluster = this.cluster;

    this.tmp_hostConnection = {
      Name: "info",
      Status: "waiting data from host...",
    };
    this.tmp_clusterConnection = {
      Name: "info",
      Status: "waiting for some cluster on the network...",
    };

    this.tmp_OkConnection = {
      Name: "ok",
      Status: "connected",
    };

    this.hostConnection = this.tmp_hostConnection;
    this.clusterConnection = this.tmp_clusterConnection;

    this.managerStatus();

    this.getVersion();

    //Getting value from child HostCredentials
    this._eventEmitter.loginChange.subscribe(
        data => {
          //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
          this.getHostInfo();

          if (data['Name'] == "stopSession")
            this.sidenav.close();
          //if (data['Name'] == "startSession")
          //  this.sidenav.toggle();
        },
    );

    //Getting value from child OperationModeComponent
    this._eventEmitter.newOpMode.subscribe(
        data => {
          this.sidenav.close();
          this.newOpMode = data;
          this.clusterConnection = this.tmp_clusterConnection;
          this.hostConnection = this.tmp_hostConnection;

          this.host.killSessionID();
        },
    );

  }

  getVersion() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "version",
      Param: params,
    };

    let queue;
    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.version = data;
        });
  }

  checkToken() {
    // Let's check if token is already valid
    // This value come from HttpErrorInterceptor
    let auth = this.host.getSessionID();
    if (auth.Token == "error") {
      console.log("erro the token");

      this.openModal('Token Error',
          'This token is no more valid! Please, login again...',
          'Close', '');
      this.host.killSessionID();
      this._eventEmitter.setLoginChange({Name: "error", Status: "logout"});
    }

  }

  first = 0;

  getHostInfo() {
    let params: ParamStr[] = [];
    let request: RequestStr = {
      Request: "hostInfo",
      Param: params,
    };

    this.checkToken();

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {

          //console.log('App Root | hostInfo, this.newOpMode: ', data, this.newOpMode);
          this.hostInfo = data;

          if (data == '-' ||
              data['OpMode'] == '' ||
              (this.newOpMode && this.hostInfo.OpMode != this.newOpMode)) {
            // If no connection, show error message
            this.hostConnection = this.tmp_hostConnection;
            this.host.killSessionID();
            this.first = 0;
            this.sidenav.close();

          } else {
            //console.log(this.hostInfo);

            this.hostConnection = this.tmp_OkConnection;
            //Send HostInfo to all children
            this._eventEmitter.setHostInfo(this.hostInfo);

            //Get Credential
            if (this.host.getSessionID().Module == "Admin")
              this.hostInfo['IsMaster'] = true;

            if (this.hostInfo.Cluster.MasterIP != "") {
              this.clusterConnection = this.tmp_OkConnection;

              if (this.first == 0 && this.hostInfo.OpMode == 'NODE') {
                let ret = this.openModal('Master Frontend',
                    'Do you want to be redirected to the master frontend?',
                    'Yes', 'No');

                ret.afterClosed().subscribe(data => {
                  if (data['button'] == 'YES') {
                    window.open("http://"+this.hostInfo.Cluster.MasterIP+":"
                        +this.hostInfo.Cluster.PortFrontend, "_blank");
                  }
                });

                this.first = 1;
              }
            } else {
              this.clusterConnection = this.tmp_clusterConnection;
            }
          }

        });
  }

  // Let's check host connection after 10 seconds and forever....
  async managerStatus() {
    let n = 0;

    while (true)
    {
      this.getHostInfo();

      await this.delay(10000);

      if (this.hostConnection["Name"] == "info" && n == 10) {
        this.openModal('Connection Failed',
            'There is no connection with the server!',
            'Close', '');
      }

      if (this.hostConnection["Name"] == "ok" && n > 0) {
        this.dialog.closeAll();
        n = 0;
      }

      if (this.hostConnection["Name"] == "info")
        n++;

    }
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
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
