import {Component, OnInit} from '@angular/core';
import {HostService} from "../_services/host.service";
import {ParamStr, RequestStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {HostInfoStr} from "../_model/hostInfo";
import {QueueStr} from "../_model/code";


@Component({
    selector: 'app-active-queues',
    templateUrl: './active-queues.component.html',
    styleUrls: ['./active-queues.component.css']
})
export class ActiveQueuesComponent implements OnInit {

    haveUpdate: string = "";
    hostInfo = {} as HostInfoStr;
    queues: QueueStr[] = [];

    wait = false;

    constructor(
        private host: HostService,
        private _eventEmitter: EventEmitterService,
    ) {}

    ngOnInit() {
        this.update();

        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(
            data => {
                this.hostInfo = data;

                if (this.hostInfo.Updates["activeQueues"] || this.queues) {
                    this.wait = true;
                } else {
                    this.wait = false;
                }
            },
        );

    }

    async update() {
        while (true) {
            if (this.wait)
                this.getActiveQueues();
            await this.delay(2000);
        }
    }

    getActiveQueues() {
        let params: ParamStr[] = [];

        let request: RequestStr = {
            Request: "activeQueues",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.queues = data;
                //console.log('Queues: hu haveUpdate: ', data, this.haveUpdate);
            });
    }

    private delay(ms: number): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

}
