import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {HostService} from "../_services/host.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {HostInfoStr} from "../_model/hostInfo";
import {ClusterStr} from "../_model/cluster";
import {dialogStr} from "../_model/dialog";
import {EventEmitterService} from "../_services/event-emitter.service";
import {AuthStr, ParamStr, RequestStr, ResponseStr, ServiceOpModeStr} from "../_model/service";

@Component({
  selector: 'app-cluster-available',
  templateUrl: './cluster-available.component.html',
  styleUrls: ['./cluster-available.component.css']
})
export class ClusterAvailableComponent implements OnInit {

  clusters: ClusterStr[] = [];
  response: ResponseStr[] = [];
  hostInfo = {} as HostInfoStr;

  haveUpdate: string = "";

  userSession = {} as AuthStr;

  constructor(
    private host: HostService,
    public dialog: MatDialog,
    private _eventEmitter: EventEmitterService,
  ){}

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    this.clusterInfo();

    this.hostInfo.Cluster = {} as ClusterStr;

    //Getting value from App Component
    this._eventEmitter.hostInfo.subscribe(
      data => {
        this.hostInfo = data;

        let hu = this.haveUpdate;
        hu = this.hostInfo.Updates["clusterAvailable"];

        if (hu != this.haveUpdate) {
          this.clusterInfo();
          //console.log('OperationMode: cluster-available: ', hu, this.haveUpdate);
        }
      },
    );

  }

  connectToCluster(val: ClusterStr) {
    //console.log('OperationMode: connectToCluster: ', val);

    let input: dialogStr[] = [];
    if (val.Password) {
      input.push({Model: "", Name: "password", Type: "password", Title: "Password"});
    }

    let ret = this.openModal('Connect to ' + val.Name,
      'Are you sure you want to connect to this cluster?',
      'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {
      if (data['button'] == 'YES') {
        if (val.Password &&
          (!data['input'][0]['Model'] ||
            data['input'][0]['Model'] == "")) {
          this.response['Name'] = "error";
          this.response['Status'] = "Please, type the cluster password...";
          return;
        }

        if (val.Password)
          val.Check = data['input'][0]['Model'];

        this.response['Name'] = "info";
        this.response['Status'] = "Request sent, wait ...";

        let serviceOpMode: ServiceOpModeStr = {
          NewOpMode: "NODE",
          Cluster: val,
        };
        //console.log('OperationMode: ServiceOpModeStr: ', serviceOpMode);

        this.host.request(serviceOpMode, 'setOpMode')
          .subscribe(data => {
            this.response = data;

            if (this.response['Name'] == "ok") {
              // Inform the App Root about new change in OpMode
              this._eventEmitter.setNewOpMode("NODE");
            }
          });
      }
    });

  }

  clusterInfo() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "clusterAvailable",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
      .subscribe(data => {
        this.clusters = data;
        if (data)
          this.haveUpdate = this.clusters.length.toString();
        else
          this.haveUpdate = "0";

        //console.log('Cluster-Available: clusterInfo ', this.clusters, this.host.getSessionID());
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

