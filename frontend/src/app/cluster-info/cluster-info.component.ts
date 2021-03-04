import {Component, Input, OnInit} from '@angular/core';
import {AuthStr, ResponseStr, ServiceOpModeStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {ClusterStr} from "../_model/cluster";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {HostInfoStr} from "../_model/hostInfo";

@Component({
  selector: 'app-cluster-info',
  templateUrl: './cluster-info.component.html',
  styleUrls: ['./cluster-info.component.css']
})
export class ClusterInfoComponent implements OnInit {
  //Getting hostInfo from APP ROOT
  @Input('hostInfo') hostInfo: HostInfoStr;
  @Input('hostConnection') hostConnection: ResponseStr;
  @Input('clusterConnection') clusterConnection: ResponseStr;

  userSession = {} as AuthStr;
  response = {} as ResponseStr;

  constructor(
    private host: HostService,
    public dialog: MatDialog,
    private _eventEmitter: EventEmitterService
  ) {}

  ngOnInit() {

    //Getting value from child HostCredentials
    this._eventEmitter.loginChange.subscribe(
      data => {
        //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
        this.userSession = this.host.getSessionID();
      },
    );

    this.userSession = this.host.getSessionID();
  }


  setOpMode() {

    let ret = this.openModal('Exit Cluster',
      'Do you confirm leaving the cluster??',
      'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let cluster = {} as ClusterStr;

        let serviceOpMode: ServiceOpModeStr = {
          NewOpMode: "LOCAL",
          Cluster: cluster,
        };
        //console.log('OperationMode: serviceOpMode ', serviceOpMode)

        this.response['Name'] = "info";
        this.response['Status'] = "Request sent, wait ...";

        this.host.request(serviceOpMode, 'setOpMode')
          .subscribe(data => {
            this.response = data;
            if (this.response['Name'] == "ok") {
              // Inform the App Root about new change in OpMode
              this.host.killSessionID();
              this._eventEmitter.setNewOpMode("LOCAL");
            }
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

