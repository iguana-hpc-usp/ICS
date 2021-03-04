import {Component, Inject, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {HostService} from "../_services/host.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {ClusterStr} from "../_model/cluster";
import {dialogStr} from "../_model/dialog";
import {EventEmitterService} from "../_services/event-emitter.service";
import {ResponseStr, ServiceOpModeStr} from "../_model/service";
import {HostInfoStr} from "../_model/hostInfo";

@Component({
  selector: 'app-operation-mode',
  templateUrl: './operation-mode.component.html',
  styleUrls: ['./operation-mode.component.css']
})

export class OperationModeComponent implements OnInit {
  //Getting hostInfo from APP ROOT
  @Input('hostInfo') hostInfo: HostInfoStr;

  clusters: ClusterStr[] = [];
  response = {} as ResponseStr;

  constructor(
    private host: HostService,
    public dialog: MatDialog,
    private _eventEmitter: EventEmitterService
  ){}

  ngOnInit() {}

  setOpMode(mode: string) {

    if (mode == this.hostInfo.OpMode)
      return;

    let input: dialogStr[] = [];

    if (mode == 'MASTER') {
      input.push({Model: "", Name: "clusterName", Type: "text",  Title: "Cluster Name"});
      input.push({Model: "", Name: "password", Type: "password", Title: "Password *(Optional)"});
    }

    let ret = this.openModal('Change Mode',
      'Did you change the host operation mode to ' + mode + ', confirm the request?',
      'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {

      if (data && data['button'] == 'YES') {
        if (mode == 'MASTER' &&
          (!data['input'][0]['Model'] ||
            data['input'][0]['Model'] == "")) {
          this.response['Name'] = "error";
          this.response['Status'] = "Please, type a cluster name...";
          return;
        }

        let cluster = {} as ClusterStr;
        cluster.Owner = this.host.getSessionID().Owner;

        if (data['input'][0] && data['input'][0]['Model'] != "")
          cluster.Name = data['input'][0]['Model'];

        if (data['input'][1] && data['input'][1]['Model'] != "")
          cluster.Password = data['input'][1]['Model'];

        let serviceOpMode: ServiceOpModeStr = {
          NewOpMode: mode,
          Cluster: cluster,
        };

        this.response['Name'] = "info";
        this.response['Status'] = "Request sent, wait ...";

        this.host.request(serviceOpMode, 'setOpMode')
          .subscribe(data => {
            this.response = data;
            if (this.response['Name'] == "ok") {
              // Inform the App Root about new change in OpMode
              this.host.killSessionID();
              this._eventEmitter.setNewOpMode(mode);
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
