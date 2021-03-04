import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../_services/host.service";
import {NodeStr} from "../_model/node";
import {AuthStr, ParamStr, RequestStr, ResponseStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {HostInfoStr} from "../_model/hostInfo";

@Component({
  selector: 'app-current-nodes',
  templateUrl: './current-nodes.component.html',
  styleUrls: ['./current-nodes.component.css']
})
export class CurrentNodesComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  nodes: NodeStr[] = [];
  response = {} as ResponseStr;
  currentNumberOfNodes: number;
  userSession: AuthStr;

  haveUpdate: string = "";
  hostInfo = {} as HostInfoStr;

  vcpus = 0;

  constructor(
      private host: HostService,
      private formBuilder: FormBuilder,
      private _eventEmitter: EventEmitterService,
      public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    this.getCurrentNodes();

    //Getting value from App Component
    this._eventEmitter.hostInfo.subscribe(
        data => {
          this.hostInfo = data;

          let hu = this.haveUpdate;
          hu = this.hostInfo.Updates["activeNodes"];

          if (hu != this.haveUpdate) {
            this.getCurrentNodes();
            //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
          }
          //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
        },
    );

    this.registerForm = this.formBuilder.group({
      srvNumber: ['',
        [Validators.required,
          Validators.min(0),
        ]
      ],
    }, {});

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let num = this.registerForm.get('srvNumber').value;

    if (num > this.vcpus) {
      let ret = this.openModal('Change the Number of Nodes',
          'Attention, you are allocating more nodes than ' +
          'the total number of CPUs in the cluster. \n  ' +
          'Performance degradation may occur, confirm the request?',
          'Yes', 'No', '');

      ret.afterClosed().subscribe(data => {
        if (data && data['button'] == 'YES') {
          this.setNodes(num);
          this.registerForm.disable();
        }
      });
    } else {
      this.setNodes(num);
      this.registerForm.disable();
    }

  }

  setNodes(num) {
    let params: ParamStr[] = [];
    params.push({Name: "", Value: num.toString()});

    let request: RequestStr = {
      Request: "swarmAdd",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.response = data;
          //console.log("CurrentNodes | simpleRequest: ", request);

          if (this.response['Name'] == "error") {
            this.registerForm.enable();
            this.f['srvNumber'].setErrors({'generic': this.response['Status']});
            return;
          }

          this.managerStatus('getCurrentNodes', this.registerForm.get('srvNumber').value);
        });
  }


  getCurrentNodes() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "activeNodes",
      Param: params,
    };
    //console.log("CurrentNodes | request: ", request);

    let vcpus = 0;

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.nodes = data;
          let n = 0;
          if (this.nodes) {
            this.nodes.forEach(function(v, k) {

              if (v['NumberOfCPUs'])
                vcpus += parseInt(v['NumberOfCPUs']);

              //console.log("CurrentNodes | data: ", v.Container);

              v.Container.forEach(function(v1, k1) {
                if (v1.Name != "master")
                  n += 1;
              });
            });
            this.haveUpdate = n.toString();
          } else {
            this.haveUpdate = "0";
          }

          this.f['srvNumber'].setValue(n);
          this.currentNumberOfNodes = n;
          this.vcpus = vcpus;
        });
  }

  async managerStatus(funcName: string, desireRet: number) {
    let wait_ret = true;
    let n = "";
    while (wait_ret)
    {
      await this.delay(5000);
      if (funcName != '') {
        n = this[funcName]();
      }

      if (this.currentNumberOfNodes == desireRet) {
        this.response['Name'] = 'ok';
        this.response['Status'] = 'Request completed successfully.';
        this.registerForm.enable();
        wait_ret = false;
      }
    }
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
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
