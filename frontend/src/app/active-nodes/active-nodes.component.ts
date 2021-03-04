import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NodeStr} from "../_model/node";
import {HostService} from "../_services/host.service";
import {AuthStr, ParamStr, RequestStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {HostInfoStr} from "../_model/hostInfo";


@Component({
    selector: 'app-active-nodes',
    templateUrl: './active-nodes.component.html',
    styleUrls: ['./active-nodes.component.css']
})
export class ActiveNodesComponent implements OnInit {

    haveUpdate: string = "";
    hostInfo = {} as HostInfoStr;
    nodes: NodeStr[] = [];

    vcpus = 0;
    mem = 0;

    constructor(
        private host: HostService,
        private _eventEmitter: EventEmitterService,
    ) {}

    ngOnInit() {
        this.getActiveNodes();

        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(
            data => {
                this.hostInfo = data;

                let hu = this.haveUpdate;
                hu = this.hostInfo.Updates["activeNodes"];

                if (hu != this.haveUpdate) {
                    this.getActiveNodes();
                    //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
                }
            },
        );

    }

    getActiveNodes() {
        let params: ParamStr[] = [];

        let request: RequestStr = {
            Request: "activeNodes",
            Param: params,
        };

        let vcpus = 0;
        let mem = 0;

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.nodes = data;

                //console.log('OperationMode: active-nodes: ', this.nodes);

                let n = 0;
                if (data) {
                    this.nodes.forEach(function(v, k) {
                        if (v['NumberOfCPUs'])
                            vcpus += parseInt(v['NumberOfCPUs']);

                        if (v['Memory'])
                            mem += parseInt(v['Memory']);

                        if (v.Container != null)
                            n += Object.keys(v.Container).length;
                        n++;
                    });
                    this.haveUpdate = n.toString();
                } else {
                    this.haveUpdate = "0";
                }
                this.mem = mem;
                this.vcpus = vcpus;
            });
    }

}
