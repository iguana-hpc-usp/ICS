(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/dialog/dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_services/dialog/dialog.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{modalTitle}}</h2>\n<mat-dialog-content>{{modalText}}</mat-dialog-content>\n\n<mat-dialog-content *ngIf=\"modalInput\">\n  <span *ngFor=\"let m of modalInput\">\n    <input type=\"{{m.Type}}\" [(ngModel)]=\"m.Model\" placeholder=\"{{m.Title}}\">\n  </span>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\" (click)=\"close('YES')\">{{modalYes}}</button>\n  <button mat-button mat-dialog-close>{{modalNo}}</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/mat-progress-bar/mat-progress-bar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_services/mat-progress-bar/mat-progress-bar.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar\n        [mode]=\"'indeterminate'\">\n</mat-progress-bar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-frontends/active-frontends.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-frontends/active-frontends.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped\">\n  <tr *ngFor=\"let h of hosts\">\n    <td>\n      <ul>\n        <li [className]=\"h.Owner===hostInfo['Owner'] ? 'master':''\">{{h.Owner}}\n          <p class=\"frontName\">Last Activity: {{h.LastActivity | slice:0:16}}</p>\n        </li>\n      </ul>\n    </td>\n  </tr>\n</table>\n<div *ngIf=\"!(hosts)?.length\"><span class=\"frontName\">*No users logged into the system.</span></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-nodes/active-nodes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-nodes/active-nodes.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngFor=\"let n of nodes\" class=\"nodes\">\n    <div class=\"form-row text-center\">\n        <b>{{n.Hostname}} </b>\n        <br />\n        <span class=\"resources\">&nbsp;(Mem: {{n.Memory}}MB | vCPU: {{n.NumberOfCPUs}})</span>\n    </div>\n    <div class=\"form-row text-center\">\n\n        <div class=\"form-group text-right col-md-1\" *ngFor=\"let c of n.Container\">\n\n            <ng-template #popContent>\n                IP: <b>{{c.IP}}</b>\n                <br />\n                vCPU: <b>{{c.Name==='master'? 'Available':'1'}}</b>\n                <br />\n                Status: <b><span [className]=\"c.State==='running' ? 'ok':'error'\">{{c.State}}</span></b>\n            </ng-template>\n\n            <mat-icon class=\"icon\"\n                 [ngbPopover]=\"popContent\"\n                 container=\"body\"\n                 triggers=\"mouseenter:mouseleave\"\n                 popoverTitle=\"{{c.Name==='master'? 'Physical Node':'Virtual Node'}} {{c.Id}}\">\n                {{c.Name==='master'? 'memory':'flip_to_front'}}\n            </mat-icon>\n        </div>\n    </div>\n</div>\n<div class=\"card-header resources\">\n    Total cluster: vCPUs: {{vcpus}} | Mem: {{mem}}MB\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-queues/active-queues.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-queues/active-queues.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped normal\">\n  <tr>\n    <td><b>Position | UID | Concurrency | Command | Time</b>\n      <ul>\n        <ng-container *ngFor=\"let q of queues; let i = index\">\n          <li class=\"process\">\n            <span>{{q.Position}} | {{q.User}} | {{q.Concurrency === 'true' ? 'yes' : 'no' }} | {{q.Sequence}} | {{q.Count}}s</span>\n          </li>\n        </ng-container>\n      </ul>\n    </td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"tr\"\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\">\n    <mat-toolbar>\n      <div class=\"iguana\">\n        <h6><b>Iguana Cluster System</b>\n          <br /><span class=\"version\">{{version}}</span>\n        </h6>\n      </div>\n\n      <img class=\"icon\" src=\"../../assets/iguana.png\" />\n    </mat-toolbar>\n    <mat-nav-list>\n\n      <mat-accordion>\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok'\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              My Panel\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div>\n            <app-module></app-module>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok'\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok' && hostInfo['IsMaster']\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Operation Mode\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"card mb-4\">\n            <app-operation-mode\n                    [hostInfo]=\"hostInfo\"\n            ></app-operation-mode>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok' && hostInfo['IsMaster']\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostInfo['IsMaster']\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Clusters Available\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"card mb-4\" *ngIf=\"hostConnection['Name']==='ok'\">\n            <app-cluster-available></app-cluster-available>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostInfo['IsMaster']\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok'\n        && hostInfo.OpMode!=='NODE'\n        && hostInfo['IsMaster']\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Virtual Nodes\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"card mb-4\" >\n            <app-current-nodes></app-current-nodes>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok'\n        && hostInfo.OpMode!=='NODE'\n        && hostInfo['IsMaster']\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok'\n                                     && hostInfo.OpMode!=='NODE'\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Active Nodes\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"card mb-4\">\n            <app-active-nodes></app-active-nodes>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok' && hostInfo.OpMode!=='NODE'\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok'\n                             && hostInfo.OpMode!=='NODE'\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Queue Monitoring\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"card mb-4\" *ngIf=\"hostConnection['Name']==='ok'\">\n            <app-active-queues></app-active-queues>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok' && hostInfo.OpMode!=='NODE'\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok'\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Users Online\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"card mb-4\">\n            <app-active-frontends></app-active-frontends>\n          </div>\n        </mat-expansion-panel>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok'\"></mat-divider>\n\n      </mat-accordion>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"accent\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n\n      <app-host-status\n              [hostInfo]=\"hostInfo\"\n              [hostConnection]=\"hostConnection\">\n      </app-host-status>\n\n      <span class=\"spacer\"></span>\n\n      <app-cluster-info *ngIf=\"(hostInfo.OpMode==='NODE' ||\n                                hostInfo.OpMode==='MASTER') &&\n                                hostConnection['Name']==='ok'\"\n                        [hostInfo]=\"hostInfo\"\n                        [hostConnection]=\"hostConnection\"\n                        [clusterConnection]=\"clusterConnection\">\n      </app-cluster-info>\n      <span class=\"spacer\"></span>\n\n      <div class=\"noIP\" *ngIf=\"hostInfo.IP===''\">\n        Attention, the system was unable to identify the host IP.\n        Go to My Panel -> Settings and define the Public Host Interface.\n      </div>\n\n      <span class=\"spacer\"></span>\n\n      <div class=\"hostInfo\">\n\n        <app-host-credentials *ngIf=\"hostConnection['Name']==='ok'\"\n                              [hostInfo]=\"hostInfo\">\n        </app-host-credentials>\n\n      </div>\n\n    </mat-toolbar>\n    <ng-content></ng-content>\n\n\n    <!--Main layout-->\n    <main>\n      <div class=\"container-fluid mt-5\">\n        <div class=\"row wow fadeIn\">\n\n          <div class=\"col-md-12 mb-4\" *ngIf=\"hostConnection['Name']==='ok'\">\n            <router-outlet></router-outlet>\n          </div>\n          <div class=\"col-md-12 mb-4 down\" *ngIf=\"hostConnection['Name']!=='ok'\">\n            Trying to connect to the server...\n            <app-mat-progress-bar></app-mat-progress-bar>\n          </div>\n\n        </div>\n      </div>\n\n    </main>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small teal pt-4\">\n  <div class=\"footer-copyright text-center py-3\">© 2020 Copyright\n    <a href=\"http://lasdpc.icmc.usp.br/\"> LaSDPC USP-ICMC</a>\n  </div>\n</footer>\n<!-- Footer -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-available/cluster-available.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-available/cluster-available.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div *ngIf=\"response.Name\" class=\"{{response.Name}} response text-center\">\n    {{response.Status}}\n    <app-mat-progress-bar *ngIf=\"response.Name==='info'\"></app-mat-progress-bar>\n  </div>\n  <table class=\"table table-striped\">\n    <tr *ngFor=\"let c of clusters\">\n      <td>\n        <ul>\n          <li [className]=\"c.Name==='master' ? 'master':''\">\n              {{c.Name}} - {{c.MasterIP}}\n            <p>\n              <span class=\"connected\">Last Check: {{c.LastActivity | slice:0:16}}</span>\n              <span *ngIf=\"hostInfo.Cluster.Id===c.Id\" class=\"connected\"> | (connected)</span>\n              <img *ngIf=\"c.Password\" class=\"key\" src=\"../../assets/key.png\" />\n\n            <a *ngIf=\"hostInfo.Cluster.Id!==c.Id && hostInfo['IsMaster']\"\n               href=\"#\" (click)=\"connectToCluster(c);false;\" class=\"connected\">- Connect Now</a>\n            </p>\n          </li>\n        </ul>\n      </td>\n    </tr>\n  </table>\n  <div *ngIf=\"!(clusters)?.length\"><span class=\"connected\">*No master detected on the network</span></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-info/cluster-info.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-info/cluster-info.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-template #popContent>\n    <span class=\"{{clusterConnection.Name}}\">\n            Connection Status: <b>{{clusterConnection.Status}}</b></span>\n    <br /><div *ngIf=\"clusterConnection['Name']==='wait'\" class=\"response\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n</ng-template>\n\n<div>\n    <div class=\"main\">\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']==='ok' && hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onLocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']==='ok' && !hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onUnlocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']!=='ok' && hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onLocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']!=='ok' && !hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onUnlocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode==='NODE' && clusterConnection['Name']==='info'\" class=\"icon\"\n             src=\"../../assets/nodeWait.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode==='NODE' && clusterConnection['Name']==='ok'\" class=\"icon\"\n             src=\"../../assets/nodeOk.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n    </div>\n\n    <div class=\"mainSide\">\n        <div *ngIf=\"hostInfo.Cluster.Name\">\n            <a target=\"_blank\" class=\"text-link\"\n               href=\"http://{{this.hostInfo.Cluster.MasterIP}}:{{this.hostInfo.Cluster.PortFrontend}}\">Cluter login page\n            </a>\n        </div>\n        <div class=\"text-link\"\n              *ngIf=\"hostInfo.Cluster.Name\">Queue Status: <b>{{hostInfo.Cluster.Queue}}</b>\n        </div>\n    </div>\n    <div class=\"mainSide\">\n        <div *ngIf=\"userSession.Module==='Admin' &&\n                  hostInfo.OpMode==='NODE' &&\n                  hostInfo.Cluster.MasterIP !=''\" class=\"exit\">\n            <button class=\"btn-sm btn-danger mr-1\" (click)=\"setOpMode();false;\">Exit Cluster</button>\n        </div>\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<md-button class=\"md-fab md-fab-bottom-right\" aria-label=\"Add a category\">\n    <button type=\"button\" name=\"btnCompile\" (click)=\"onSubmitCode(); false;\" [disabled]=\"disabled\" class=\"btn btn-primary\">{{btnCompile}}</button>\n    <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle></button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n            <button (click)=\"onClick('Compile'); false;\" ngbDropdownItem>Compile</button>\n            <button (click)=\"onClick('Compile and Run'); false;\" ngbDropdownItem>Compile and Run</button>\n        </div>\n    </div>\n</md-button>\n\n<div class=\"codeButtons\">\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic1\" ngbDropdownToggle>Theme</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button (click)=\"setTheme('vs-dark'); false;\" ngbDropdownItem>Dark</button>\n            <button (click)=\"setTheme('vs'); false;\" ngbDropdownItem>Light</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic2\" ngbDropdownToggle>Font Size</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n            <button (click)=\"setFont('8'); false;\" ngbDropdownItem>8</button>\n            <button (click)=\"setFont('10'); false;\" ngbDropdownItem>10</button>\n            <button (click)=\"setFont('12'); false;\" ngbDropdownItem>12</button>\n            <button (click)=\"setFont('14'); false;\" ngbDropdownItem>14</button>\n            <button (click)=\"setFont('16'); false;\" ngbDropdownItem>16</button>\n            <button (click)=\"setFont('18'); false;\" ngbDropdownItem>18</button>\n            <button (click)=\"setFont('20'); false;\" ngbDropdownItem>20</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic3\" ngbDropdownToggle>MiniMap</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n            <button (click)=\"setMiniMap('true'); false;\" ngbDropdownItem>Show</button>\n            <button (click)=\"setMiniMap('false'); false;\" ngbDropdownItem>Hide</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic4\" ngbDropdownToggle>Load Example Code</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic4\">\n            <button (click)=\"getCodeExample('MPI'); false;\" ngbDropdownItem>MPI</button>\n            <button (click)=\"getCodeExample('OpenMP'); false;\" ngbDropdownItem>OpenMP</button>\n            <button (click)=\"getCodeExample('CUDA'); false;\" ngbDropdownItem>CUDA</button>\n            <button (click)=\"getCodeExample('OpenMP_MPI'); false;\" ngbDropdownItem>Hybrid OpenMP/MPI</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic5\" ngbDropdownToggle>Code Saving</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic5\">\n            <button (click)=\"codeTempCall('auto'); false;\" ngbDropdownItem>Auto (default)</button>\n            <button (click)=\"codeTempCall('none'); false;\" ngbDropdownItem>None</button>\n            <button (click)=\"codeTempCall('load'); false;\" ngbDropdownItem>Load last saved code</button>\n        </div>\n    </div>\n</div>\n<ngx-monaco-editor class=\"editor\"\n                   [options]=\"editorOptions\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"code.Code\"\n                   (ngModelChange)=\"onChange($event)\"\n                   (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>\n\n<div class=\"card m-12 codeRun\">\n    <form [formGroup]=\"codeForm\" enctype=\"multipart/form-data\">\n        <div class=\"form-row codeRun\">\n\n            <div class=\"form-group text-right col-md-12\">\n                <div *ngIf=\"hostInfo.Queue == 'Off'\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary\"\n                            (click)=\"onQueue()\"\n                            ngbPopover=\"If turn on, you will wait for your turn in the queue, so your code will run without concurrency.\"\n                            triggers=\"mouseenter:mouseleave\" popoverTitle=\"Queuing System\">\n                        Queue {{queue?\"On\":\"Off\"}}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n       <div #ResultsTab></div>\n\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"navActive\"  class=\"nav-tabs\" [destroyOnHide]=\"false\">\n            <li ngbDropdown [ngbNavItem]=\"1\">\n\n                <a ngbNavLink ngbDropdownToggle>Parameters</a>\n                <div ngbDropdownMenu>\n                    <button (click)=\"setManualParameters('MPI'); false;\" ngbDropdownItem>MPI</button>\n                    <button (click)=\"setManualParameters('OpenMP'); false;\" ngbDropdownItem>OpenMP</button>\n                    <button (click)=\"setManualParameters('CUDA'); false;\" ngbDropdownItem>CUDA</button>\n                    <div class=\"dropdown-divider\"></div>\n                    <button (click)=\"setManualParameters('OpenMP_MPI'); false;\" ngbDropdownItem>Hybrid OpenMP/MPI</button>\n                    <div class=\"dropdown-divider\"></div>\n                    <button (click)=\"setManualParameters('Manual'); false;\" ngbDropdownItem>Manual</button>\n                </div>\n                <ng-template ngbNavContent>\n\n                    <div class=\"form-row codeRun\">\n                        <div class=\"col-md-6\">\n                            Command (compile)\n                        </div>\n                        <div class=\"col-md-9\">\n                            <input type=\"text\" formControlName=\"CompCmd\" (keyup)=\"updateParameters()\"\n                                   class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fc.CompCmd.errors }\" />\n                            <div *ngIf=\"submitted && fc.CompCmd.errors\" class=\"error response\">\n                                <div *ngIf=\"fc.CompCmd.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row codeRun\">\n                        <div class=\"col-md-6\">\n                            <a href=\"#\"  ngbPopover=\"The binary and code file name must always be main.\"\n                               triggers=\"mouseenter:mouseleave\" popoverTitle=\"Attention\">\n                                Arguments (compile)\n                            </a>\n                        </div>\n                        <div class=\"col-md-9\">\n                            <input type=\"text\" formControlName=\"CompArgs\" (keyup)=\"updateParameters()\"\n                                   class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fc.CompArgs.errors }\" />\n                            <div *ngIf=\"submitted && fc.CompArgs.errors\" class=\"error response\">\n                                <div *ngIf=\"fc.CompArgs.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row codeRun\">\n                        <div class=\"col-md-6\">\n                            Command (execute)\n                        </div>\n                        <div class=\"col-md-9\">\n                            <input type=\"text\" formControlName=\"ExecCmd\" (keyup)=\"updateParameters()\"\n                                   class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fc.ExecCmd.errors }\" />\n                            <div *ngIf=\"submitted && fc.ExecCmd.errors\" class=\"error response\">\n                                <div *ngIf=\"fc.ExecCmd.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row codeRun\">\n                        <div class=\"col-md-6\">\n                            <a href=\"#\"  ngbPopover=\"The binary and code file name must always be main.\"\n                               triggers=\"mouseenter:mouseleave\" popoverTitle=\"Attention\">\n                                Arguments (execute)\n                            </a>\n                        </div>\n                        <div class=\"col-md-9\">\n                            <input type=\"text\" formControlName=\"ExecArgs\" (keyup)=\"updateParameters()\"\n                                   class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fc.ExecArgs.errors }\" />\n                            <div *ngIf=\"submitted && fc.ExecArgs.errors\" class=\"error response\">\n                                <div *ngIf=\"fc.ExecArgs.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-row codeRun\">\n                        <div class=\"col-md-6\">\n                            <a href=\"#\"  ngbPopover=\"You can add extra arguments for the execution.\"\n                               triggers=\"mouseenter:mouseleave\" popoverTitle=\"Attention\">\n                                Extra Arguments (execute)\n                            </a>\n                        </div>\n                        <div class=\"col-md-9\">\n                            <input type=\"text\" formControlName=\"ExtraArgs\" (keyup)=\"updateParameters()\"\n                                   class=\"form-control\" />\n                        </div>\n                    </div>\n                </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"2\">\n                <a ngbNavLink>Files</a>\n                <ng-template ngbNavContent>\n                    <div *ngIf=\"!exercise.MaxFileSize && exerciseFiles?.length===0\" class=\"card form-group col-md-6\">\n                        No parameters were defined for the use of files in this exercise.\n                    </div>\n\n                    <div class=\"form-row codeRun\">\n\n                        <div *ngIf=\"exercise.MaxFileSize || tryACode==='1'\" class=\"col-md-4 card\">\n                            <a href=\"#\"  ngbPopover=\"You can upload a file and use it in your code.\n                            To call the file, use the example shown in the box.\"\n                               triggers=\"mouseenter:mouseleave\" popoverTitle=\"Upload a file\">\n                                Add a file for this run <br />\n                            </a>\n                            <span class=\"response\">(MaxFileSize: {{formatBytes(exercise.MaxFileSize)}})</span>\n                            <form enctype=\"multipart/form-data\">\n                                <input class=\"btn-default\" type='file' [(ngModel)]=\"file\"\n                                       data-max-size=\"10\"\n                                       name=\"media\" #selectfile >\n                                <button type=\"button\" (click)=\"uploadFile(file)\">Upload</button>\n                                <br />\n                                <progress [value]=progress.loaded  [max]=progress.total></progress>\n                                <div class=\"card-body\">\n                                    <div *ngIf=\"responseFile.Name\" class=\"{{responseFile.Name}}\">\n                                        {{responseFile.Status}}\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n\n                        <div *ngIf=\"exerciseFiles?.length > 0\" class=\"col-md-4 card\">\n                            <mat-label>\n                                <a href=\"#\" popoverTitle=\"This exercise has input files.\n                                You can call them using the example shown in the box.\"\n                                   triggers=\"mouseenter:mouseleave\" ngbPopover=\"\">\n                                    Add input files\n                                </a>\n                            </mat-label>\n\n\n                            <mat-select [formControl]=\"files\" multiple [disabled]=\"disabled\"\n                                        class=\"form-control\"\n                                        (selectionChange)=\"setFileParameters('')\">\n                                <mat-select-trigger class=\"selection\">\n                                    {{files.value ? files.value[0] : ''}}\n                                    <span *ngIf=\"files.value?.length > 1\">\n        (+{{files.value.length - 1}} {{files.value?.length === 2 ? 'other' : 'others'}})\n                                        </span>\n                                </mat-select-trigger>\n                                <mat-option *ngFor=\"let n of exerciseFiles\" [value]=\"n.FileName\">{{n.FileName}}</mat-option>\n                            </mat-select>\n                            <hr />\n                            Click the file to download:\n                            <div *ngFor=\"let f of exerciseFiles\" class=\"files\">\n                                <div class=\"form-row text-center\">\n                                    <a href=\"#\" (click)=\"download(f); false;\"\n                                       popoverTitle=\"Download\"\n                                       triggers=\"mouseenter:mouseleave\"\n                                       ngbPopover=\"Click to download this file.\">\n                                        {{f.FileName}}\n                                    </a>\n                                    <br />\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-md-4 card\">\n                            Example of code to read an array from a file. <br /><br />\n                            <code>\n                                FILE * pFile;<br />\n                                <br />\n                                pFile = fopen (\"file.txt\",\"r\");\n                                <br /><br />\n                                fscanf(pFile, \"%d \", &lin);\n                                <br />\n                                fscanf(pFile, \"%d\\n\", &col);\n                                <br />\n                                fscanf(pFile, \"%lf\\n\", &limiar);\n                                <br />\n                            </code>\n                        </div>\n\n                    </div>\n\n\n                </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"3\">\n                <a ngbNavLink>Nodes <span class=\"response\">(MPI)</span></a>\n                <ng-template ngbNavContent>\n\n                    <div class=\"form-group col-md-3\">\n                        Number of process\n                        <input type=\"number\" formControlName=\"NumberProc\"\n                               (click)=\"setManualParameters('');\"\n                               onkeydown=\"return false\"\n                               onclick=\"return false\"\n                               class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fc.NumberProc.errors }\" />\n                        <div *ngIf=\"submitted && fc.NumberProc.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"fc.NumberProc.errors.required\">Number of process is required</div>\n                            <div *ngIf=\"fc.NumberProc.errors.min\">Process must be at least 1 number</div>\n                            <div *ngIf=\"fc.NumberProc.errors.generic\">{{f.numberProc.errors.generic}}</div>\n                        </div>\n                        <div *ngIf=\"msgOverLoad\" class=\"runTimeout\">{{msgOverLoad}}</div>\n                    </div>\n                    <div class=\"form-group col-md-3\">\n                        <mat-label>\n                            <a href=\"#\"  ngbPopover=\"Select one or more nodes to run the code.\"\n                               triggers=\"mouseenter:mouseleave\" popoverTitle=\"Cluster Nodes\">\n                                Nodes\n                            </a>\n                        </mat-label>\n                        <mat-select [formControl]=\"containers\" multiple [disabled]=\"disabled\"\n                                    class=\"form-control\"\n                                    (selectionChange)=\"setManualParameters('')\">\n                            <mat-select-trigger class=\"selection\">\n                                {{containers.value ? containers.value[0] : ''}}\n                                <span *ngIf=\"containers.value?.length > 1\">\n        (+{{containers.value.length - 1}} {{containers.value?.length === 2 ? 'other' : 'others'}})\n                                    </span>\n                            </mat-select-trigger>\n                            <mat-option *ngFor=\"let n of nodes\" [value]=\"n\">{{n}}</mat-option>\n                        </mat-select>\n                    </div>\n                </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"4\">\n                <a ngbNavLink>Results</a>\n                <ng-template ngbNavContent>\n\n                    <div class=\"card m-3\" *ngIf=\"programStatus\">\n                        <h6 class=\"card-header\">{{btnCompile}} ->| Program {{programStatus}} </h6>\n                        <span class=\"queuePosition\">Queue Position: {{queueStatus}}</span>\n                        <span class=\"runTimeout\">Running timeout: {{programTimeout}}</span>\n\n                        <div *ngIf=\"sequence?.length > 1\">\n                            <app-mat-progress-bar></app-mat-progress-bar>\n                        </div>\n\n                        <div class=\"card-body\">\n                            <div *ngIf=\"response.Command\" class=\"serviceOk\">\n                                {{command}}\n                            </div>\n                            <hr />\n                            <div *ngIf=\"response.Name\" class=\"{{response.Name}}\">\n                                {{response.Status}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <hr />\n\n                    <div class=\"form-group\">\n                        <ngx-monaco-editor class=\"editorResult\"\n                                           [options]=\"resultOptions\"\n                                           [ngModelOptions]=\"{standalone: true}\"\n                                           [(ngModel)]=\"code.Result\"\n                                           (onInit)=\"onInit($event)\">\n                        </ngx-monaco-editor>\n\n                    </div>\n\n                </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"5\">\n                <a ngbNavLink>Special Tags</a>\n                <ng-template ngbNavContent>\n                    <div class=\"card-body\" *ngIf=\"msgProcess\">\n                        <table class=\"table table-striped\">\n                            <tr *ngFor=\"let p of msgProcess | keyvalue\">\n                                <td>\n                                    <span class='iconServer'></span>\n                                    <b>Node {{p.key}} (Number of process per node: {{p.value.length}})</b>\n                                    <ng-container *ngFor= \"let r of p.value\">\n                                        <ul>\n                                            <li>\n                                                <span class='iconTask'></span>\n                                                <span>{{r}}</span>\n                                            </li>\n                                        </ul>\n                                    </ng-container>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n\n                    <div class=\"card m-12\">\n                        <div class=\"card-body\">\n                            To view custom OpenMPI output by grouping processes with ranks and messages,\n                            use the tags according to the template below:\n\n                            <p>Example of use:</p>\n\n                            <code>printf(\"message: &#123;M&#125;%s&#123;M&#125; from processor: &#123;P&#125;%s&#123;P&#125;, rank: &#123;R&#125;%d&#123;R&#125; out of %d processors\\n\",\n                                \"Hello World\", processor_name, world_rank, world_size);</code>\n                        </div>\n                    </div>\n                </ng-template>\n            </li>\n\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n    </form>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/current-nodes/current-nodes.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-nodes/current-nodes.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header text-center\">\n  Current Virtual Nodes in the Cluster\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"justify-content-center\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <input type=\"number\" formControlName=\"srvNumber\"\n               onkeydown=\"return false\"\n               onclick=\"return false\"\n               class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.srvNumber.errors }\"\n        />\n      </div>\n      <div class=\"form-group col-md-1\">\n        <button class=\"btn btn-primary mr-1\" [disabled]=\"!f.srvNumber.errors && response.Name==='info'\">OK</button>\n      </div>\n    </div>\n\n    <div class=\"form-row\">\n\n      <div *ngIf=\"submitted && f.srvNumber.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.srvNumber.errors.required\">Number of nodes is required</div>\n        <div *ngIf=\"f.srvNumber.errors.min\">Nodes must be at least 0 number or more</div>\n        <div *ngIf=\"f.srvNumber.errors.generic\">{{f.srvNumber.errors.generic}}</div>\n      </div>\n      <div *ngIf=\"response.Name\" class=\"{{response.Name}} response\">\n        {{response.Status}}\n        <app-mat-progress-bar *ngIf=\"response.Name==='info'\"></app-mat-progress-bar>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Answer: {{exercise.Title}} {{answer.Name?'('+answer.Name+')':''}}</span>\n      <br />\n      <span *ngIf=\"(exercise.ExIsExpired >= 0)\"\n            class=\"time\" style=\"font-size: 12px;\">Time to finish: {{Countdown}}\n            </span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-answer')\" style=\"margin-left: 20px;\">Answers</button>\n    </div>\n  </h6>\n\n  <div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n\n  <div class=\"col-md-12 group-container\" [ngClass]=\"backgroundColor\">\n\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n      <br />\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [(activeId)]=\"navActive\" [destroyOnHide]=\"false\">\n        <li [ngbNavItem]=\"1\">\n          <a ngbNavLink>Content</a>\n          <ng-template ngbNavContent>\n            <div class=\"card m-12\">\n              <h6 class=\"card-header\">Exercise description</h6>\n              <div class=\"card-body\">\n                <div [innerHTML]=\"exercise.Content\"></div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"2\">\n          <a ngbNavLink>Coding</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group code\">\n              <app-code></app-code>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"3\">\n          <a ngbNavLink>Diff</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <div class=\"diff\">\n                <div class=\"diffAdmin\">Admin Result</div>\n                <div class=\"diffUser\">Your Result:\n                  <button (click)=\"false\" *ngIf=\"diff\" [ngClass]=\"(diff=='EQUAL')?'btn-sm btn btn-success':'btn-sm btn btn-danger'\">\n                    {{diff}}\n                  </button>\n                </div>\n              </div>\n\n              <ngx-monaco-diff-editor\n                      [options]=\"resultOptions\"\n                      [originalModel]=\"originalModel\"\n                      [modifiedModel]=\"modifiedModel\">\n\n              </ngx-monaco-diff-editor>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"Name\">Comment:</label>\n              <textarea class=\"text\" type=\"text\" formControlName=\"Comment\" name=\"Comment\" id=\"Comment\"></textarea>\n            </div>\n\n          </ng-template>\n        </li>\n\n      </ul>\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n      <div class=\"form-group\">\n        <br /><button *ngIf=\"Score==='' && exercise.ExIsExpired >= '0' && exercise.MaxSubmissions > TotalEx\"\n                      class=\"btn-sm btn-success\">Submit</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-answer/exercises-answer.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-answer/exercises-answer.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span>Last Exercise Answers: {{exercise.Title}}</span>\n            <br />\n            <span *ngIf=\"(exercise.ExIsExpired >= 0)\"\n                  class=\"time\" style=\"font-size: 12px;\">Time to finish: {{exercise.countdown}}\n            </span>\n        </div>\n        <div style=\"float: right\">\n            <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-exercise')\" style=\"margin-left: 20px;\">Exercises</button>\n            <button *ngIf=\"(userSession.Module==='User' && totalAnswers < exercise.MaxSubmissions && exercise.ExIsExpired >= 0) ||\n                            (userSession.Module==='Admin' && exercise.ExIsExpired >= 0)\"\n                    class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addAnswer()\">\n                Add\n            </button>\n        </div>\n    </h6>\n\n    <div *ngIf=\"load===0\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n\n    <div *ngIf=\"(answers?.length <= 0 && load===1)\">\n        No records found.\n    </div>\n\n    <div class=\"filter\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter: \">\n        </mat-form-field>\n        <div *ngIf=\"userSession.Module==='Admin'\" class=\"buttonMenu\">\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic2\" ngbDropdownToggle>Export Results</button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                    <button (click)=\"download('allExec'); false;\" ngbDropdownItem>All Executions</button>\n                    <button (click)=\"download('lastExec'); false;\" ngbDropdownItem>Last Executions</button>\n                    <button (click)=\"download('allCode'); false;\" ngbDropdownItem>All Codes</button>\n                    <button (click)=\"download('lastCode'); false;\" ngbDropdownItem>Last Codes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"example-container mat-elevation-z8 \">\n\n        <table mat-table\n               [dataSource]=\"dataSource\" multiTemplateDataRows\n               class=\"mat-elevation-z8\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"Id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.Id}} </td>\n            </ng-container>\n\n            <!-- Title Column -->\n            <ng-container matColumnDef=\"Name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.Name}} </td>\n            </ng-container>\n\n            <!-- ExpirationDate Column -->\n            <ng-container matColumnDef=\"Date\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Submission </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.Date}} </td>\n            </ng-container>\n\n            <!-- Status Column -->\n            <ng-container matColumnDef=\"Status\">\n                <th mat-header-cell *matHeaderCellDef > Last Result </th>\n                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                    <button data-html=\"true\" id=\"button\" placement=\"top\" [ngbTooltip]=\"htmlContent\"\n                            [ngClass]=\"(element.Status=='EQUAL')?'btn-sm btn btn-success':'btn-sm btn btn-danger'\">\n                        {{element.Status}}\n                    </button>\n                </td>\n            </ng-container>\n\n            <!-- Score Time Column -->\n            <ng-container matColumnDef=\"Score\">\n                <th mat-header-cell *matHeaderCellDef > Score / Feedback </th>\n                <td mat-cell *matCellDef=\"let row;let i = dataIndex;\">\n                    <a *ngIf=\"userSession.Module==='Admin'\"\n                       href=\"#\" (click)=\"changeScore(i, row); false;\"\n                       placement=\"top\" ngbTooltip=\"Click to change\">\n                        {{row.Score ? row.Score:\"No\"}}/{{row.Feedback ? \"Yes\":\"No\"}}\n                    </a>\n                    <a *ngIf=\"userSession.Module!=='Admin'\"\n                       href=\"#\" (click)=\"showFeedback(i); false;\"\n                       placement=\"top\" ngbTooltip=\"Click to show the feedback\">\n                        {{row.Score ? row.Score:\"No\"}}/{{row.Feedback ? \"Yes\":\"No\"}}\n                    </a>\n                </td>\n            </ng-container>\n\n            <!-- Response Time Column -->\n            <ng-container matColumnDef=\"TotalEx\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Attempts Number </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.TotalEx}} </td>\n            </ng-container>\n\n            <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n            <ng-container matColumnDef=\"expandedDetail\">\n                <td mat-cell *matCellDef=\"let element;let r = dataIndex;\" [attr.colspan]=\"displayedColumns.length\">\n                    <div class=\"element-detail\"\n                         [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n\n                        <table mat-table [dataSource]=\"element.run\" matSort>\n\n                            <!-- Index Column -->\n                            <ng-container matColumnDef=\"Index2\">\n                                <mat-header-cell *matHeaderCellDef> Number </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n                            </ng-container>\n\n                            <!-- Date Column -->\n                            <ng-container matColumnDef=\"Date2\">\n                                <mat-header-cell *matHeaderCellDef> Submission </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.Date}} </mat-cell>\n                            </ng-container>\n\n                            <!-- CheckCount Column -->\n                            <ng-container matColumnDef=\"CheckCount2\">\n                                <mat-header-cell *matHeaderCellDef> Code Analysis </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                    <a href=\"#\" (click)=\"showList(element.CheckList); false;\">\n                                        <mat-progress-bar id=\"checkBar\"\n                                                          placement=\"top\" ngbTooltip=\"Click to see code analysis\"\n                                                          mode=\"determinate\" value=\"{{element.CheckCount}}\"></mat-progress-bar>\n                                    </a>\n                                </mat-cell>\n                            </ng-container>\n\n                            <!-- ExecTime Column -->\n                            <ng-container matColumnDef=\"ExecTime2\">\n                                <mat-header-cell *matHeaderCellDef> Response Time </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.ExecTime}} </mat-cell>\n                            </ng-container>\n\n                            <!-- Events Column -->\n                            <ng-container matColumnDef=\"History2\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header> Events </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                    <a href=\"#\" (click)=\"showEvents(element.Id); false;\"\n                                       placement=\"top\" ngbTooltip=\"Click to see the exercise events\">\n                                        {{element.History}}\n                                    </a>\n                                </mat-cell>\n                            </ng-container>\n\n                            <!-- Status Column -->\n                            <ng-container matColumnDef=\"Status2\">\n                                <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.Status}} </mat-cell>\n                            </ng-container>\n\n                            <!-- Action Column -->\n                            <ng-container matColumnDef=\"Action2\">\n                                <mat-header-cell *matHeaderCellDef > Action </mat-header-cell>\n                                <mat-cell *matCellDef=\"let element;let i = index\" class=\"action-link\">\n                                    <div style=\"word-wrap: break-word;\">\n                                        <button mat-icon-button\n                                                *ngIf=\"userSession.Module==='Admin'\"\n                                                (click)=\"deleteAnswer(element.Id, element.Name, r, i); false;\"\n                                                placement=\"top\" ngbTooltip=\"Delete exercise answer\">\n                                            <mat-icon>delete</mat-icon>\n                                        </button>\n                                        <button mat-icon-button\n                                                (click)=\"editAnswer(element); false;\"\n                                                placement=\"top\" ngbTooltip=\"Show exercise answer\">\n                                            <mat-icon>code</mat-icon>\n                                        </button>\n                                    </div>\n                                </mat-cell>\n                            </ng-container>\n\n                            <mat-header-row class=\"header2\" *matHeaderRowDef=\"displayedColumns2\"></mat-header-row>\n                            <mat-row *matRowDef=\"let row; columns: displayedColumns2;\">\n                            </mat-row>\n                        </table>\n\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\n                class=\"element-row\"\n                [class.example-expanded-row]=\"expandedElement === element\"\n                (click)=\"expandedElement = element\">\n            </tr>\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-edit/exercises-edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-edit/exercises-edit.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} Exercise</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-exercise')\" style=\"margin-left: 20px;\">Exercises</button>\n    </div>\n  </h6>\n  <br />\n  <div class=\"col-md-12 group-container\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [destroyOnHide]=\"false\">\n        <li [ngbNavItem]=\"1\">\n          <a ngbNavLink>Content</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"Name\">Title:</label>\n              <input class=\"text\" type=\"text\" formControlName=\"Title\" name=\"Title\" id=\"Title\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"Name\">Content:</label>\n              <ckeditor [editor]=\"Editor\" formControlName=\"Content\"></ckeditor>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"2\">\n          <a ngbNavLink>Parameters</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"Name\">Expiration Date: </label>\n\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input class=\"date\" placeholder=\"yyyy-mm-dd\"\n                         name=\"dp\" formControlName=\"Date\" ngbDatepicker #d=\"ngbDatepicker\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                      <img class=\"icon\" src=\"../../assets/calendar.png\" />\n                    </button>\n                  </div>\n                </div>\n                <ngb-timepicker formControlName=\"Time\"></ngb-timepicker>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxSubmissions\">Maximum Number of Submissions:</label>\n              <input class=\"number\" type=\"number\" min=\"0\" max=\"1000\" formControlName=\"MaxSubmissions\"\n                     name=\"MaxSubmissions\" id=\"MaxSubmissions\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxTimeout\">Maximum Timeout (seconds):</label>\n              <input class=\"number\" type=\"number\" min=\"0\" max=\"1000\" formControlName=\"MaxTimeout\"\n                     name=\"MaxTimeout\" id=\"MaxTimeout\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxFileSize\">Maximum file size that the student can use with input (bytes). <br />Leave zero to disable:</label>\n              <input class=\"number\" type=\"number\" formControlName=\"MaxFileSize\"\n                     name=\"MaxFileSize\" id=\"MaxFileSize\"\n                     (click)=\"getInputMaxFileSize($event)\"\n                     (keyup)=\"getInputMaxFileSize($event)\">{{maxFileSize}}\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"4\">\n          <a ngbNavLink>Groups</a>\n          <ng-template ngbNavContent>\n\n            <exercises-app-groups></exercises-app-groups>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"5\">\n          <a ngbNavLink>Files</a>\n          <ng-template ngbNavContent>\n            <exercises-app-files></exercises-app-files>\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"6\">\n          <a ngbNavLink>Code</a>\n          <ng-template ngbNavContent>\n            <div class=\"form-group code\">\n              <app-code></app-code>\n            </div>\n          </ng-template>\n        </li>\n      </ul>\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{exerciseId? \"Update\":\"Insert\"}}</button>\n      </div>\n      <div *ngIf=\"submitted && fe.Title.errors\" class=\"error response\">\n        <div *ngIf=\"fe.Title.errors.required\">Title is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.Date.errors\" class=\"error response\">\n        <div *ngIf=\"fe.Date.errors.required\">Date is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.Time.errors\" class=\"error response\">\n        <div *ngIf=\"fe.Time.errors.required\">Time is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.MaxTimeout.errors\" class=\"error response\">\n        <div *ngIf=\"fe.MaxTimeout.errors.required\">MaxTimeout is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.MaxSubmissions.errors\" class=\"error response\">\n        <div *ngIf=\"fe.MaxSubmissions.errors.required\">MaxSubmissions is required</div>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-files/exercises-files.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-files/exercises-files.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"load===0 && exerciseId\">\n  <app-mat-progress-bar></app-mat-progress-bar>\n</div>\n\n<div *ngIf=\"!exerciseId\">Save the exercise first to enter a group.</div>\n\n<div *ngIf=\"exerciseId\" class=\"m-12\">\n\n  <form *ngIf=\"exerciseId\" enctype=\"multipart/form-data\" (ngSubmit)=\"uploadFile(file)\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\">\n        <input #inputFile class=\"btn-sm btn-primary\" type='file' [(ngModel)]=\"file\" name=\"media\" #selectfile >\n      </div>\n      <div class=\"form-group col-md-3\">\n        <button class=\"btn-sm btn-primary\" mat-raised-button type=\"button\" (click)=\"uploadFile(file)\">Upload</button>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <progress [value]=progress.loaded  [max]=progress.total></progress>\n      </div>\n    </div>\n\n  </form>\n\n  <div *ngIf=\"(files?.length <= 0 && load===1)\">\n    No records found.\n  </div>\n\n  <div class=\"example-container mat-elevation-z8 \">\n\n    <mat-table [dataSource]=\"dataSource\" class=\"table table-striped\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"Name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.FileName}} </mat-cell>\n      </ng-container>\n\n      <!-- Size Column -->\n      <ng-container matColumnDef=\"Size\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Size </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{formatBytes(row.Size)}} </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <div>\n            <button mat-icon-button\n                    (click)=\"delete(element); false;\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n          <div>\n            <button placement=\"top\" ngbTooltip=\"Click to download\"\n                    mat-icon-button\n                    (click)=\"download(element); false;\">\n              <mat-icon>save_alt</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-groups/exercises-groups.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-groups/exercises-groups.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"load===0\">\n  <app-mat-progress-bar></app-mat-progress-bar>\n</div>\n\n<div class=\"col-md-6 group-container\">\n  <div *ngIf=\"!exerciseId\">Save the exercise first to enter a group.</div>\n\n  <form  [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n    <mat-chip-list #chipList aria-label=\"Member selection\">\n\n      <div class=\"form-group\">\n\n        <mat-chip\n                *ngFor=\"let member of members\"\n                [selectable]=\"selectable\"\n                [removable]=\"removable\"\n                (removed)=\"remove(member)\">\n          {{member.Name}}\n          <mat-icon matChipRemove *ngIf=\"removable\">X</mat-icon>\n        </mat-chip>\n      </div>\n      <div class=\"form-group\">\n\n        <input\n                placeholder=\"New group...\"\n                #memberInput\n                [formControl]=\"memberCtrl\"\n                [matAutocomplete]=\"auto\"\n                [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add(member)\">\n      </div>\n    </mat-chip-list>\n    <div class=\"form-group\">\n\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n        <mat-option *ngFor=\"let member of filteredMembers | async\" [value]=\"member\">\n          {{member.Name}}\n        </mat-option>\n      </mat-autocomplete>\n    </div>\n\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Exercises</span>\n    </div>\n    <div style=\"float: right\">\n      <button *ngIf=\"userSession.Module==='Admin'\"\n              class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addExercise()\">Add</button>\n    </div>\n  </h6>\n\n  <div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n\n  <div *ngIf=\"(exercises?.length <= 0 && load===1)\">\n    No records found.\n  </div>\n\n  <div class=\"filter\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter: \">\n    </mat-form-field>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8 \">\n\n    <mat-table [dataSource]=\"dataSource\" class=\"table table-striped\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"Title\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Title}} </mat-cell>\n      </ng-container>\n\n      <!-- MaxSubmissions Column -->\n      <ng-container matColumnDef=\"MaxSubmissions\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>\n          <span placement=\"top\"\n                ngbTooltip=\"Maximum Number of Submissions / Timeout\">MNS/T</span>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.MaxSubmissions}}/{{row.MaxTimeout}}s </mat-cell>\n      </ng-container>\n\n      <!-- Date Column -->\n      <ng-container matColumnDef=\"Date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Expiration Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <div style=\"word-wrap: break-word;\"> {{row.Date}}<br />\n            <span *ngIf=\"row.IsExpired < 0\" class=\"expired\">(expired)</span>\n            <span *ngIf=\"row.IsExpired > 0 && row.IsExpired <= 0.99\" class=\"Notexpired\">(expires soon!)</span>\n            <span *ngIf=\"row.IsExpired > 0.99\" class=\"Notexpired\">(more than {{row.IsExpired.toFixed(0)}} day(s))</span>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Response Time Column -->\n      <ng-container matColumnDef=\"ExecTime\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>\n                    <span placement=\"top\"\n                          ngbTooltip=\"Admin Response Time\">RT</span>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExecTime}} </mat-cell>\n      </ng-container>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"CheckCount\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>\n          <span placement=\"top\"\n                ngbTooltip=\"Admin Code Analysis\">Code Analysis</span>\n          </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <a href=\"#\" placement=\"top\" ngbTooltip=\"Click to see code analysis\"\n             (click)=\"showList(element.CheckList); false;\">\n            <mat-progress-bar id=\"checkBar\" mode=\"determinate\" value=\"{{element.CheckCount}}\"></mat-progress-bar>\n          </a>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Delivered Column -->\n      <ng-container matColumnDef=\"Answers\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Delivered </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <div style=\"word-wrap: break-word;\">\n            <span *ngIf=\"userSession.Module!=='Admin'\">{{element.Name}}</span>\n            <button placement=\"top\" ngbTooltip=\"{{element.cAnswers}} exercise answers\"\n                    mat-icon-button (click)=\"viewAnswer(element, element.IsExpired)\">\n              <mat-icon>list</mat-icon> ({{element.cAnswers}})\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container *ngIf=\"userSession.Module==='Admin'\" matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <div style=\"word-wrap: break-word;\">\n            <button mat-icon-button\n                    (click)=\"deleteExercise(element)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n\n            <button mat-icon-button\n                    (click)=\"editExercise(element)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups-edit/groups-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups-edit/groups-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} Group</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-group')\" style=\"margin-left: 20px;\">Groups</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 group-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-group\">\n        <label for=\"Name\">Group Name:</label>\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name must be at least 4 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Name\">Description:</label>\n        <input type=\"text\" formControlName=\"Description\" placeholder=\"Description\"\n               name=\"Description\" class=\"form-control\" id=\"Description\">\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{fe.Id.value ? \"Update\":\"Insert\"}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups-members/groups-members.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups-members/groups-members.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Group Members: {{groupName}}</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-group')\" style=\"margin-left: 20px;\">Groups</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 group-container\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"hidden\">\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\" readonly>\n      </div>\n\n      <mat-chip-list #chipList aria-label=\"Member selection\">\n\n        <div class=\"form-group\">\n\n          <mat-chip\n                  *ngFor=\"let member of members\"\n                  [selectable]=\"selectable\"\n                  [removable]=\"removable\"\n                  (removed)=\"remove(member)\">\n            {{member.Name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">X</mat-icon>\n          </mat-chip>\n        </div>\n        <div class=\"form-group\">\n\n          <input\n                  placeholder=\"New member...\"\n                  #memberInput\n                  [formControl]=\"memberCtrl\"\n                  [matAutocomplete]=\"auto\"\n                  [matChipInputFor]=\"chipList\"\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\n                  (matChipInputTokenEnd)=\"add(member)\">\n        </div>\n      </mat-chip-list>\n      <div class=\"form-group\">\n\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngFor=\"let member of filteredMembers | async\" [value]=\"member\">\n            {{member.Name}}\n          </mat-option>\n        </mat-autocomplete>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">Update</button>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Groups</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addGroup()\">Add</button>\n    </div>\n  </h6>\n\n  <div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n\n  <div *ngIf=\"(groups?.length <= 0 && load===1)\">\n    No records found.\n  </div>\n\n  <div class=\"filter\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter: \">\n    </mat-form-field>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8 \">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"Name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <button mat-icon-button (click)=\"addMembers(element)\" style=\"margin-left: 20px;\"\n                  ngbPopover=\"Click to add or delete users\"\n                  triggers=\"mouseenter:mouseleave\"\n                  popoverTitle=\"Members\">\n            <mat-icon>groups</mat-icon>\n            ({{element.mCount}})\n          </button>\n          <button mat-icon-button (click)=\"deleteGroup(element)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"editGroup(element)\" style=\"margin-left: 20px;\">\n            <mat-icon>edit</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-credentials.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-credentials.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"loginMain\">\n  <div class=\"text-center\" *ngIf=\"!userSession.Owner\">\n    <a href=\"#\" class=\"login\" (click)=\"setRoute('host-login');false;\">Login</a>\n  </div>\n  <div class=\"text-center\" *ngIf=\"!userSession.Owner && hostInfo['SelfRegistration']==='On'\">\n    <a href=\"#\" (click)=\"addUser(); false;\">Sign up</a>\n  </div>\n</div>\n\n\n<div *ngIf=\"userSession.Owner\" class=\"exit\">\n  <span class=\"session\" [ngClass]=\"{'error':idleState !== '30 m'}\">Inactivity session logout: {{idleState}}</span>\n\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n    <mat-icon>account_circle</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>\n      <span>{{userSession.Owner}} ({{userSession.Module}})</span>\n    </button>\n\n    <button *ngIf=\"userSession.Module!=='Admin'\" mat-menu-item (click)=\"setRoute('edit-user');false;\">\n      <mat-icon>lock</mat-icon>\n      <span>Update Profile</span>\n    </button>\n\n    <button *ngIf=\"userSession.Module==='Admin'\" mat-menu-item (click)=\"setRoute('settings');false;\">\n    <mat-icon>lock</mat-icon>\n    <span>Update Profile</span>\n    </button>\n\n    <button mat-menu-item (click)=\"logout();false;\">\n      <mat-icon>exit_to_app</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-login/host-login.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-login/host-login.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loginMain card m-3 tags\">\n\n  <div class=\"login card m-3 tags\">\n    <h6 class=\"card-header\">\n      <div class=\"host\">\n        <div class=\"name\">Host Credentials</div>\n      </div>\n    </h6>\n    <div class=\"card-body\">\n      <form *ngIf=\"!userSession.Owner\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\"\n            class=\"d-flex justify-content-center\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <input type=\"text\" formControlName=\"owner\"\n                   class=\"form-control\" placeholder=\"Email\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.owner.errors }\" />\n            <input type=\"password\" formControlName=\"password\"\n                   class=\"form-control\" placeholder=\"Password\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <span class=\"session\"><a href=\"#\" (click)=\"recoverPassword(); false;\">Recover Password</a></span>\n            <div *ngIf=\"submitted && f.owner.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.owner.errors.required\">Field is required</div>\n              <div *ngIf=\"f.owner.errors.minlength\">Email Or Password must be at least 4 characters</div>\n              <div *ngIf=\"f.owner.errors.generic\">{{f.owner.errors.generic}}</div>\n            </div>\n          </div>\n          <div class=\"buttons text-center flex-column\">\n            <div class=\"text-center\">\n              <button class=\"btn btn-primary mr-1\">OK</button>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <div class=\"response text-center\" *ngIf=\"response.Name\">\n        <div *ngIf=\"response.Name==='info'\" class=\"{{response.Name}}\">{{response.Status}}\n          <app-mat-progress-bar></app-mat-progress-bar>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-status/host-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host-status/host-status.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-template #popContent>\n  <span>Your Hostname: {{hostInfo.Hostname}}</span>\n  <br /><span>Operation Mode: <b>{{hostInfo.OpMode}}</b></span>\n  <br /><span>Queuing System: <b>{{hostInfo.Queue}}</b> (Max. Concurrency: <b>{{hostInfo.MaxConcurrency}}</b>)</span>\n  <br /><span class=\"{{hostConnection.Name}}\">\n            Connection Status: <b>{{hostConnection.Status}}</b></span>\n  <br />\n  <div *ngIf=\"hostConnection['Name']==='info'\" class=\"response\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n</ng-template>\n\n<img class=\"icon\" container=\"body\" src=\"{{hostConnection['Name']==='ok'? '../../assets/serverOn.png':'../../assets/serverOff.png'}}\"\n       [ngbPopover]=\"popContent\"\n       triggers=\"mouseenter:mouseleave\"\n       popoverTitle=\"About this server\" />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/module/module.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/module/module.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"divTable\">\n    <div class=\"divTableBody\">\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>person</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-user'); false;\" style=\"margin-left: 20px;\">Users</a></div>\n        </div>\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>groups</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\"\n                                         (click)=\"setRoute('view-group'); false;\" style=\"margin-left: 20px;\">Groups</a></div>\n        </div>\n        <div class=\"divTableRow\">\n            <div class=\"divTableCell\"><mat-icon>format_list_numbered</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-exercise'); false;\" style=\"margin-left: 20px;\">Exercises</a></div>\n        </div>\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>settings</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\"\n                                         (click)=\"setRoute('settings'); false;\" style=\"margin-left: 20px;\">Settings</a>\n            </div>\n        </div>\n        <div class=\"divTableRow\">\n            <div class=\"divTableCell\"><mat-icon>code</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-code'); false;\" style=\"margin-left: 20px;\">Try a Code</a></div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation-mode/operation-mode.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation-mode/operation-mode.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body op-mode\">\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"hostInfo.OpMode\" (click)=\"setOpMode(group.value)\">\n    <mat-button-toggle value=\"MASTER\" [disabled]=\"hostInfo['OpMode']==='MASTER'\">MASTER</mat-button-toggle>\n    <mat-button-toggle value=\"NODE\" [disabled]=\"hostInfo['OpMode']==='NODE'\">NODE</mat-button-toggle>\n    <mat-button-toggle value=\"LOCAL\" [disabled]=\"hostInfo['OpMode']==='LOCAL'\">LOCAL</mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"response text-center\" *ngIf=\"response.Name\">\n  <div *ngIf=\"response.Name==='ok' || response.Name==='info'\" class=\"{{response.Name}}\">{{response.Status}}\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n  <div *ngIf=\"response.Name==='error'\" class=\"{{response.Name}}\">{{response.Status}}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <span>Settings</span>\n  </h6>\n  <div class=\"col-md-12 user-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <span class=\"info\">If the field is left empty, the system will attempt to automatically detect the settings.</span>\n      </div>\n\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [destroyOnHide]=\"false\">\n        <li [ngbNavItem]=\"1\">\n          <a ngbNavLink>Network</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"PublicInterface\">Public Host Interface:</label>\n              <span class=\"description\" for=\"PublicInterface\">Defines which network interface backend\n          and frontend will use to listen to network services.</span>\n              <input type=\"text\" formControlName=\"PublicInterface\" placeholder=\"Default: empty | Example: eth0\"\n                     name=\"PublicInterface\" class=\"form-control\" id=\"PublicInterface\">\n              <div *ngIf=\"submitted && fe.PublicInterface.errors\" class=\"error response\">\n                <div *ngIf=\"fe.PublicInterface.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"BackendPort\">Backend Service Port:</label>\n              <span class=\"description\">Sets the port value to list the services between the backends in the network.</span>\n              <input type=\"text\" formControlName=\"BackendPort\" placeholder=\"Default: 10001\"\n                     name=\"BackendPort\" class=\"form-control\" id=\"BackendPort\">\n              <div *ngIf=\"submitted && fe.BackendPort.errors\" class=\"error response\">\n                <div *ngIf=\"fe.BackendPort.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"FrontendPort\">Frontend Service Port:</label>\n              <span class=\"description\">Sets the port value to list the services for the frontends.</span>\n              <input type=\"text\" formControlName=\"FrontendPort\" placeholder=\"Default: 8000\"\n                     name=\"FrontendPort\" class=\"form-control\" id=\"FrontendPort\">\n              <div *ngIf=\"submitted && fe.FrontendPort.errors\" class=\"error response\">\n                <div *ngIf=\"fe.FrontendPort.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"2\">\n          <a ngbNavLink>Cluster</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"ClusterName\">Cluster:</label>\n              <span class=\"description\">The default cluster name.</span>\n              <input type=\"text\" formControlName=\"ClusterName\" placeholder=\"Default: CLUSTER01\"\n                     name=\"ClusterName\" class=\"form-control\" id=\"ClusterName\">\n              <div *ngIf=\"submitted && fe.ClusterName.errors\" class=\"error response\">\n                <div *ngIf=\"fe.ClusterName.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"ClusterPassword\">Cluster Password:</label>\n              <span class=\"description\">Defines the cluster password for connection between nodes.\n          If the password is left empty, the nodes will connect automatically if their\n          operating modes are set to NODE.</span>\n              <input type=\"text\" formControlName=\"ClusterPassword\" placeholder=\"Default: empty\"\n                     name=\"ClusterPassword\" class=\"form-control\" id=\"ClusterPassword\">\n              <div *ngIf=\"submitted && fe.ClusterPassword.errors\" class=\"error response\">\n                <div *ngIf=\"fe.ClusterPassword.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"OperationMode\">Operation Mode:</label>\n              <span class=\"description\">The default operation mode to start on backend init.</span>\n              <select formControlName=\"OperationMode\" name=\"OperationMode\" class=\"form-control\" id=\"OperationMode\">\n                <option value=\"\">Default: LOCAL</option>\n                <option value=\"LOCAL\">LOCAL</option>\n                <option value=\"CLUSTER\">NODE</option>\n                <option value=\"MASTER\">MASTER</option>\n              </select>\n              <div *ngIf=\"submitted && fe.OperationMode.errors\" class=\"error response\">\n                <div *ngIf=\"fe.OperationMode.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"StartContainers\">Number of Nodes:</label>\n              <span class=\"description\">The number of containers (virtual nodes) to be started on backend init.</span>\n              <input type=\"text\" formControlName=\"StartContainers\" placeholder=\"Default: 0\"\n                     name=\"StartContainers\" class=\"form-control\" id=\"StartContainers\">\n              <div *ngIf=\"submitted && fe.StartContainers.errors\" class=\"error response\">\n                <div *ngIf=\"fe.StartContainers.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxContainers\">Maximum Number of Nodes:</label>\n              <span class=\"description\">The maximum number of containers running as nodes.</span>\n              <input type=\"text\" formControlName=\"MaxContainers\" placeholder=\"Default: 30\"\n                     name=\"MaxContainers\" class=\"form-control\" id=\"MaxContainers\">\n              <div *ngIf=\"submitted && fe.MaxContainers.errors\" class=\"error response\">\n                <div *ngIf=\"fe.MaxContainers.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"3\">\n          <a ngbNavLink>Admin</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"HostUser\">Host User:</label>\n              <span class=\"description\">Sets the default user for the host and for accessing\n          the frontend Administrator roles.</span>\n              <input type=\"text\" formControlName=\"HostUser\" placeholder=\"Default: user@user\"\n                     name=\"HostUser\" class=\"form-control\" id=\"HostUser\">\n              <div *ngIf=\"submitted && fe.HostUser.errors\" class=\"error response\">\n                <div *ngIf=\"fe.HostUser.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"HostPassword\">Host Password:</label>\n              <span class=\"description\">Sets the default user password.</span>\n              <input type=\"text\" formControlName=\"HostPassword\" placeholder=\"Default: user\"\n                     name=\"HostPassword\" class=\"form-control\" id=\"HostPassword\">\n              <div *ngIf=\"submitted && fe.HostPassword.errors\" class=\"error response\">\n                <div *ngIf=\"fe.HostPassword.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"SelfRegistration\">Self Registration:</label>\n              <span class=\"description\">Allows users to create their own logins on the server.</span>\n              <select formControlName=\"SelfRegistration\" placeholder=\"Default: On\"\n                      name=\"SelfRegistration\" class=\"form-control\" id=\"SelfRegistration\">\n                <option value=\"\">Default: On</option>\n                <option value=\"On\">On</option>\n                <option value=\"Off\">Off</option>\n              </select>\n              <div *ngIf=\"submitted && fe.SelfRegistration.errors\" class=\"error response\">\n                <div *ngIf=\"fe.SelfRegistration.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"4\">\n          <a ngbNavLink>Coding</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"CodeExecTimeout\">Code Execution Timeout:</label>\n              <span class=\"description\">Defines a timeout to code execution (in seconds).</span>\n              <input type=\"text\" formControlName=\"CodeExecTimeout\" placeholder=\"Default: 20\"\n                     name=\"CodeExecTimeout\" class=\"form-control\" id=\"CodeExecTimeout\">\n              <div *ngIf=\"submitted && fe.CodeExecTimeout.errors\" class=\"error response\">\n                <div *ngIf=\"fe.CodeExecTimeout.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"Queue\">Queuing System:</label>\n              <span class=\"description\">If enabled, a queue system will prevent two codes from running at the same time.\n          If disabled, it will become optional for each run.</span>\n              <select formControlName=\"Queue\" placeholder=\"Default: Off\" name=\"Queue\" class=\"form-control\" id=\"Queue\">\n                <option value=\"\">Default: Off</option>\n                <option value=\"On\">On</option>\n                <option value=\"Off\">Off</option>\n              </select>\n              <div *ngIf=\"submitted && fe.Queue.errors\" class=\"error response\">\n                <div *ngIf=\"fe.Queue.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxConcurrency\">Maximum Queue Concurrency:</label>\n              <span class=\"description\">Defines the maximum number of users in the queue, competing for resources.</span>\n              <input type=\"text\" formControlName=\"MaxConcurrency\" placeholder=\"Default: 30\"\n                     name=\"MaxConcurrency\" class=\"form-control\" id=\"MaxConcurrency\">\n              <div *ngIf=\"submitted && fe.MaxConcurrency.errors\" class=\"error response\">\n                <div *ngIf=\"fe.MaxConcurrency.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"5\">\n          <a ngbNavLink>Debug</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"Debug\">Debug:</label>\n              <span class=\"description\">Shows debug messages on the backend.</span>\n              <select formControlName=\"Debug\" placeholder=\"Default: Off\" name=\"Debug\" class=\"form-control\" id=\"Debug\">\n                <option value=\"\">Default: Off</option>\n                <option value=\"On\">On</option>\n                <option value=\"Off\">Off</option>\n              </select>\n              <div *ngIf=\"submitted && fe.Debug.errors\" class=\"error response\">\n                <div *ngIf=\"fe.Debug.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"Error\">Error:</label>\n              <span class=\"description\">Shows error messages on the backend.</span>\n              <select formControlName=\"Error\" placeholder=\"Default: Off\" name=\"Error\" class=\"form-control\" id=\"Error\">\n                <option value=\"\">Default: Off</option>\n                <option value=\"On\">On</option>\n                <option value=\"Off\">Off</option>\n              </select>\n              <div *ngIf=\"submitted && fe.Error.errors\" class=\"error response\">\n                <div *ngIf=\"fe.Error.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"6\">\n          <a ngbNavLink>SMTP Account</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"SmtpServer\">Smtp Server:</label>\n              <span class=\"description\">Server address responsible for sending the account\n          registration and password recovery emails.</span>\n              <input type=\"text\" formControlName=\"SmtpServer\" placeholder=\"Default: empty\"\n                     name=\"SmtpServer\" class=\"form-control\" id=\"SmtpServer\">\n              <div *ngIf=\"submitted && fe.SmtpServer.errors\" class=\"error response\">\n                <div *ngIf=\"fe.SmtpServer.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"SmtpPort\">Smtp Port:</label>\n              <span class=\"description\">Mail server port.</span>\n              <input type=\"text\" formControlName=\"SmtpPort\" placeholder=\"Default: empty\"\n                     name=\"SmtpPort\" class=\"form-control\" id=\"SmtpPort\">\n              <div *ngIf=\"submitted && fe.SmtpPort.errors\" class=\"error response\">\n                <div *ngIf=\"fe.SmtpPort.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"SmtpUser\">Smtp User:</label>\n              <span class=\"description\">Registered user for sending emails.</span>\n              <input type=\"text\" formControlName=\"SmtpUser\" placeholder=\"Default: empty\"\n                     name=\"SmtpUser\" class=\"form-control\" id=\"SmtpUser\">\n              <div *ngIf=\"submitted && fe.SmtpUser.errors\" class=\"error response\">\n                <div *ngIf=\"fe.SmtpUser.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"SmtpPassword\">Smtp User Password:</label>\n              <span class=\"description\">User Password registered for sending e-mails.</span>\n              <input type=\"text\" formControlName=\"SmtpPassword\" placeholder=\"Default: empty\"\n                     name=\"SmtpPassword\" class=\"form-control\" id=\"SmtpPassword\">\n              <div *ngIf=\"submitted && fe.SmtpPassword.errors\" class=\"error response\">\n                <div *ngIf=\"fe.SmtpPassword.errors.required\">Field is required</div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n      </ul>\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">Update</button>\n      </div>\n    </form>\n\n    <div class=\"response text-center\" *ngIf=\"response.Name\">\n      <div *ngIf=\"response.Name==='ok' || response.Name==='info'\" class=\"{{response.Name}}\">\n        {{response.Status}}\n        <app-mat-progress-bar></app-mat-progress-bar>\n      </div>\n      <div *ngIf=\"response.Name==='error'\" class=\"{{response.Name}}\">{{response.Status}}</div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/try-code/try-code.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/try-code/try-code.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <span>Try a Code</span>\n  </h6>\n\n  <div class=\"card-body hostStatus\">\n    <app-code></app-code>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} User</span>\n    </div>\n    <div style=\"float: right\" *ngIf=\"userSession.Module==='Admin'\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-user')\" style=\"margin-left: 20px;\">Users</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 user-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n      </div>\n\n      <div class=\"error\" *ngIf=\"ForceChangePass==='1'\">Attention, before using the system, you must change the password.</div>\n      <hr />\n      <div class=\"form-group\">\n        <input *ngIf=\"ForceChangePass!=='1'\" type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name must be at least 4 characters</div>\n        </div>\n      </div>\n\n      <div class=\"error\" *ngIf=\"fe.Id.value===1\">Attention, the Admin password and email must be changed in the Settings module.\n        The change here is not definitive.</div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"Password\" placeholder=\"Password\" name=\"Password\" class=\"form-control\" id=\"Password\">\n        <div *ngIf=\"submitted && fe.Password.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Password.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Password.errors.minlength\">Name must be at least 4 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"CPassword\" placeholder=\"Confirm Password\" name=\"CPassword\" class=\"form-control\" id=\"CPassword\">\n        <div *ngIf=\"submitted && fe.CPassword.errors\" class=\"error response\">\n          <div *ngIf=\"fe.CPassword.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.CPassword.errors.minlength\">Name must be at least 4 characters</div>\n          <div *ngIf=\"fe.CPassword.errors.mismatch\">The passwords are different</div>\n        </div>\n      </div>\n\n      <div *ngIf=\"ForceChangePass!=='1'\" class=\"form-group\">\n        <input type=\"text\" formControlName=\"Email\" placeholder=\"Email\" name=\"Email\" class=\"form-control\" id=\"Email\">\n        <div *ngIf=\"submitted && fe.Email.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Email.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Email.errors.email\">Please enter a valid email</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"userSession.Module==='Admin'\">\n        <label for=\"Module\">Module:</label>\n        <select formControlName=\"Module\" placeholder=\"Module\" name=\"Module\" class=\"form-control\" id=\"Module\">\n          <option value=\"Admin\">Admin</option>\n          <option value=\"User\">User</option>\n        </select>\n        <div *ngIf=\"submitted && fe.Module.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Module.errors.required\">Field is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"userSession.Module==='Admin'\">\n        <label for=\"ForceChangePass\">Force password change at next login?</label>\n        <select formControlName=\"ForceChangePass\" placeholder=\"ForceChangePass\"\n                name=\"ForceChangePass\" class=\"form-control\" id=\"ForceChangePass\">\n          <option value=\"1\">Yes</option>\n          <option value=\"0\">No</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{fe.Id.value ? \"Update\":\"Insert\"}}</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span>Users</span>\n        </div>\n        <div style=\"float: right\">\n            <button class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addUser()\">Add</button>\n        </div>\n    </h6>\n\n    <div *ngIf=\"load===0\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n\n    <div *ngIf=\"(users?.length <= 0 && load===1)\">\n        No records found.\n    </div>\n\n    <div class=\"filter\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter: \">\n        </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8 \">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"Id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"Email\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Email}} </mat-cell>\n            </ng-container>\n\n            <!-- Module Column -->\n            <ng-container matColumnDef=\"Module\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Module </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Module}} </mat-cell>\n            </ng-container>\n\n            <!-- Action Column -->\n            <ng-container matColumnDef=\"Action\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                    <button mat-icon-button (click)=\"deleteUser(element)\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                    <button mat-icon-button (click)=\"editUser(element)\" style=\"margin-left: 20px;\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n        </mat-table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <div class=\"welcome\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <span>\n          Hello!\n          <br />\n          The Iguana Cluster System allows the execution of parallelized codes in OpenMP, MPI, and CUDA (WIP).\n          <br />\n          <br />\n          <a href=\"#\" (click)=\"setRoute(); false;\">Register a user</a> and execute your codes in parallel.\n          <br />\n          <br />\n          Simple, quick, and easy.\n          <hr />\n          Author: Naylor Garcia Bachiega\n          <br />\n          Developed for doctoral work at the University of São Paulo - ICMC/USP\n          <br /><br />\n          Advisor: Paulo Sérgio Lopes de Souza\n        </span>\n      </div>\n      <div *ngIf=\"!userSession.Owner\" class=\"flex-column\">\n\n        <div class=\"card-body\">\n          <app-host-login></app-host-login>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_helpers/HttpErrorInterceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/HttpErrorInterceptor.ts ***!
  \**************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor(host, router) {
        this.host = host;
        this.router = router;
    }
    intercept(request, next) {
        //console.log(request);
        if (window.localStorage.getItem("ForceChangePass") == "1")
            this.router.navigate(['edit-user']);
        let session = JSON.stringify(this.host.getSessionID());
        let auth = [];
        auth[0] = this.host.encrypt(session);
        auth[1] = localStorage.getItem('OWNER');
        request = request.clone({
            setHeaders: {
                Authorization: auth,
            }
        });
        return next.handle(request).pipe(
        // We use the map operator to change the data from the response
        Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            //Exceptions
            if (request.url.indexOf('assets') != -1 ||
                request.url == "/api/fileRequest" ||
                request.url == "/api/fileResponse")
                return resp;
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                // and make changes to it, then return that clone
                return resp.clone({ body: this.host.decrypt(resp.body) });
            }
        }));
    }
};
HttpErrorInterceptor.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], HttpErrorInterceptor);



/***/ }),

/***/ "./src/app/_services/dialog/dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_services/dialog/dialog.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/deep/.mat-dialog-container {\n  background: #418ad5 !important;\n  display: block;\n  white-space: pre-line;\n  font-size: 12px;\n  margin-top: -200px;\n}\n\ntextarea:focus, input:focus{\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NlcnZpY2VzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9fc2VydmljZXMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzQxOGFkNSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0yMDBweDtcbn1cblxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/_services/dialog/dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/dialog/dialog.component.ts ***!
  \******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");



let DialogComponent = class DialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.modalInput = [];
        this.modalTitle = data.title;
        this.modalText = data.text;
        this.modalYes = data.yes;
        this.modalNo = data.no;
        this.modalInput = data.input;
        //console.log(data)
    }
    close(button) {
        let values = { 'button': button, 'input': this.modalInput };
        this.dialogRef.close(values);
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.css */ "./src/app/_services/dialog/dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogComponent);



/***/ }),

/***/ "./src/app/_services/event-emitter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/event-emitter.service.ts ***!
  \****************************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EventEmitterService = class EventEmitterService {
    constructor() {
        this.newOpMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hostInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.code = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exercise = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Detect when login or logout happens
    setLoginChange(data) {
        this.loginChange.emit(data);
    }
    // Keep the HostInfo updated
    setHostInfo(data) {
        this.hostInfo.emit(data);
    }
    setNewOpMode(data) {
        this.newOpMode.emit(data);
    }
    setCode(code) {
        //console.log(code);
        this.code.emit(code);
    }
    setExercise(exercise) {
        //console.log(code);
        this.exercise.emit(exercise);
    }
};
EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventEmitterService);



/***/ }),

/***/ "./src/app/_services/file.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/file.service.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        //console.log('worksheet',worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
};
ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExcelService);



/***/ }),

/***/ "./src/app/_services/host.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/host.service.ts ***!
  \*******************************************/
/*! exports provided: HostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostService", function() { return HostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Observer */ "./node_modules/rxjs/internal/Observer.js");
/* harmony import */ var rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6__);







let HostService = class HostService {
    constructor(http) {
        this.http = http;
    }
    ///////////// BACKEND CALL API /////////////////////////////////
    request(data, call) {
        //console.log("Host-Service | data, call", data, call);
        //CALLs ///////////////
        // simpleRequest
        // dbRequest
        // dbUpdate
        // setLogin
        // runExecCode
        // setOpMode
        // setConfigs
        return this.http.post('/api/' + call, this.encrypt(JSON.stringify(data)), { responseType: 'text' })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return JSON.parse(response);
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => {
            if (data['Request'] == "hostInfo")
                return '-';
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6__["empty"]);
        }));
    }
    uploadFileData(file, metadata) {
        let formData = new FormData();
        formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        formData.append('media', file);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        const options = {
            params: params,
            reportProgress: true,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('POST', '/api/fileRequest', formData, options);
        return this.http.request(req);
    }
    downloadFileData(data, option) {
        let auth = this.getSessionID();
        data = this.encrypt(JSON.stringify(data));
        option = this.encrypt(option);
        location.href = '/api/fileResponse?user=' + encodeURIComponent(auth.Owner) +
            '&option=' + encodeURIComponent(option) +
            '&data=' + encodeURIComponent(data);
    }
    /////////// FRONTEND FUNCTIONS //////////////
    CodeExample(example) {
        //console.log("CodeExample: ", example);
        return this.http.get('assets/' + example + '.c', { responseType: 'text' })
            .toPromise();
    }
    killSessionID() {
        localStorage.clear();
    }
    setSessionID(owner, module, params) {
        localStorage.setItem('OWNER', owner);
        localStorage.setItem('MODULE', module);
        let param = params.split("|");
        localStorage.setItem('ID', param[0]);
        localStorage.setItem('PASS', param[1]);
        localStorage.setItem('TOKEN', param[2]);
    }
    getSessionID() {
        let auth = {};
        auth.Owner = localStorage.getItem('OWNER');
        auth.Password = localStorage.getItem('PASS');
        auth.Module = localStorage.getItem('MODULE');
        auth.Id = localStorage.getItem('ID');
        auth.Token = localStorage.getItem('TOKEN');
        if ((auth.Owner == "" || auth.Owner == "undefined" || auth.Owner == null)
            && auth.Module != "SelfRegistration")
            return auth = { Owner: "", Password: "", Module: "", Id: null, Token: "" };
        return auth;
    }
    encrypt(value) {
        let token = "NPZ8fvABP5pKSwU3";
        if (localStorage.getItem('OWNER'))
            token = localStorage.getItem('TOKEN');
        return crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].encrypt(value, token.trim()).toString();
    }
    decrypt(textToDecrypt) {
        let token = "NPZ8fvABP5pKSwU3";
        if (localStorage.getItem('OWNER'))
            token = localStorage.getItem('TOKEN');
        let d = crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].decrypt(textToDecrypt, token.trim()).toString(crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Utf8);
        if (d) {
            try {
                let o = JSON.parse(d);
                if (o["Name"] == "error" && o["Status"] == "token") {
                    localStorage.setItem('TOKEN', 'error');
                }
            }
            catch (e) { }
        }
        return d;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error, result);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
};
HostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
HostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], HostService);



/***/ }),

/***/ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/_services/mat-progress-bar/mat-progress-bar.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zZXJ2aWNlcy9tYXQtcHJvZ3Jlc3MtYmFyL21hdC1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_services/mat-progress-bar/mat-progress-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: MatProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarComponent", function() { return MatProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MatProgressBarComponent = class MatProgressBarComponent {
    constructor() {
        this.progresValue = 0;
        this.rangeArray = new Array(100);
    }
    ngOnInit() {
    }
    onWindowScroll() {
        var element = document.documentElement, body = document.body, scrollTop = 'scrollTop', scrollHeight = 'scrollHeight';
        this.progresValue =
            (element[scrollTop] || body[scrollTop]) /
                ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], MatProgressBarComponent.prototype, "onWindowScroll", null);
MatProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-progress-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/mat-progress-bar/mat-progress-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-progress-bar.component.css */ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatProgressBarComponent);



/***/ }),

/***/ "./src/app/active-frontends/active-frontends.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/active-frontends/active-frontends.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".frontName {\n  font-size: 10px;\n  margin: 0;\n}\n\n.master {\n  color: #9d1e15;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLWZyb250ZW5kcy9hY3RpdmUtZnJvbnRlbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS1mcm9udGVuZHMvYWN0aXZlLWZyb250ZW5kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyb250TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWFzdGVyIHtcbiAgY29sb3I6ICM5ZDFlMTU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/active-frontends/active-frontends.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/active-frontends/active-frontends.component.ts ***!
  \****************************************************************/
/*! exports provided: ActiveFrontendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveFrontendsComponent", function() { return ActiveFrontendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");




let ActiveFrontendsComponent = class ActiveFrontendsComponent {
    constructor(host, _eventEmitter) {
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.hosts = [];
        this.hostInfo = {};
        this.haveUpdate = "";
    }
    ngOnInit() {
        this.getFrontendInfo();
        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(data => {
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
        });
    }
    getFrontendInfo() {
        let params = [];
        let request = {
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
};
ActiveFrontendsComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
];
ActiveFrontendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-active-frontends',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active-frontends.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-frontends/active-frontends.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active-frontends.component.css */ "./src/app/active-frontends/active-frontends.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
], ActiveFrontendsComponent);



/***/ }),

/***/ "./src/app/active-nodes/active-nodes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/active-nodes/active-nodes.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nodes {\n  padding: 10px;\n}\n\n.resources {\n  font-size: 10px;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLW5vZGVzL2FjdGl2ZS1ub2Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hY3RpdmUtbm9kZXMvYWN0aXZlLW5vZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZXMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucmVzb3VyY2VzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/active-nodes/active-nodes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/active-nodes/active-nodes.component.ts ***!
  \********************************************************/
/*! exports provided: ActiveNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveNodesComponent", function() { return ActiveNodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");




let ActiveNodesComponent = class ActiveNodesComponent {
    constructor(host, _eventEmitter) {
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.haveUpdate = "";
        this.hostInfo = {};
        this.nodes = [];
        this.vcpus = 0;
        this.mem = 0;
    }
    ngOnInit() {
        this.getActiveNodes();
        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(data => {
            this.hostInfo = data;
            let hu = this.haveUpdate;
            hu = this.hostInfo.Updates["activeNodes"];
            if (hu != this.haveUpdate) {
                this.getActiveNodes();
                //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
            }
        });
    }
    getActiveNodes() {
        let params = [];
        let request = {
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
                this.nodes.forEach(function (v, k) {
                    if (v['NumberOfCPUs'])
                        vcpus += parseInt(v['NumberOfCPUs']);
                    if (v['Memory'])
                        mem += parseInt(v['Memory']);
                    if (v.Container != null)
                        n += Object.keys(v.Container).length;
                    n++;
                });
                this.haveUpdate = n.toString();
            }
            else {
                this.haveUpdate = "0";
            }
            this.mem = mem;
            this.vcpus = vcpus;
        });
    }
};
ActiveNodesComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
];
ActiveNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-active-nodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active-nodes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-nodes/active-nodes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active-nodes.component.css */ "./src/app/active-nodes/active-nodes.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
], ActiveNodesComponent);



/***/ }),

/***/ "./src/app/active-queues/active-queues.component.css":
/*!***********************************************************!*\
  !*** ./src/app/active-queues/active-queues.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".normal {\n  font-size: 12px;\n}\n\nprocess {\n  line-height:80%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLXF1ZXVlcy9hY3RpdmUtcXVldWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS1xdWV1ZXMvYWN0aXZlLXF1ZXVlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxucHJvY2VzcyB7XG4gIGxpbmUtaGVpZ2h0OjgwJVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/active-queues/active-queues.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/active-queues/active-queues.component.ts ***!
  \**********************************************************/
/*! exports provided: ActiveQueuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveQueuesComponent", function() { return ActiveQueuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");




let ActiveQueuesComponent = class ActiveQueuesComponent {
    constructor(host, _eventEmitter) {
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.haveUpdate = "";
        this.hostInfo = {};
        this.queues = [];
        this.wait = false;
    }
    ngOnInit() {
        this.update();
        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(data => {
            this.hostInfo = data;
            if (this.hostInfo.Updates["activeQueues"] || this.queues) {
                this.wait = true;
            }
            else {
                this.wait = false;
            }
        });
    }
    update() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            while (true) {
                if (this.wait)
                    this.getActiveQueues();
                yield this.delay(2000);
            }
        });
    }
    getActiveQueues() {
        let params = [];
        let request = {
            Request: "activeQueues",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            this.queues = data;
            //console.log('Queues: hu haveUpdate: ', data, this.haveUpdate);
        });
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
};
ActiveQueuesComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
];
ActiveQueuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-active-queues',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active-queues.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-queues/active-queues.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active-queues.component.css */ "./src/app/active-queues/active-queues.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
], ActiveQueuesComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises/exercises.component */ "./src/app/exercises/exercises.component.ts");
/* harmony import */ var _exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exercises/exercises-edit/exercises-edit.component */ "./src/app/exercises/exercises-edit/exercises-edit.component.ts");
/* harmony import */ var _exercises_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercises/exercises-groups/exercises-groups.component */ "./src/app/exercises/exercises-groups/exercises-groups.component.ts");
/* harmony import */ var _exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises/exercises-answer/exercises-answer.component */ "./src/app/exercises/exercises-answer/exercises-answer.component.ts");
/* harmony import */ var _exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component */ "./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./groups/groups-edit/groups-edit.component */ "./src/app/groups/groups-edit/groups-edit.component.ts");
/* harmony import */ var _groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./groups/groups-members/groups-members.component */ "./src/app/groups/groups-members/groups-members.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./try-code/try-code.component */ "./src/app/try-code/try-code.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/users-edit/users-edit.component */ "./src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./host-credentials/host-login/host-login.component */ "./src/app/host-credentials/host-login/host-login.component.ts");

















const routes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"], },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"], },
    { path: '404', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"], },
    { path: 'view-code', component: _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_12__["TryCodeComponent"], },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], },
    { path: 'edit-user', component: _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_14__["UsersEditComponent"] },
    { path: 'add-user', component: _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_14__["UsersEditComponent"] },
    { path: 'view-user', component: _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"], },
    { path: 'edit-group', component: _groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_9__["GroupsEditComponent"] },
    { path: 'add-group', component: _groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_9__["GroupsEditComponent"] },
    { path: 'add-members', component: _groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_10__["GroupsMembersComponent"], },
    { path: 'add-groupex', component: _exercises_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_5__["ExercisesGroupsComponent"], },
    { path: 'view-group', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_8__["GroupsComponent"], },
    { path: 'view-exercise', component: _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__["ExercisesComponent"], },
    { path: 'edit-exercise', component: _exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_4__["ExercisesEditComponent"] },
    { path: 'add-exercise', component: _exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_4__["ExercisesEditComponent"] },
    { path: 'view-answer', component: _exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_6__["ExercisesAnswerComponent"], },
    { path: 'add-answer', component: _exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_7__["ExercisesAnswerEditComponent"], },
    { path: 'edit-answer', component: _exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_7__["ExercisesAnswerEditComponent"], },
    { path: 'host-login', component: _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_16__["HostLoginComponent"], },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.hostInfo {\n  text-align: right;\n  padding: 0 50px 0 0 !important;\n}\n\nmain {\n  margin-left: 25px !important;\n  margin-top: -40px !important;\n}\n\n.col-md-9 {\n  margin-top: -15px !important;\n}\n\n.mb-4, .my-4 {\n  margin-left: -15px !important;\n\n}\n\n.jumbotron {\n  padding: 1rem 0rem;\n}\n\n.navbar {\n  padding: 0 0 0 0;\n  margin-top: -20px !important;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.MASTER {\n  background-color: #878787;\n}\n\nfooter {\n  background-color: #e9ecef;\n}\n\n.mat-drawer-container {\n  background-color: rgb(111 111 111 / 32%);\n  color: #fff;\n}\n\n.mat-drawer {\n  background: #fff;\n  color: #000;\n}\n\n.mat-drawer.mat-drawer-side {\n  /* background: rgb(111 111 111 / 32%); */\n}\n\n.mat-sidenav-fixed {\n  /* background: rgb(111 111 111 / 32%); */\n}\n\n.mat-drawer-container {\n  background-color: #fff;\n  color: #000;\n}\n\n.mat-expansion-panel {\n  background: #fff;\n  color: #000;\n}\n\n.mat-list-base {\n  width: 95%;\n  padding-left: 8px;\n}\n\n::ng-deep .mat-toolbar {\n  background: rgb(208 208 208) !important;\n}\n\n::ng-deep .mat-drawer-inner-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n::ng-deep .mat-accordion .mat-expansion-panel {\n  border-radius: 0px !important;\n}\n\n::ng-deep .mat-expansion-panel-header-title {\n  color: #000 ;\n}\n\n::ng-deep .mat-expansion-panel:not([class*=mat-elevation-z]) {\n   box-shadow: 0 0 0 0 !important;\n}\n\n::ng-deep .mat-expansion-panel {\n  /* background: rgb(111 111 111 / 32%); */\n  /* display: block */\n  color: #000;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 5px 5px 5px 20px !important;\n}\n\n::ng-deep .card {\n  border-radius: 0px !important;\n}\n\n::ng-deep .mat-divider {\n  border-top-color: #000 !important;\n}\n\n.icon {\n  width: 60px;\n  height: 60px;\n}\n\n.down {\n  min-height: 200px;\n}\n\n.version {\n  font-size: 12px;\n}\n\n.iguana {\n  color: #000;\n}\n\n.noIP {\n  font-size: 12px;\n  color: #f60202;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7R0FDRyw4QkFBOEI7QUFDakM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhvc3RJbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgNTBweCAwIDAgIWltcG9ydGFudDtcbn1cblxubWFpbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC00MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtbWQtOSB7XG4gIG1hcmdpbi10b3A6IC0xNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYi00LCAubXktNCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuXG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAxcmVtIDByZW07XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5NQVNURVIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc4Nzg3O1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExIDExMSAxMTEgLyAzMiUpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcbiAgLyogYmFja2dyb3VuZDogcmdiKDExMSAxMTEgMTExIC8gMzIlKTsgKi9cbn1cblxuLm1hdC1zaWRlbmF2LWZpeGVkIHtcbiAgLyogYmFja2dyb3VuZDogcmdiKDExMSAxMTEgMTExIC8gMzIlKTsgKi9cbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5tYXQtbGlzdC1iYXNlIHtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjA4IDIwOCAyMDgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiAjMDAwIDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgLyogYmFja2dyb3VuZDogcmdiKDExMSAxMTEgMTExIC8gMzIlKTsgKi9cbiAgLyogZGlzcGxheTogYmxvY2sgKi9cbiAgY29sb3I6ICMwMDA7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMjBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZG93biB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4udmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlndWFuYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubm9JUCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmNjAyMDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");








let AppComponent = class AppComponent {
    constructor(router, host, dialog, _eventEmitter) {
        this.router = router;
        this.host = host;
        this.dialog = dialog;
        this._eventEmitter = _eventEmitter;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.title = 'angular-idle-timeout';
        this.hostInfo = {};
        this.cluster = {};
        this.load = 0;
        this.first = 0;
    }
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
        this._eventEmitter.loginChange.subscribe(data => {
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
            this.getHostInfo();
            if (data['Name'] == "stopSession")
                this.sidenav.close();
            //if (data['Name'] == "startSession")
            //  this.sidenav.toggle();
        });
        //Getting value from child OperationModeComponent
        this._eventEmitter.newOpMode.subscribe(data => {
            this.sidenav.close();
            this.newOpMode = data;
            this.clusterConnection = this.tmp_clusterConnection;
            this.hostConnection = this.tmp_hostConnection;
            this.host.killSessionID();
        });
    }
    getVersion() {
        let params = [];
        let request = {
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
            this.openModal('Token Error', 'This token is no more valid! Please, login again...', 'Close', '');
            this.host.killSessionID();
            this._eventEmitter.setLoginChange({ Name: "error", Status: "logout" });
        }
    }
    getHostInfo() {
        let params = [];
        let request = {
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
            }
            else {
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
                        let ret = this.openModal('Master Frontend', 'Do you want to be redirected to the master frontend?', 'Yes', 'No');
                        ret.afterClosed().subscribe(data => {
                            if (data['button'] == 'YES') {
                                window.open("http://" + this.hostInfo.Cluster.MasterIP + ":"
                                    + this.hostInfo.Cluster.PortFrontend, "_blank");
                            }
                        });
                        this.first = 1;
                    }
                }
                else {
                    this.clusterConnection = this.tmp_clusterConnection;
                }
            }
        });
    }
    // Let's check host connection after 10 seconds and forever....
    managerStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let n = 0;
            while (true) {
                this.getHostInfo();
                yield this.delay(10000);
                if (this.hostConnection["Name"] == "info" && n == 10) {
                    this.openModal('Connection Failed', 'There is no connection with the server!', 'Close', '');
                }
                if (this.hostConnection["Name"] == "ok" && n > 0) {
                    this.dialog.closeAll();
                    n = 0;
                }
                if (this.hostConnection["Name"] == "info")
                    n++;
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
    openModal(title, text, yes, no) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: title,
            text: text,
            yes: yes,
            no: no,
        };
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"])
], AppComponent.prototype, "sidenav", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _active_frontends_active_frontends_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active-frontends/active-frontends.component */ "./src/app/active-frontends/active-frontends.component.ts");
/* harmony import */ var _active_nodes_active_nodes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active-nodes/active-nodes.component */ "./src/app/active-nodes/active-nodes.component.ts");
/* harmony import */ var _active_queues_active_queues_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./active-queues/active-queues.component */ "./src/app/active-queues/active-queues.component.ts");
/* harmony import */ var _module_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/module.component */ "./src/app/module/module.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code/code.component */ "./src/app/code/code.component.ts");
/* harmony import */ var _cluster_available_cluster_available_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cluster-available/cluster-available.component */ "./src/app/cluster-available/cluster-available.component.ts");
/* harmony import */ var _current_nodes_current_nodes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./current-nodes/current-nodes.component */ "./src/app/current-nodes/current-nodes.component.ts");
/* harmony import */ var _cluster_info_cluster_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cluster-info/cluster-info.component */ "./src/app/cluster-info/cluster-info.component.ts");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exercises/exercises.component */ "./src/app/exercises/exercises.component.ts");
/* harmony import */ var _exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exercises/exercises-answer/exercises-answer.component */ "./src/app/exercises/exercises-answer/exercises-answer.component.ts");
/* harmony import */ var _exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component */ "./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts");
/* harmony import */ var _exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exercises/exercises-edit/exercises-edit.component */ "./src/app/exercises/exercises-edit/exercises-edit.component.ts");
/* harmony import */ var _exercises_exercises_files_exercises_files_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exercises/exercises-files/exercises-files.component */ "./src/app/exercises/exercises-files/exercises-files.component.ts");
/* harmony import */ var _exercises_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exercises/exercises-groups/exercises-groups.component */ "./src/app/exercises/exercises-groups/exercises-groups.component.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/file.service */ "./src/app/_services/file.service.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./groups/groups-edit/groups-edit.component */ "./src/app/groups/groups-edit/groups-edit.component.ts");
/* harmony import */ var _groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./groups/groups-members/groups-members.component */ "./src/app/groups/groups-members/groups-members.component.ts");
/* harmony import */ var _host_credentials_host_credentials_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./host-credentials/host-credentials.component */ "./src/app/host-credentials/host-credentials.component.ts");
/* harmony import */ var _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./host-credentials/host-login/host-login.component */ "./src/app/host-credentials/host-login/host-login.component.ts");
/* harmony import */ var _host_status_host_status_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./host-status/host-status.component */ "./src/app/host-status/host-status.component.ts");
/* harmony import */ var _services_mat_progress_bar_mat_progress_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services/mat-progress-bar/mat-progress-bar.component */ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.ts");
/* harmony import */ var _operation_mode_operation_mode_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./operation-mode/operation-mode.component */ "./src/app/operation-mode/operation-mode.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./users/users-edit/users-edit.component */ "./src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./try-code/try-code.component */ "./src/app/try-code/try-code.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/chips.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sort.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/expansion.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/__ivy_ngcc__/index.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm2015/ng-idle-keepalive.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _helpers_HttpErrorInterceptor__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./_helpers/HttpErrorInterceptor */ "./src/app/_helpers/HttpErrorInterceptor.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");


//DECLARATIONS






























//IMPORTS


























// @ts-ignore

//PROVIDES



//EXPORTS







Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _active_nodes_active_nodes_component__WEBPACK_IMPORTED_MODULE_3__["ActiveNodesComponent"],
            _active_frontends_active_frontends_component__WEBPACK_IMPORTED_MODULE_2__["ActiveFrontendsComponent"],
            _active_queues_active_queues_component__WEBPACK_IMPORTED_MODULE_4__["ActiveQueuesComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _cluster_available_cluster_available_component__WEBPACK_IMPORTED_MODULE_8__["ClusterAvailableComponent"],
            _cluster_info_cluster_info_component__WEBPACK_IMPORTED_MODULE_10__["ClusterInfoComponent"],
            _current_nodes_current_nodes_component__WEBPACK_IMPORTED_MODULE_9__["CurrentNodesComponent"],
            _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
            _exercises_exercises_component__WEBPACK_IMPORTED_MODULE_12__["ExercisesComponent"],
            _exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_15__["ExercisesEditComponent"],
            _exercises_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_17__["ExercisesGroupsComponent"],
            _exercises_exercises_files_exercises_files_component__WEBPACK_IMPORTED_MODULE_16__["ExercisesFilesComponent"],
            _exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_13__["ExercisesAnswerComponent"],
            _exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_14__["ExercisesAnswerEditComponent"],
            _code_code_component__WEBPACK_IMPORTED_MODULE_7__["CodeComponent"],
            _groups_groups_component__WEBPACK_IMPORTED_MODULE_19__["GroupsComponent"],
            _groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_20__["GroupsEditComponent"],
            _groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_21__["GroupsMembersComponent"],
            _host_credentials_host_credentials_component__WEBPACK_IMPORTED_MODULE_22__["HostCredentialsComponent"],
            _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_23__["HostLoginComponent"],
            _host_status_host_status_component__WEBPACK_IMPORTED_MODULE_24__["HostStatusComponent"],
            _services_mat_progress_bar_mat_progress_bar_component__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarComponent"],
            _module_module_component__WEBPACK_IMPORTED_MODULE_5__["ModuleComponent"],
            _operation_mode_operation_mode_component__WEBPACK_IMPORTED_MODULE_26__["OperationModeComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_28__["UsersComponent"],
            _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_29__["UsersEditComponent"],
            _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_30__["TryCodeComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_31__["WelcomeComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_61__["CommonModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_35__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HttpClientJsonpModule"],
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_56__["MonacoEditorModule"].forRoot(),
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__["MatAutocompleteModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_41__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_42__["MatButtonToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_55__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__["MatProgressBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_48__["MatSortModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_46__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_49__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_54__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_51__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_50__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_53__["FlexLayoutModule"],
            _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_57__["NgIdleKeepaliveModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_58__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_63__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_64__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_65__["MatIconModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_66__["LayoutModule"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_37__["HTTP_INTERCEPTORS"],
                useClass: _helpers_HttpErrorInterceptor__WEBPACK_IMPORTED_MODULE_59__["HttpErrorInterceptor"],
                multi: true,
            }, _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_60__["EventEmitterService"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_18__["ExcelService"],
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [
            _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_61__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ReactiveFormsModule"],
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cluster-available/cluster-available.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/cluster-available/cluster-available.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".key {\n  width: 20px;\n}\n\n.connected {\n  font-size: 12px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2x1c3Rlci1hdmFpbGFibGUvY2x1c3Rlci1hdmFpbGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jbHVzdGVyLWF2YWlsYWJsZS9jbHVzdGVyLWF2YWlsYWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uY29ubmVjdGVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmx1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cluster-available/cluster-available.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cluster-available/cluster-available.component.ts ***!
  \******************************************************************/
/*! exports provided: ClusterAvailableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterAvailableComponent", function() { return ClusterAvailableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");






let ClusterAvailableComponent = class ClusterAvailableComponent {
    constructor(host, dialog, _eventEmitter) {
        this.host = host;
        this.dialog = dialog;
        this._eventEmitter = _eventEmitter;
        this.clusters = [];
        this.response = [];
        this.hostInfo = {};
        this.haveUpdate = "";
        this.userSession = {};
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        this.clusterInfo();
        this.hostInfo.Cluster = {};
        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(data => {
            this.hostInfo = data;
            let hu = this.haveUpdate;
            hu = this.hostInfo.Updates["clusterAvailable"];
            if (hu != this.haveUpdate) {
                this.clusterInfo();
                //console.log('OperationMode: cluster-available: ', hu, this.haveUpdate);
            }
        });
    }
    connectToCluster(val) {
        //console.log('OperationMode: connectToCluster: ', val);
        let input = [];
        if (val.Password) {
            input.push({ Model: "", Name: "password", Type: "password", Title: "Password" });
        }
        let ret = this.openModal('Connect to ' + val.Name, 'Are you sure you want to connect to this cluster?', 'Yes', 'No', input);
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
                let serviceOpMode = {
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
        let params = [];
        let request = {
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
ClusterAvailableComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
];
ClusterAvailableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cluster-available',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cluster-available.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-available/cluster-available.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cluster-available.component.css */ "./src/app/cluster-available/cluster-available.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"]])
], ClusterAvailableComponent);



/***/ }),

/***/ "./src/app/cluster-info/cluster-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cluster-info/cluster-info.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.text-link {\n  font-size: 14px;\n}\n\n.icon {\n  width: 60px;\n  height: 60px;\n}\n\n.main {\n  float: left;\n}\n\n.mainSide {\n  float: left;\n  margin-left: 10px;\n}\n\n::ng-deep .btn-group-sm>.btn, .btn-sm {\n  padding: 0rem 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2x1c3Rlci1pbmZvL2NsdXN0ZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jbHVzdGVyLWluZm8vY2x1c3Rlci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFncyB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtaW4td2lkdGg6IDIwdnc7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM1cHgpO1xufVxuXG4udGV4dC1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tYWluIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tYWluU2lkZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5idG4tZ3JvdXAtc20+LmJ0biwgLmJ0bi1zbSB7XG4gIHBhZGRpbmc6IDByZW0gMHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cluster-info/cluster-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cluster-info/cluster-info.component.ts ***!
  \********************************************************/
/*! exports provided: ClusterInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterInfoComponent", function() { return ClusterInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");






let ClusterInfoComponent = class ClusterInfoComponent {
    constructor(host, dialog, _eventEmitter) {
        this.host = host;
        this.dialog = dialog;
        this._eventEmitter = _eventEmitter;
        this.userSession = {};
        this.response = {};
    }
    ngOnInit() {
        //Getting value from child HostCredentials
        this._eventEmitter.loginChange.subscribe(data => {
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
            this.userSession = this.host.getSessionID();
        });
        this.userSession = this.host.getSessionID();
    }
    setOpMode() {
        let ret = this.openModal('Exit Cluster', 'Do you confirm leaving the cluster??', 'Yes', 'No', '');
        ret.afterClosed().subscribe(data => {
            if (data['button'] == 'YES') {
                let cluster = {};
                let serviceOpMode = {
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
ClusterInfoComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClusterInfoComponent.prototype, "hostInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostConnection'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClusterInfoComponent.prototype, "hostConnection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('clusterConnection'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ClusterInfoComponent.prototype, "clusterConnection", void 0);
ClusterInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cluster-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cluster-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-info/cluster-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cluster-info.component.css */ "./src/app/cluster-info/cluster-info.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
], ClusterInfoComponent);



/***/ }),

/***/ "./src/app/code/code.component.css":
/*!*****************************************!*\
  !*** ./src/app/code/code.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".files {\n  padding-left: 10px;\n}\n\n.codeButtons {\n  padding-bottom: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.editor {\n  height: 90vh !important;\n  width: 100%;\n}\n\n.editorResult {\n  height: 200px !important;\n  width: 100%;\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\n.codeRun {\n  font-size: 14px !important;\n  padding: .75rem 1.25rem;\n\n}\n\n.serviceOk {\n  font-size: 14px;\n  color: #0b51c5;\n  display: block;\n  white-space: pre-line;\n}\n\n.runTimeout {\n  padding: .75rem 1.25rem;\n  font-size: 12px;\n  color: #9d1e15;\n  display: block;\n  white-space: pre-line;\n}\n\n.queuePosition {\n  padding: .75rem 1.25rem;\n  font-size: 12px;\n  color: #28a745;\n  display: block;\n  white-space: pre-line;\n}\n\n.selection {\n  color: #0a0a0a;\n  font-size: 14px;\n}\n\n/deep/ .mat-select-panel {\n  background-color: #007bff;\n  color: #0a0a0a;\n\n}\n\n/deep/ .mat-form-field-infix{\n  background-color: #fff;\n}\n\n/deep/ .mat-select{\n  background-color: #fff;\n  border: 1px solid #cbcbcb;\n}\n\n/deep/ .mat-form-field-type-mat-select .mat-form-field-label, .mat-select-value {\n  color: #0a0a0a;\n}\n\n/deep/ .mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #fff;\n}\n\n/deep/ .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #fff;\n}\n\n.md-fab-bottom-right{\n  position: fixed !important;\n  right: 100px; /* Add this and change value to set the margin you want */\n  bottom: 10px;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS9jb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZLEVBQUUseURBQXlEO0VBQ3ZFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb2RlL2NvZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlcyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvZGVCdXR0b25zIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi50ZXh0IHtcbiAgbWluLXdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVkaXRvciB7XG4gIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVkaXRvclJlc3VsdCB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5jb2RlUnVuIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuXG59XG5cbi5zZXJ2aWNlT2sge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMGI1MWM1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ucnVuVGltZW91dCB7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOWQxZTE1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ucXVldWVQb3NpdGlvbiB7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4uc2VsZWN0aW9uIHtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuL2RlZXAvIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6ICMwYTBhMGE7XG5cbn1cblxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuL2RlZXAvIC5tYXQtc2VsZWN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xufVxuXG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LXNlbGVjdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6ICMwYTBhMGE7XG59XG5cbi9kZWVwLyAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4vZGVlcC8gLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tZC1mYWItYm90dG9tLXJpZ2h0e1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwMHB4OyAvKiBBZGQgdGhpcyBhbmQgY2hhbmdlIHZhbHVlIHRvIHNldCB0aGUgbWFyZ2luIHlvdSB3YW50ICovXG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/code/code.component.ts":
/*!****************************************!*\
  !*** ./src/app/code/code.component.ts ***!
  \****************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let CodeComponent = class CodeComponent {
    constructor(host, dialog, formBuilder, router, _eventEmitter, _snackBar) {
        this.host = host;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.progress = { loaded: 0, total: 0 };
        this.submitted = false;
        this.editorOptions = {
            theme: 'vs-dark',
            language: 'c',
            automaticLayout: true,
            cursorSmoothCaretAnimation: true,
            fontSize: 12,
            suggest: true,
            tabCompletion: true,
            minimap: {
                enabled: true,
                showSlider: "always",
            },
        };
        this.resultOptions = {
            theme: 'vs-dark',
            language: 'c',
            automaticLayout: true,
            readOnly: true,
        };
        this.response = {};
        this.responseTemp = {};
        this.responseQueue = {};
        this.responseFile = {};
        this.code = {};
        this.codeTemp = {};
        this.hostInfo = {};
        this.containers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.exercise = {};
        this.files = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fileName = '';
        this.navActive = 1;
        this.queue = false;
        this.tryACode = "0";
        this.isHelpFile = false;
        this.numberOfCPUs = 0;
        this.msgOverLoad = "";
        this.hasChoiceCompile = 0;
    }
    ngOnInit() {
        this.codeForm = this.formBuilder.group({
            CompCmd: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]
            ],
            CompArgs: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]
            ],
            ExecCmd: ['', []],
            ExecArgs: ['', []],
            ExtraArgs: ['', []],
            File: ['', []],
            NumberProc: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                ]
            ],
            run: ['', []],
        }, {});
        this.disabled = false;
        this.btnCompile = "Compile and Run";
        this.exercise.Id = parseInt(window.localStorage.getItem("ExerciseId"));
        //Getting value from child CodeComponent
        this._eventEmitter.code.subscribe(data => {
            this.code = data;
            if (this.code.Command) {
                let r = this.code.Command.split("|");
                this.loadParameters = r[0];
                this.fc['CompCmd'].setValue(r[1]);
                this.fc['CompArgs'].setValue(r[2]);
                this.fc['ExecCmd'].setValue(r[3]);
                this.fc['ExecArgs'].setValue(r[4]);
                this.fc['ExtraArgs'].setValue(r[5]);
                this.fc['NumberProc'].setValue(r[6]);
                if (this.loadParameters != "Manual") {
                    this.fc['CompCmd'].disable();
                    this.fc['CompArgs'].disable();
                    this.fc['ExecCmd'].disable();
                    this.fc['ExecArgs'].disable();
                }
            }
        });
        this.tryACode = window.localStorage.getItem("TryACode");
        if (this.exercise.Id)
            this.getFiles();
        //Getting value from child CodeComponent
        this._eventEmitter.exercise.subscribe(data => {
            //console.log(data);
            this.exercise = data;
            if (this.exercise && this.exercise.Id) {
                window.localStorage.setItem("ExerciseId", this.exercise.Id.toString());
                this.getFiles();
            }
        });
        this.getActiveNodes();
        this.getHostInfo();
        //this.codeForm.disable();
    }
    onInit(editor) {
        this.editor = editor;
        this.codeTempMode = "auto";
    }
    onQueue() {
        this.queue = !this.queue;
    }
    onChange(editor) {
        this._eventEmitter.setCode(this.code);
        if (this.hasChoiceCompile == 0) {
            this.setAutoParameters(this.code.Code);
        }
        //Save in temp code
        //Getting Credentials
        let userSession = this.host.getSessionID();
        this.codeTemp.IdUser = parseInt(userSession.Id);
        this.codeTemp.IdExerciseAnswers = this.exercise.Id;
        this.codeTemp.Code = this.code.Code;
        this.codeTemp.Command = this.code.Command;
        if (this.codeTempMode == "auto")
            this.updateCodeTemp();
    }
    setTheme(val) {
        monaco.editor.setTheme(val);
    }
    setFont(val) {
        let font = { "fontSize": val };
        this.editor.updateOptions(font);
    }
    setMiniMap(val) {
        this.editor.updateOptions({ minimap: { enabled: val } });
    }
    getHostInfo() {
        let params = [];
        let request = {
            Request: "hostInfo",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            this.hostInfo = data;
        });
    }
    // convenience getter for easy access to form fields
    get fc() { return this.codeForm.controls; }
    getCodeExample(example) {
        this.hasChoiceCompile = 1;
        this.host.CodeExample(example)
            .then(result => {
            this.code.Code = result;
        })
            .catch(error => {
            console.log('Error Getting Data: ', error);
        });
        this.OpMode = 'vs-dark';
        this.codeExample = example;
        this.setParameters(this.codeExample);
    }
    setFileParameters(tec) {
        this.hasChoiceCompile = 1;
        let ExtraArgs = this.fc['ExtraArgs'].value.toString();
        let ExtraArgsTemp = ExtraArgs.split(" ");
        //check if all files in the selected box are in the input ExtraArgs
        if (this.files.value) {
            for (var i = 0; i < this.files.value.length; i++) {
                if (ExtraArgsTemp.indexOf(this.files.value[i]) > -1) {
                    continue;
                }
                else {
                    ExtraArgs += " " + this.files.value[i];
                }
            }
        }
        // Removing key index from exerciseFiles
        if (this.exerciseFiles) {
            let exerciseFilesTemp = [];
            for (var i = 0; i < this.exerciseFiles.length; i++) {
                exerciseFilesTemp[i] = this.exerciseFiles[i]['FileName'];
            }
            //check if all files in the input ExtraArgs are in the selected box
            ExtraArgsTemp = ExtraArgs.split(" ");
            ExtraArgs = "";
            for (var i = 0; i < ExtraArgsTemp.length; i++) {
                if (exerciseFilesTemp.indexOf(ExtraArgsTemp[i]) > -1) {
                    if (this.files.value.indexOf(ExtraArgsTemp[i]) > -1) {
                        ExtraArgs += " " + ExtraArgsTemp[i];
                    }
                }
                else {
                    ExtraArgs += " " + ExtraArgsTemp[i];
                }
            }
        }
        // Check if file uploaded from input File
        ExtraArgsTemp = ExtraArgs.split(" ");
        if (this.fileName != null) {
            if (ExtraArgsTemp.indexOf(this.fileName) === -1) {
                ExtraArgs += " " + this.fileName;
            }
        }
        this.fc['ExtraArgs'].setValue(ExtraArgs);
        this.setParameters(tec);
    }
    setManualParameters(tec) {
        this.hasChoiceCompile = 1;
        this.setParameters(tec);
    }
    setAutoParameters(code) {
        let c = 0;
        if (code.indexOf('mpi.h') !== -1) {
            this.setParameters('MPI');
            c += 1;
        }
        if (code.indexOf('omp.h') !== -1) {
            this.setParameters('OpenMP');
            c += 1;
        }
        if (c == 2) {
            this.setParameters('OpenMP_MPI');
        }
    }
    updateParameters() {
        //console.log("updateParameters");
        this.code.Command = this.loadParameters + "|";
        this.code.Command += this.fc['CompCmd'].value.toString() + "|";
        this.code.Command += this.fc['CompArgs'].value.toString() + "|";
        this.code.Command += this.fc['ExecCmd'].value.toString() + "|";
        this.code.Command += this.fc['ExecArgs'].value.toString() + "|";
        this.code.Command += this.fc['ExtraArgs'].value.toString() + "|";
        if (this.fc['NumberProc'].value > 0)
            this.code.Command += this.fc['NumberProc'].value.toString();
        this._eventEmitter.setCode(this.code);
    }
    setParameters(tec) {
        if (tec != '')
            this.loadParameters = tec;
        if (this.loadParameters != "Manual") {
            this.fc['CompCmd'].disable();
            this.fc['CompArgs'].disable();
            this.fc['ExecCmd'].disable();
            this.fc['ExecArgs'].disable();
        }
        else {
            this.fc['CompCmd'].enable();
            this.fc['CompArgs'].enable();
            this.fc['ExecCmd'].enable();
            this.fc['ExecArgs'].enable();
        }
        let nProcess;
        if (this.fc['NumberProc'].value > 0)
            nProcess = this.fc['NumberProc'].value.toString();
        if (nProcess > this.numberOfCPUs) {
            this.msgOverLoad = "Attention, you are allocating more processes than " +
                "the total number of CPUs in the cluster. " +
                "Performance degradation may occur.";
        }
        else {
            this.msgOverLoad = "";
        }
        let hosts;
        if (this.nodes)
            hosts = "-host " + this.nodes.join(",");
        if (this.containers.value != null) {
            if (this.containers.value[0]) {
                hosts = "-host " + this.containers.value;
            }
        }
        let CompCmd = this.fc['CompCmd'].value.toString();
        let CompArgs = this.fc['CompArgs'].value.toString();
        let ExecCmd = this.fc['ExecCmd'].value.toString();
        let ExecArgs = this.fc['ExecArgs'].value.toString();
        let ExtraArgs = this.fc['ExtraArgs'].value.toString();
        if (this.loadParameters == "MPI") {
            CompCmd = "mpic++";
            CompArgs = "main.c -o main";
            ExecCmd = "mpiexec";
            ExecArgs = "-n " + nProcess + " " + hosts + " main";
        }
        if (this.loadParameters == "OpenMP_MPI") {
            CompCmd = "mpic++";
            CompArgs = "-fopenmp main.c -o main";
            ExecCmd = "mpiexec";
            ExecArgs = "-n " + nProcess + " " + hosts + " main";
        }
        if (this.loadParameters == "OpenMP") {
            CompCmd = "g++";
            CompArgs = "-fopenmp main.c -o main";
            ExecCmd = "main";
            this.fc['ExecArgs'].setValidators([,]);
            this.fc['ExecArgs'].updateValueAndValidity();
            ExecArgs = "";
        }
        if (this.loadParameters == "CUDA") {
            CompCmd = "nvcc";
            CompArgs = "main.cu -o main";
            ExecCmd = "main";
            this.fc['ExecArgs'].setValidators([,]);
            this.fc['ExecArgs'].updateValueAndValidity();
            ExecArgs = "";
        }
        CompCmd = CompCmd.replace(/\s{2,}/g, ' ');
        CompArgs = CompArgs.replace(/\s{2,}/g, ' ');
        ExecCmd = ExecCmd.replace(/\s{2,}/g, ' ');
        ExecArgs = ExecArgs.replace(/\s{2,}/g, ' ');
        ExtraArgs = ExtraArgs.replace(/\s{2,}/g, ' ');
        this.fc['CompCmd'].setValue(CompCmd.trim());
        this.fc['CompArgs'].setValue(CompArgs.trim());
        this.fc['ExecCmd'].setValue(ExecCmd.trim());
        this.fc['ExecArgs'].setValue(ExecArgs.trim());
        this.fc['ExtraArgs'].setValue(ExtraArgs.trim());
        this.updateParameters();
    }
    uploadFile() {
        //this.response = {} as ResponseStr;
        var filedata = this.el.nativeElement.files[0];
        if (parseInt(filedata.size) > this.exercise.MaxFileSize) {
            this.responseFile.Name = "error";
            this.responseFile.Status = "The file is larger than the limit set for the exercise. \n" +
                "\nFile: " + filedata.name +
                "\nSize: " + this.formatBytes(filedata.size) +
                "\nMaximum allowed size: " + this.formatBytes(this.exercise.MaxFileSize);
            return;
        }
        let param = {};
        param.Name = "Code";
        param.Value = this.host.getSessionID().Token;
        this.host.uploadFileData(filedata, param)
            .subscribe((data) => {
            if (data.type == 1 && data.loaded && data.total) {
                this.progress.loaded = data.loaded;
                this.progress.total = data.total;
            }
            else if (data.body) {
                //console.log("Data Uploaded");
                //console.log(data.body);
                this.setFileParameters('');
                this.responseFile.Name = "ok";
                this.responseFile.Status = "File uploaded successfully. " +
                    "You can call the file directly in your code by the name: " + filedata.name;
            }
            if (data.loaded == data.total) {
                //console.log(filedata);
                this.fileName = filedata['name'];
                //this.load = 0;
                if (data.body && data['body']['Name'] == "error") {
                    this.responseFile = data['body'];
                }
            }
        }, error => console.log(error));
    }
    download(file) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    }
    onClick(mode) {
        this.btnCompile = "Compile";
        this.fc['ExecCmd'].setValidators([,]);
        this.fc['ExecCmd'].updateValueAndValidity();
        if (mode == "Compile and Run") {
            this.fc['ExecCmd'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]);
            this.fc['ExecCmd'].updateValueAndValidity();
        }
        this.btnCompile = mode;
        return;
    }
    checkFileParameters() {
        //Check if user include fopen in his code but forget of input the file
        if (this.code.Code.indexOf('fopen') !== -1 &&
            (!this.fileName && !this.files.value)) {
            this._snackBar.open("Attention, you are called a file in your code. " +
                "Go to the Files tab and send or select the correct file.", '', {
                duration: 10000, panelClass: ['info']
            });
            return false;
        }
        if (this.exerciseFiles) {
            //Select automatically the filename in the select box
            let extraArguments = this.fc['ExtraArgs'].value.split(" ");
            let getFilesName = [];
            for (var va of extraArguments) {
                for (var ve of this.exerciseFiles) {
                    if (va == ve['FileName'])
                        getFilesName.push(va);
                }
            }
            if (getFilesName.length > 0)
                this.files.setValue(getFilesName);
        }
    }
    onSubmitCode() {
        this.checkFileParameters();
        this.re.nativeElement.scrollIntoView({ behavior: "smooth" });
        this.submitted = true;
        if (!this.host.getSessionID()) {
            this.openModal('Work Area', 'Please, login first!', 'Close', '');
            return;
        }
        // stop here if form is invalid
        if (this.codeForm.invalid) {
            this.navActive = 1;
            return;
        }
        this.navActive = 4;
        this.codeForm.disable();
        this.disabled = true;
        let container = {};
        //console.log(this.code.MaxTimeout ,this.hostInfo.CodeExecTimeout);
        if (this.exercise.MaxTimeout == 0 || !this.exercise.MaxTimeout)
            this.exercise.MaxTimeout = this.hostInfo.CodeExecTimeout;
        this.codePacket = {
            Token: this.host.getSessionID().Token,
            Code: this.code.Code,
            NumberProc: this.fc['NumberProc'].value.toString(),
            CompArgs: this.fc['CompArgs'].value.toString(),
            ExecArgs: this.fc['ExecArgs'].value.toString() + " " + this.fc['ExtraArgs'].value.toString(),
            ExecCmd: this.fc['ExecCmd'].value.toString(),
            CompCmd: this.fc['CompCmd'].value.toString(),
            FileName: this.fileName,
            Container: this.containers.value,
            Files: this.files.value,
            Queue: this.queue.toString(),
            Sequence: "",
            IdExercise: this.exercise.Id.toString(),
            MaxTimeout: (this.exercise.MaxTimeout + 2).toString(),
            Next: "",
        };
        //console.log(this.codePacket);
        this.sequence = ['queue', 'compile'];
        if (this.btnCompile == "Compile and Run") {
            this.sequence.push('run');
            this.codePacket.Next = "run";
        }
        this.code.Result = "";
        this.response['Name'] = 'ok';
        this.response['Status'] = "Please wait, we are sending your request to the server.";
        this.programStatus = "is running...";
        this.managerStatus();
    }
    showProcess() {
        let lines = [];
        let process = [];
        lines = this.response['Status'].split('\n');
        lines.forEach(function (v, k) {
            //PROCESSOR
            let reg = '{P}(.+){P}';
            let matP = v.match(reg);
            if (matP && matP[1] && !process[matP[1]]) {
                process[matP[1]] = [];
            }
            //RANK && MESSAGE
            reg = '{R}(.+){R}';
            let matR = v.match(reg);
            reg = '{M}(.+){M}';
            let matM = v.match(reg);
            let val = "";
            if (matR && matR[1])
                val = "Rank " + matR[1];
            if (matM && matM[1])
                val += ": " + matM[1];
            if (val != "")
                process[matP[1]].push(val);
        });
        return process;
    }
    getActiveNodes() {
        let params = [];
        let request = {
            Request: "activeNodes",
            Param: params,
        };
        let nodesTemp = [];
        let num = 0;
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            if (data) {
                data.forEach(function (v, k) {
                    num += parseInt(v['NumberOfCPUs']);
                    if (v['Container'] != null) {
                        let c = Object.keys(v['Container']).length;
                        if (c > 0) {
                            v['Container'].forEach(function (v1, k1) {
                                if (v1['IP'] != "")
                                    nodesTemp.push(v1['IP']);
                            });
                        }
                    }
                });
            }
            this.numberOfCPUs = num;
            this.fc['NumberProc'].setValue(this.numberOfCPUs);
            this.nodes = nodesTemp;
        });
    }
    getFiles() {
        let filter = [];
        filter.push({ Name: "Id", Value: this.exercise.Id.toString() });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };
        let fileTemp = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.exerciseFiles = data;
        });
    }
    showQueue() {
        let params = [];
        params.push({ Name: "", Value: this.codePacket.Token });
        let request = {
            Request: "queueCheck",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            //console.log(this.codePacket.Token, data);
            this.responseQueue = data;
        });
    }
    runCode() {
        //console.log("CodeEditor | runCode", this.codePacket);
        this.host.request(this.codePacket, 'runExecCode')
            .subscribe(data => {
            this.responseTemp = data;
            this.response = this.responseTemp;
        });
    }
    managerStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let wait = true;
            let wait_queue = false;
            let wait_compile = false;
            let wait_run = false;
            let sequence = "queue";
            let timeout = false;
            //console.log(this.code);
            this.programTimeout = this.exercise.MaxTimeout;
            this.command = "";
            this.code.Event = "";
            this.response.Command = "";
            this.responseQueue = {};
            while (wait) {
                //Let's refresh the Session Timeout
                this._eventEmitter.setLoginChange({ Name: "RefreshSession", Status: "" });
                if (timeout == true) {
                    if (this.responseQueue.Count > 5)
                        this.programTimeout = this.exercise.MaxTimeout - this.responseQueue.Count;
                    else
                        this.programTimeout--;
                }
                yield this.delay(1000);
                if (wait_queue && this.responseQueue.Position > 1)
                    this.queueStatus = "getting position...";
                yield this.delay(1000);
                //console.log(sequence, this.responseTemp);
                if (sequence == "queue") {
                    if (!wait_queue) {
                        this.responseTemp = {};
                        this.codePacket.Sequence = "queue";
                        this.runCode();
                        wait_queue = true;
                    }
                    if (wait_queue) {
                        if (this.responseTemp['Name'] == "ok") {
                            this.showQueue();
                            if (this.responseQueue.Position)
                                this.queueStatus = this.responseQueue.Position.toString();
                        }
                        if (this.responseQueue.Position == 1) {
                            sequence = "compile";
                        }
                    }
                }
                if (sequence == "compile") {
                    if (!wait_compile) {
                        this.responseTemp = {};
                        this.codePacket.Sequence = "compile";
                        this.runCode();
                        wait_compile = true;
                    }
                    if (wait_compile) {
                        if (this.responseTemp['Name'] == 'ok' || this.responseTemp['Name'] == 'info') {
                            //SHOW COMPILE RESULTS
                            this.code.Event = this.response.Command + " (time " + this.response.CompTime + ")";
                            if (this.fileName)
                                this.code.Event += "\nFilename: " + this.fileName;
                            this.command += this.code.Event;
                            this.code.Event += "\n" + this.response.Status;
                            this._eventEmitter.setCode(this.code);
                            if (this.sequence.includes("run"))
                                sequence = "run";
                            else
                                wait = false;
                        }
                    }
                }
                if (sequence == "run") {
                    if (!wait_run) {
                        this.responseTemp = {};
                        this.codePacket.Sequence = "run";
                        this.runCode();
                        this.responseQueue = {};
                        wait_run = true;
                    }
                    if (wait_run) {
                        timeout = true;
                        this.showQueue();
                        if (this.responseTemp['Name'] == 'ok') {
                            //SHOW RUN RESULTS
                            this.msgProcess = this.showProcess();
                            this.code.Result = this.responseTemp.Status;
                            this.code.CheckCount = this.responseTemp.CheckCount;
                            this.code.CheckList = this.responseTemp.CheckList;
                            this.code.ExecTime = this.responseTemp.ExecTime;
                            this.code.Event = this.response.Command + " (time " + this.response.ExecTime + ")";
                            this.command += "\n\n" + this.code.Event;
                            this.code.Event += "\n" + this.response.Status;
                            this.code['DIFF'] = true;
                            this._eventEmitter.setCode(this.code);
                            this.responseTemp.Status = "Code copied to result area.";
                            wait = false;
                        }
                    }
                }
                if (this.responseTemp['Name'] == 'error') {
                    wait = false;
                    this.programTimeout = 0;
                }
            }
            this.queueStatus = "done!";
            this.codeForm.enable();
            this.disabled = false;
            this.sequence = [''];
            this.programStatus = "output";
            this.programTimeout = 0;
            if (!this.exercise.Id) {
                this._snackBar.open("Execution finished.", '', {
                    duration: 5000, panelClass: ['ok']
                });
            }
        });
    }
    codeTempCall(option) {
        if (option == "load") {
            let userSession = this.host.getSessionID();
            this.getCodeTemp(userSession.Id, this.exercise.Id);
        }
        if (option == "none")
            this.codeTempMode = "none";
        if (option == "auto")
            this.codeTempMode = "auto";
    }
    getCodeTemp(userId, exerciseId) {
        if (!exerciseId)
            exerciseId = -1;
        let filter = [];
        filter.push({ Name: "UserId", Value: userId.toString() });
        filter.push({ Name: "IdExerciseAnswers", Value: exerciseId.toString() });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "code-temp",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data) {
                //console.log(requestDB, data);
                this.codeTemp = data[0];
                this.code.Code = this.codeTemp.Code;
                this.code.Command = this.codeTemp.Command;
            }
        });
    }
    updateCodeTemp() {
        if (!this.codeTemp.IdExerciseAnswers)
            this.codeTemp.IdExerciseAnswers = -1;
        let filter = [];
        let requestDB = {
            Operation: "update",
            TableData: this.codeTemp,
            Custom: "CodeTemp",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data['Name'] == "ok" && parseInt(data['Status']) >= 1)
                this.codeTemp.Id = data['Status'];
        });
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
    openModal(title, text, yes, no) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: title,
            text: text,
            yes: yes,
            no: no
        };
        const dialogRef = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], dialogConfig);
    }
    formatBytes(bytes, decimal = 2) {
        if (0 === bytes)
            return "0 Bytes";
        const c = 0 > decimal ? 0 : decimal, d = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
    }
};
CodeComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ResultsTab", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CodeComponent.prototype, "re", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectfile'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CodeComponent.prototype, "el", void 0);
CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.css */ "./src/app/code/code.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], CodeComponent);



/***/ }),

/***/ "./src/app/current-nodes/current-nodes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/current-nodes/current-nodes.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtbm9kZXMvY3VycmVudC1ub2Rlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/current-nodes/current-nodes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/current-nodes/current-nodes.component.ts ***!
  \**********************************************************/
/*! exports provided: CurrentNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentNodesComponent", function() { return CurrentNodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");







let CurrentNodesComponent = class CurrentNodesComponent {
    constructor(host, formBuilder, _eventEmitter, dialog) {
        this.host = host;
        this.formBuilder = formBuilder;
        this._eventEmitter = _eventEmitter;
        this.dialog = dialog;
        this.submitted = false;
        this.nodes = [];
        this.response = {};
        this.haveUpdate = "";
        this.hostInfo = {};
        this.vcpus = 0;
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        this.getCurrentNodes();
        //Getting value from App Component
        this._eventEmitter.hostInfo.subscribe(data => {
            this.hostInfo = data;
            let hu = this.haveUpdate;
            hu = this.hostInfo.Updates["activeNodes"];
            if (hu != this.haveUpdate) {
                this.getCurrentNodes();
                //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
            }
            //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
        });
        this.registerForm = this.formBuilder.group({
            srvNumber: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
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
            let ret = this.openModal('Change the Number of Nodes', 'Attention, you are allocating more nodes than ' +
                'the total number of CPUs in the cluster. \n  ' +
                'Performance degradation may occur, confirm the request?', 'Yes', 'No', '');
            ret.afterClosed().subscribe(data => {
                if (data && data['button'] == 'YES') {
                    this.setNodes(num);
                    this.registerForm.disable();
                }
            });
        }
        else {
            this.setNodes(num);
            this.registerForm.disable();
        }
    }
    setNodes(num) {
        let params = [];
        params.push({ Name: "", Value: num.toString() });
        let request = {
            Request: "swarmAdd",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            this.response = data;
            //console.log("CurrentNodes | simpleRequest: ", request);
            if (this.response['Name'] == "error") {
                this.registerForm.enable();
                this.f['srvNumber'].setErrors({ 'generic': this.response['Status'] });
                return;
            }
            this.managerStatus('getCurrentNodes', this.registerForm.get('srvNumber').value);
        });
    }
    getCurrentNodes() {
        let params = [];
        let request = {
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
                this.nodes.forEach(function (v, k) {
                    if (v['NumberOfCPUs'])
                        vcpus += parseInt(v['NumberOfCPUs']);
                    //console.log("CurrentNodes | data: ", v.Container);
                    v.Container.forEach(function (v1, k1) {
                        if (v1.Name != "master")
                            n += 1;
                    });
                });
                this.haveUpdate = n.toString();
            }
            else {
                this.haveUpdate = "0";
            }
            this.f['srvNumber'].setValue(n);
            this.currentNumberOfNodes = n;
            this.vcpus = vcpus;
        });
    }
    managerStatus(funcName, desireRet) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let wait_ret = true;
            let n = "";
            while (wait_ret) {
                yield this.delay(5000);
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
        });
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
CurrentNodesComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
CurrentNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-current-nodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./current-nodes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/current-nodes/current-nodes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./current-nodes.component.css */ "./src/app/current-nodes/current-nodes.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], CurrentNodesComponent);



/***/ }),

/***/ "./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".time {\n  color: #9d1e15;\n  font-size: 10px;\n}\n\n.form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.textarea {\n  min-width: 100% !important;\n  min-height: 200px !important;\n  display: block;\n}\n\n.diff {\n  text-align: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.diffAdmin {\n  width: 50% !important;\n  float: left;\n}\n\n.diffUser {\n  margin-left: 50%\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1hbnN3ZXIvZXhlcmNpc2VzLWFuc3dlci1lZGl0L2V4ZXJjaXNlcy1hbnN3ZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9leGVyY2lzZXMvZXhlcmNpc2VzLWFuc3dlci9leGVyY2lzZXMtYW5zd2VyLWVkaXQvZXhlcmNpc2VzLWFuc3dlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZSB7XG4gIGNvbG9yOiAjOWQxZTE1O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4udGV4dCB7XG4gIG1pbi13aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0YXJlYSB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpZmYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGlmZkFkbWluIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpZmZVc2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJVxufVxuXG4uY2FyZCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ExercisesAnswerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesAnswerEditComponent", function() { return ExercisesAnswerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");










let ExercisesAnswerEditComponent = class ExercisesAnswerEditComponent {
    constructor(host, dialog, formBuilder, router, _eventEmitter, _snackBar) {
        this.host = host;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.resultOptions = {
            theme: 'vs-dark',
            language: 'c',
            automaticLayout: true,
            readOnly: true,
            ignoreTrimWhitespace: false,
        };
        this.responseEdit = {};
        this.exercise = {};
        this.answer = {};
        this.answersUser = {};
        this.diff = '';
        this.exerciseId = '';
        this.answerId = '';
        this.code = {};
        this.userSession = {};
        this.history = [];
        this.load = 0;
        this.TotalEx = 0;
        this.Score = '';
        this.navActive = 1;
        this.originalModel = {
            code: '',
            language: 'text/plain'
        };
        this.modifiedModel = {
            code: '',
            language: 'text/plain',
        };
    }
    ngOnInit() {
        this.editForm = this.formBuilder.group({
            Code: [''],
            Date: [''],
            Result: [''],
            Status: [''],
            Command: [''],
            ExecTime: [''],
            CheckCount: [''],
            CheckList: [''],
            Comment: [''],
            Id: [''],
            IdUser: [''],
            IdExercise: [''],
            Name: [''],
        });
        this.userSession = this.host.getSessionID();
        this.exerciseId = window.localStorage.getItem("ExerciseId");
        this.answerId = window.localStorage.getItem("AnswerId");
        this.execBegin();
        //Getting value from child CodeComponent
        this._eventEmitter.code.subscribe(data => {
            this.code = data;
            let message;
            let typeM;
            if (this.code.Result && this.originalModel.code) {
                this.modifiedModel = { code: this.code.Result, language: 'text/plain' };
                if (this.originalModel.code == this.modifiedModel.code) {
                    this.diff = "EQUAL";
                    message = "Your result is the same as the result of the exercise. Congratulations!";
                    typeM = "ok";
                }
                else {
                    this.diff = "NOT EQUAL";
                    message = "Your result is not the same as the result of the exercise!";
                    typeM = "error";
                }
                if (this.code['DIFF']) {
                    let snackBarRef;
                    snackBarRef = this._snackBar.open(message, 'Go to DIFF tab', {
                        duration: 5000, panelClass: [typeM]
                    });
                    snackBarRef.onAction().subscribe(() => this.navActive = 3);
                    this.code['DIFF'] = false;
                }
            }
            if (this.code.Event)
                this.history.push(this.registerHistory(this.code.Event));
        });
    }
    execBegin() {
        //Get exercise data
        if (this.exerciseId) {
            this.getExercise(this.exerciseId);
        }
        //Get answer data
        if (this.answerId) {
            this.getAnswer(this.answerId);
        }
        this.getAnswersUser(this.exerciseId);
    }
    getExercise(exerciseId) {
        let filter = [];
        filter.push({ Name: "Id", Value: exerciseId });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data) {
                //console.log(data);
                this.originalModel = { code: data[0]['Result'], language: 'text/plain' };
                this.exercise = data[0];
                this._eventEmitter.setExercise(this.exercise);
                this.managerStatus();
            }
            if (this.answerId == '')
                this.load = 1;
        });
    }
    getAnswer(answerId) {
        let filter = [];
        let requestDB;
        filter.push({ Name: "Id", Value: this.answerId });
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data) {
                this.answer = data[0];
                if (this.answerId) {
                    this.editForm.setValue(this.answer);
                    this.code = {
                        Result: this.answer.Result,
                        Event: this.answer.Event,
                        Command: this.answer.Command,
                        CheckCount: this.answer.CheckCount,
                        CheckList: this.answer.CheckList,
                        Code: this.answer.Code,
                        ExecTime: this.answer.ExecTime,
                    };
                    this.diff = this.answer['Status'];
                    this.modifiedModel = { code: this.code.Result, language: 'text/plain' };
                    this._eventEmitter.setCode(this.code);
                }
            }
            //console.log("Exercises Edit | dbList: ", data, this.code);
            this.load = 1;
        });
    }
    getAnswersUser(exerciseId) {
        let filter = [];
        let requestDB;
        filter.push({ Name: "IdExercise", Value: exerciseId });
        filter.push({ Name: "IdUser", Value: this.userSession.Id });
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-user",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data) {
                this.answersUser = data[0];
                this.TotalEx = parseInt(data[0]['TotalEx']);
                this.Score = data[Object.keys(data).length - 1]['Score'];
            }
            else {
                this.TotalEx = 0;
            }
        });
        this.load = 1;
    }
    // convenience getter for easy access to form fields
    get fe() { return this.editForm.controls; }
    setRoute(val) {
        this.router.navigate([val]);
    }
    onSubmit() {
        this.responseEdit = {};
        this.getAnswersUser(this.exerciseId);
        if (this.TotalEx >= this.exercise.MaxSubmissions) {
            this.responseEdit.Name = "error";
            this.responseEdit.Status = "The deadline to send the exercise has ended.";
            return;
        }
        let max = '';
        if (this.exercise.MaxSubmissions > 0) {
            max = "Remaining attempts: " +
                (this.exercise.MaxSubmissions - this.TotalEx) + "\n\n";
        }
        let ret = this.openModal('Exercise Submission', max + 'Do you want to submit the exercise?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(data => {
            if (data['button'] == 'YES') {
                this.fe['Date'].setValue('now');
                this.fe['Result'].setValue(this.code.Result);
                this.fe['Code'].setValue(this.code.Code);
                this.fe['Status'].setValue(this.diff);
                this.fe['IdExercise'].setValue(this.exerciseId);
                this.fe['Id'].setValue('');
                this.fe['CheckCount'].setValue(this.code.CheckCount);
                this.fe['CheckList'].setValue(this.code.CheckList);
                this.fe['ExecTime'].setValue(this.code.ExecTime);
                this.fe['Command'].setValue(this.code.Command);
                delete this.fe['Name'];
                //if (!this.answerId || this.answerId == "")
                this.fe['IdUser'].setValue(this.userSession.Id.toString());
                let filter = [];
                let requestDB = {
                    Operation: "update",
                    TableData: this.editForm.value,
                    Custom: "ExerciseAnswers",
                    Filter: filter,
                };
                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                    this.responseEdit = data;
                    //console.log(data);
                    //Let's save the history
                    if (this.responseEdit.Name == "ok") {
                        let id;
                        id = this.responseEdit.Status;
                        //console.log(this.history);
                        this.history.forEach((element) => {
                            this.submitHistory(element, id);
                        });
                        this.history = [];
                        this.responseEdit = data;
                        if (this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0)
                            this.responseEdit.Status = "Record inserted successfully.";
                        let snackBarRef = this._snackBar.open(this.responseEdit.Status, 'Go to Answers', {
                            duration: 3000, panelClass: [this.responseEdit.Name]
                        });
                        snackBarRef.onAction().subscribe(() => this.router.navigate(['view-answer']));
                    }
                    else {
                        let snackBarRef = this._snackBar.open(this.responseEdit.Status, this.responseEdit.Name, {
                            duration: 3000, panelClass: [this.responseEdit.Name]
                        });
                    }
                });
            }
            this.execBegin();
        });
    }
    registerHistory(event) {
        let history = {};
        if (event) {
            history.name = event;
            history.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(new Date(), 'yyyy-MM-dd HH:mm', 'en');
            history.status = this.diff;
            return history;
        }
    }
    submitHistory(element, id) {
        let answerHistory = {};
        answerHistory.IdExerciseAnswers = id;
        answerHistory.Date = element.date;
        answerHistory.Event = element.name;
        answerHistory.Status = element.status;
        let filter = [];
        let requestDB = {
            Operation: "update",
            TableData: answerHistory,
            Custom: "AnswersHistory",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            //console.log(data);
            //this.router.navigate(['Exercises']);
            //console.log("Exercises submithistory | edit: ", req, data);
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
    countdown(distance) {
        distance = distance * 1000;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        return days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }
    managerStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let count = true;
            let n = this.exercise['ExIsExpired'];
            if (n <= 0)
                count = false;
            while (count) {
                yield this.delay(1000);
                n--;
                if (n <= 0) {
                    let ret = this.openModal('Finished Time to Submission', 'The time to submit the exercise is over.', 'Close', '', '');
                    count = false;
                    this.execBegin();
                }
                this.Countdown = this.countdown(n);
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
};
ExercisesAnswerEditComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
ExercisesAnswerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exercises-answer-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-answer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-answer-edit.component.css */ "./src/app/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
], ExercisesAnswerEditComponent);



/***/ }),

/***/ "./src/app/exercises/exercises-answer/exercises-answer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/exercises/exercises-answer/exercises-answer.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Name {\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n}\n.mat-column-Id {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.mat-column-Date, .mat-column-Score, .mat-column-Score, mat-column-TotalEx {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.mat-column-Date2, .mat-column-CheckCount2,\n.mat-column-ExecTime2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n}\n.mat-column-Action2 {\n-webkit-box-flex: 0;\n        flex: 0 0 15%;\n}\n.mat-column-Status2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 15%;\n}\n.mat-column-Index2,\n .mat-column-History2 {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\ntable {\n  width: 100%;\n}\ntr.example-detail-row {\n  height: 0;\n}\ntr.element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\ntr.element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.element-row td {\n  border-bottom-width: 0;\n}\n.element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.element-description {\n  padding: 16px;\n}\n.element-description-attribution {\n  opacity: 0.5;\n}\n.element-row:not(.expanded) {\n  cursor: pointer;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n.header2 {\n  background-color: rgba(0, 0, 0, 0.29) !important;\n}\n.Notexpired {\n  color: #28a745;\n}\n.expired {\n  color: #9d1e15;\n}\n.time {\n  color: #9d1e15;\n  font-size: 10px;\n}\n.expired, .Notexpired {\n  font-size: 14px;\n}\nbutton {\n  margin-left: 5px;\n}\n.buttonMenu {\n  word-wrap: break-word;\n  float:right;\n  margin: 10px;\n}\n.mat-progress-bar{\n  height: 20px;\n}\n::ng-deep .mat-progress-bar-buffer {\n  background: #E4E8EB;\n}\n#checkBar {\n  border-radius: 2px;\n  width: 100px !important;\n}\n.icon {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1hbnN3ZXIvZXhlcmNpc2VzLWFuc3dlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBYTtVQUFiLGFBQWE7QUFDZjtBQUVBO0VBQ0UsbUJBQWE7VUFBYixhQUFhO0FBQ2Y7QUFFQTs7RUFFRSxtQkFBYTtVQUFiLGFBQWE7QUFDZjtBQUNBO0FBQ0EsbUJBQWE7UUFBYixhQUFhO0FBQ2I7QUFFQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmO0FBRUE7O0VBRUUsbUJBQWE7VUFBYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLHNHQUFzRztBQUN4RztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2V4ZXJjaXNlcy9leGVyY2lzZXMtYW5zd2VyL2V4ZXJjaXNlcy1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1OYW1lIHtcbiAgZmxleDogMCAwIDI1JTtcbn1cbi5tYXQtY29sdW1uLUlkIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cblxuLm1hdC1jb2x1bW4tRGF0ZSwgLm1hdC1jb2x1bW4tU2NvcmUsIC5tYXQtY29sdW1uLVNjb3JlLCBtYXQtY29sdW1uLVRvdGFsRXgge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuXG4ubWF0LWNvbHVtbi1EYXRlMiwgLm1hdC1jb2x1bW4tQ2hlY2tDb3VudDIsXG4ubWF0LWNvbHVtbi1FeGVjVGltZTIge1xuICBmbGV4OiAwIDAgMTUlO1xufVxuLm1hdC1jb2x1bW4tQWN0aW9uMiB7XG5mbGV4OiAwIDAgMTUlO1xufVxuXG4ubWF0LWNvbHVtbi1TdGF0dXMyIHtcbiAgZmxleDogMCAwIDE1JTtcbn1cblxuLm1hdC1jb2x1bW4tSW5kZXgyLFxuIC5tYXQtY29sdW1uLUhpc3RvcnkyIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDhweCAwO1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdzpudGgtY2hpbGQoMm4rMSl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTYsIDIwMSwgMC4xNikgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om5vdCg6bnRoLWNoaWxkKDJuKzEpKXtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI5KSAhaW1wb3J0YW50O1xufVxuXG4uTm90ZXhwaXJlZCB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuXG4uZXhwaXJlZCB7XG4gIGNvbG9yOiAjOWQxZTE1O1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjOWQxZTE1O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5leHBpcmVkLCAuTm90ZXhwaXJlZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbk1lbnUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZsb2F0OnJpZ2h0O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFye1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kOiAjRTRFOEVCO1xufVxuXG4jY2hlY2tCYXIge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/exercises/exercises-answer/exercises-answer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/exercises/exercises-answer/exercises-answer.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExercisesAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesAnswerComponent", function() { return ExercisesAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_services/file.service */ "./src/app/_services/file.service.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");













let ExercisesAnswerComponent = class ExercisesAnswerComponent {
    constructor(host, router, _eventEmitter, dialog, excelService, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.dialog = dialog;
        this.excelService = excelService;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Name', 'Date', 'Status', 'Score', 'TotalEx'];
        this.displayedColumns2 = ['Index2', 'Date2', 'CheckCount2', 'ExecTime2', 'History2', 'Status2', 'Action2'];
        this.exercise = {};
        this.answers = [];
        this.answersUser = [];
        this.answersXLS = [];
        this.response = {};
        this.userSession = {};
        this.load = 0;
        this.totalAnswers = 0;
    }
    ngAfterViewInit() {
        if (this.exerciseId) {
            this.getExercise(this.exerciseId);
            this.getAnswers(this.exerciseId);
        }
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        this.exerciseId = window.localStorage.getItem("ExerciseId");
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
    addAnswer() {
        window.localStorage.setItem("ExerciseId", this.exerciseId);
        window.localStorage.removeItem("AnswerId");
        this.router.navigate(['add-answer']);
    }
    ;
    editAnswer(answer) {
        window.localStorage.setItem("AnswerId", answer.Id.toString());
        window.localStorage.setItem("ExerciseId", this.exerciseId);
        this.router.navigate(['edit-answer']);
    }
    ;
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    deleteAnswer(id, name, r, i) {
        let ret = this.openModal('Delete Exercise of the User: ' + name, 'Confirm to delete the exercise?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(data => {
            if (data['button'] == 'YES') {
                let filter = [];
                filter.push({ Name: "Id", Value: id.toString() });
                let requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "exercises-answer",
                    Filter: filter,
                };
                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                    this.response = data;
                    this.setResponse(this.response['Status'], this.response['Name']);
                    if (this.response['Name'] == "ok") {
                        this.getAnswers(this.exerciseId);
                        //console.log("Exercises-Answer | deleteAnswer: ", this.response, this.exerciseId);
                    }
                });
            }
        });
    }
    showList(list) {
        let ret = this.openModal('Code Analysis by Clang-Tidy', list, 'Close', '', '');
    }
    showEvents(id) {
        this.getHistory(id);
    }
    download(choice) {
        if (choice == "lastExec") {
            this.answersUser.forEach(answer => {
                this.answersXLS.push({
                    Name: answer['Name'],
                    Submission_Date: answer.Date,
                    Response_Time: answer.ExecTime,
                    Status: answer.Status,
                    Attempts_Number: answer['TotalEx'],
                    Events: answer['History'],
                    Score: answer.Score
                });
            });
            this.excelService.exportAsExcelFile(this.answersXLS, this.exercise.Title);
            //console.log(this.answersXLS);
        }
        if (choice == "lastCode") {
            var zip = new jszip__WEBPACK_IMPORTED_MODULE_10__();
            this.answersUser.forEach(answer => {
                zip.file(answer['Name'] + '.c', answer.Code);
            });
            let name = this.exercise.Title;
            zip.generateAsync({ type: "blob" }).then(function (content) {
                // see FileSaver.js
                Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(content, name);
            });
        }
    }
    showFeedback(id) {
        let ret = this.openModal('Feedback', this.answersUser[id].Feedback, 'Close', '', '');
    }
    changeScore(index, row) {
        let input = [];
        input.push({ Model: row.Score, Name: "score", Type: "text", Title: "Score" });
        input.push({ Model: row.Feedback, Name: "feedback", Type: "text", Title: "Feedback *(Optional)" });
        let ret = this.openModal('Change Score', 'Please enter the score: ', 'Yes', 'No', input);
        ret.afterClosed().subscribe(data => {
            if (data && data['button'] == 'YES') {
                let score, feedback;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    score = data['input'][0]['Model'];
                if (data['input'][1] && data['input'][1]['Model'] != "")
                    feedback = data['input'][1]['Model'];
                if (!score)
                    score = "";
                let filter = [];
                let requestDB = {
                    Operation: "update",
                    TableData: { IdExercise: this.exerciseId,
                        IdUser: row.IdUser,
                        Id: row.IdScore,
                        Score: score, Feedback: feedback },
                    Custom: "ExerciseScores",
                    Filter: filter,
                };
                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                    if (data) {
                        if (data['Name'] == 'ok') {
                            this.answersUser[index].Score = score;
                            this.answersUser[index].Feedback = feedback;
                            this.setResponse('Record changed successfully.', 'ok');
                        }
                        else {
                            this.setResponse(data['Status'], 'error');
                        }
                    }
                });
            }
        });
    }
    getHistory(id) {
        let filter = [];
        filter.push({ Name: "IdExerciseAnswers", Value: id.toString() });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-history",
            Filter: filter,
        };
        let h = "";
        let i = 0;
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            //console.log(data);
            if (data) {
                data.forEach(history => {
                    i++;
                    h += "EVENT #" + i + "\n\nDATE: " + history.Date + "\nSTATUS: " +
                        history.Status + "\n\n COMMAND\n" + history.Event + "\n\n";
                });
            }
            else {
                h = "Records not found.";
            }
            let ret = this.openModal('Events', h, 'Close', '', '');
        });
    }
    getExercise(exerciseId) {
        let filter = [];
        filter.push({ Name: "Id", Value: exerciseId });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            //console.log(data);
            if (data) {
                this.exercise = data[0];
                this.exercise['countdown'] = this.countdown(this.exercise['ExIsExpired']);
            }
        });
    }
    getAnswers(exerciseId) {
        let filter = [];
        let requestDB;
        filter.push({ Name: "Id", Value: this.exerciseId });
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-admin",
            Filter: filter,
        };
        if (this.userSession.Module == "User") {
            filter.push({ Name: "IdUser", Value: this.userSession.Id });
            requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "exercises-answer-user",
                Filter: filter,
            };
        }
        this.answersUser = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.answers = data;
            if (this.answers) {
                let bId;
                let run = [];
                let bAnswer;
                let i = 0;
                this.answers.forEach(answer => {
                    if (i == 0)
                        bId = answer.IdUser;
                    if (answer.IdUser != bId) {
                        bAnswer['run'] = run;
                        this.answersUser.push(bAnswer);
                        run = [];
                    }
                    bAnswer = answer;
                    run.push(answer);
                    bId = answer.IdUser;
                    if (this.answers.length == 1 ||
                        this.answers.length == i + 1) {
                        bAnswer['run'] = run;
                        this.answersUser.push(bAnswer);
                        run = [];
                    }
                    i++;
                    this.totalAnswers++;
                });
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.answersUser);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                delete this.answersUser;
                delete this.dataSource;
            }
            this.load = 1;
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
    countdown(distance) {
        distance = distance * 1000;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        return days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }
};
ExercisesAnswerComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_file_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
], ExercisesAnswerComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], ExercisesAnswerComponent.prototype, "sort", void 0);
ExercisesAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exercises-answer-app-answer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-answer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-answer/exercises-answer.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-answer.component.css */ "./src/app/exercises/exercises-answer/exercises-answer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _services_file_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]])
], ExercisesAnswerComponent);



/***/ }),

/***/ "./src/app/exercises/exercises-edit/exercises-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/exercises/exercises-edit/exercises-edit.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.date {\n  min-width: 100px !important;\n  display: block;\n}\n\n.number {\n  min-width: 50px !important;\n  display: block;\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\nul, li {list-style-type: none;}\n\n.ck-editor__editable_inline {\n  min-height: 500px;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1lZGl0L2V4ZXJjaXNlcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBR0EsUUFBUSxxQkFBcUIsQ0FBQzs7QUFHOUI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1lZGl0L2V4ZXJjaXNlcy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLnRleHQge1xuICBtaW4td2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0ZSB7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5udW1iZXIge1xuICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cblxudWwsIGxpIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxuXG5cbi5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/exercises/exercises-edit/exercises-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/exercises/exercises-edit/exercises-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExercisesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesEditComponent", function() { return ExercisesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let ExercisesEditComponent = class ExercisesEditComponent {
    constructor(host, dialog, formBuilder, router, _eventEmitter, _snackBar) {
        this.host = host;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.submitted = false;
        this.responseEdit = {};
        this.exercise = {};
        this.code = {};
        this.maxFileSize = '';
    }
    ngOnInit() {
        this.editForm = this.formBuilder.group({
            Id: [''],
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaxSubmissions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaxTimeout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaxFileSize: [''],
            Content: [''],
            Code: [''],
            Result: [''],
            Command: [''],
            ExecTime: [''],
            CheckCount: [''],
            CheckList: [''],
        });
        this.exerciseId = window.localStorage.getItem("ExerciseId");
        this.getInit();
        //Getting value from child CodeComponent
        this._eventEmitter.code.subscribe(data => {
            if (data)
                this.code = data;
        });
    }
    getInit() {
        if (this.exerciseId)
            this.getExercise();
    }
    getExercise() {
        let filter = [];
        filter.push({ Name: "Id", Value: this.exerciseId });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (!data)
                return;
            data[0]['Date'] = {
                day: parseInt(data[0]['EDDay']),
                month: parseInt(data[0]['EDMonth']),
                year: parseInt(data[0]['EDYear']),
            };
            if (!data[0]['EDHour'])
                data[0]['EDHour'] = '00';
            if (!data[0]['EDMinute'])
                data[0]['EDMinute'] = '00';
            data[0]['Time'] = {
                hour: parseInt(data[0]['EDHour']),
                minute: parseInt(data[0]['EDMinute']),
            };
            delete data[0]['EDDay'];
            delete data[0]['EDMonth'];
            delete data[0]['EDYear'];
            delete data[0]['EDHour'];
            delete data[0]['EDMinute'];
            delete data[0]['FileContent'];
            delete data[0]['FileName'];
            this.editForm.setValue(data[0]);
            this.code = data[0];
            this.code['ShowDiff'] = 1;
            this._eventEmitter.setCode(this.code);
            this._eventEmitter.setExercise(data[0]);
            this.maxFileSize = this.formatBytes(data[0].MaxFileSize);
        });
    }
    // convenience getter for easy access to form fields
    get fe() { return this.editForm.controls; }
    setRoute(val) {
        this.router.navigate([val]);
    }
    onSubmit() {
        this.responseEdit = {};
        this.submitted = true;
        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }
        this.fe['Code'].setValue(this.code.Code);
        this.fe['Result'].setValue(this.code.Result);
        this.fe['Command'].setValue(this.code.Command);
        this.fe['ExecTime'].setValue(this.code.ExecTime);
        this.fe['CheckCount'].setValue(this.code.CheckCount);
        this.fe['CheckList'].setValue(this.code.CheckList);
        this.date = this.fe['Date'].value;
        this.time = this.fe['Time'].value;
        //console.log(this.time);
        if (!this.time || this.fe['Time'].value == "") {
            this.fe['Time'].setValue("00:00");
        }
        let temp = this.editForm.value;
        temp['Date'] =
            this.date.year + "-" +
                this.numberFormat(this.date.month) + "-" +
                this.numberFormat(this.date.day) + " " +
                this.numberFormat(this.time.hour) + ":" +
                this.numberFormat(this.time.minute);
        delete temp['Time'];
        //console.log(temp);
        let filter = [];
        let requestDB = {
            Operation: "update",
            TableData: temp,
            Custom: "Exercises",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.responseEdit = data;
            let exercise = {};
            if (!this.exerciseId && this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0) {
                exercise.Id = parseInt(this.responseEdit.Status);
                this.responseEdit.Status = "Record inserted successfully.";
            }
            else if (this.exerciseId && this.responseEdit.Name == "ok") {
                this.responseEdit.Status = "Record updated successfully.";
            }
            let snackBarRef = this._snackBar.open(this.responseEdit.Status, 'Go to Exercises', {
                duration: 3000, panelClass: [this.responseEdit.Name]
            });
            if (this.responseEdit.Name == "ok") {
                if (!this.exerciseId)
                    this.exerciseId = exercise.Id.toString();
                window.localStorage.setItem("ExerciseId", this.responseEdit.Status);
                this.exerciseId = this.responseEdit.Status;
                this._eventEmitter.setExercise(exercise);
                this.responseEdit.Status = "Record inserted successfully.";
                snackBarRef.onAction().subscribe(() => this.router.navigate(['view-exercise']));
            }
            this.getInit();
            //this.router.navigate(['Exercises']);
            //console.log("Exercises onSubmit | edit: ", this.editForm.value);
        });
    }
    getInputMaxFileSize(input) {
        this.maxFileSize = this.formatBytes(input.path[0].value);
    }
    formatBytes(bytes, decimal = 2) {
        if (bytes < 10)
            return bytes + " Bytes";
        if (0 === bytes)
            return "0 Bytes";
        const c = 0 > decimal ? 0 : decimal, d = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
    }
    numberFormat(number) {
        if (number.toString().length < 2)
            number = "0" + number;
        return number;
    }
};
ExercisesEditComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
ExercisesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exercises-app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-edit/exercises-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-edit.component.css */ "./src/app/exercises/exercises-edit/exercises-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], ExercisesEditComponent);



/***/ }),

/***/ "./src/app/exercises/exercises-files/exercises-files.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/exercises/exercises-files/exercises-files.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n}\n.mat-column-Name {\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n}\n.mat-column-Size {\n  -webkit-box-flex: 0;\n          flex: 0 0 30%;\n}\n.mat-column-Id {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n/deep/ .mat-sort-header-arrow {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n.user-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n.card-header span {\n  font-size: 22px;\n}\n.Notexpired {\n  color: #28a745;\n}\n.expired {\n  color: #9d1e15;\n}\n.expired, .Notexpired {\n  font-size: 10px;\n}\nbutton {\n  margin-left: 5px;\n}\n.mat-progress-bar{\n  height: 20px;\n}\n::ng-deep .mat-progress-bar-buffer {\n  background: #E4E8EB;\n}\n#checkBar {\n  border-radius: 2px;\n  width: 100px !important;\n}\n.icon {\n  width: 20px;\n  height: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1maWxlcy9leGVyY2lzZXMtZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBYTtVQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQWE7VUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBYTtVQUFiLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0dBQXNHO0FBQ3hHO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1maWxlcy9leGVyY2lzZXMtZmlsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hdC1jb2x1bW4tQWN0aW9uIHtcbiAgZmxleDogMCAwIDIwJTtcbn1cbi5tYXQtY29sdW1uLU5hbWUge1xuICBmbGV4OiAwIDAgNDAlO1xufVxuLm1hdC1jb2x1bW4tU2l6ZSB7XG4gIGZsZXg6IDAgMCAzMCU7XG59XG4ubWF0LWNvbHVtbi1JZCB7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG5cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKDJuKzEpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTk2LCAyMDEsIDAuMTYpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpub3QoOm50aC1jaGlsZCgybisxKSl7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG59XG4uY2FyZC1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLk5vdGV4cGlyZWQge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cbi5leHBpcmVkIHtcbiAgY29sb3I6ICM5ZDFlMTU7XG59XG4uZXhwaXJlZCwgLk5vdGV4cGlyZWQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFye1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kOiAjRTRFOEVCO1xufVxuXG4jY2hlY2tCYXIge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/exercises/exercises-files/exercises-files.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/exercises/exercises-files/exercises-files.component.ts ***!
  \************************************************************************/
/*! exports provided: ExercisesFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesFilesComponent", function() { return ExercisesFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sort.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let ExercisesFilesComponent = class ExercisesFilesComponent {
    constructor(host, formBuilder, router, _eventEmitter, _snackBar) {
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Name', 'Size', 'Action'];
        this.progress = { loaded: 0, total: 0 };
        this.response = {};
        this.exerciseFiles = {};
        this.files = [];
        this.load = 0;
    }
    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
        this.editForm = this.formBuilder.group({
            avatar: [null]
        });
        this.exerciseId = window.localStorage.getItem("ExerciseId");
        if (this.exerciseId)
            this.getFiles();
        //Getting value from child CodeComponent
        this._eventEmitter.exercise.subscribe(data => {
            if (data && data['Id']) {
                window.localStorage.setItem("ExerciseId", data['Id'].toString());
                this.exerciseId = data['Id'].toString();
                this.getFiles();
            }
        });
    }
    setResponse(message, action) {
        //console.log(message, action);
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
    download(file) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    }
    delete(file) {
        let filter = [];
        filter.push({ Name: "Id", Value: file.Id.toString() });
        let requestDB = {
            Operation: "drop",
            TableData: null,
            Custom: "exercises-files",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.response = data;
            this.setResponse(this.response['Status'], this.response['Name']);
            this.getFiles();
        });
    }
    uploadFile() {
        this.response = {};
        var filedata = this.el.nativeElement.files[0];
        let param = {};
        param.Name = "Exercise";
        param.Value = this.exerciseId;
        this.host.uploadFileData(filedata, param)
            .subscribe((data) => {
            if (data.type == 1 && data.loaded && data.total) {
                this.progress.loaded = data.loaded;
                this.progress.total = data.total;
            }
            else if (data.body) {
                //console.log("Data Uploaded");
                //console.log(data.body);
                this.response = data.body;
                if (data['body']['Name'] == "ok")
                    this.response['Status'] = "File inserted successfully.";
                this.setResponse(this.response['Status'], data['body']['Name']);
                this.inputFile.nativeElement.value = "";
                this.getFiles();
                this.load = 0;
            }
        }, error => console.log(error));
    }
    formatBytes(bytes, decimal = 2) {
        if (0 === bytes)
            return "0 Bytes";
        const c = 0 > decimal ? 0 : decimal, d = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
    }
    getFiles() {
        let filter = [];
        filter.push({ Name: "Id", Value: this.exerciseId });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.files = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.files);
            if (this.files)
                this.dataSource.sort = this.sort;
            this.load = 1;
            this.progress = { loaded: 0, total: 0 };
        });
    }
};
ExercisesFilesComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExercisesFilesComponent.prototype, "inputFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], ExercisesFilesComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectfile'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExercisesFilesComponent.prototype, "el", void 0);
ExercisesFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exercises-app-files',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-files.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-files/exercises-files.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-files.component.css */ "./src/app/exercises/exercises-files/exercises-files.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], ExercisesFilesComponent);



/***/ }),

/***/ "./src/app/exercises/exercises-groups/exercises-groups.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/exercises/exercises-groups/exercises-groups.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-input-element {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: slategray;\n}\n.mat-form-field-underline {\n  background-color: slategray;\n}\n.mat-form-field-ripple {\n  background-color: slategray;\n}\n.mat-form-field-required-marker {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: #ff884d;\n}\n.mat-form-field-ripple {\n  background-color: #ff884d;\n}\n.mat-form-field-required-marker {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #007bff;\n}\n.mat-form-field-label {\n  color: #007bff;\n}\n.mat-form-field-required-marker {\n  color: #007bff;\n}\n.mat-form-field-ripple {\n  background-color: #007bff;\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n::-webkit-input-placeholder { /* Edge */\n  color: gray;\n}\n::-moz-placeholder {\n  color: gray;\n}\n::-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1ncm91cHMvZXhlcmNpc2VzLWdyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUEsOEJBQThCLFNBQVM7RUFDckMsV0FBVztBQUNiO0FBTUE7RUFDRSxXQUFXO0FBQ2I7QUFGQTtFQUNFLFdBQVc7QUFDYjtBQUZBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy1ncm91cHMvZXhlcmNpc2VzLWdyb3Vwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBzbGF0ZWdyYXk7XG59XG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xufVxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogc2xhdGVncmF5O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogI2ZmODg0ZDtcbn1cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6ICNmZjg4NGQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xuICBjb2xvcjogZ3JheTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiBncmF5O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/exercises/exercises-groups/exercises-groups.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/exercises/exercises-groups/exercises-groups.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExercisesGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesGroupsComponent", function() { return ExercisesGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/keycodes.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/autocomplete.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");










let ExercisesGroupsComponent = class ExercisesGroupsComponent {
    constructor(host, formBuilder, router, _eventEmitter, _snackBar) {
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.response = {};
        this.groups = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.members = [];
        this.membersDrop = [];
        this.load = 0;
        this.filteredMembers = this.memberCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((member) => member ? this._filter(member) : this.groups.slice()));
    }
    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdExercise: [''],
            IdGroup: [''],
            Name: [''],
        });
        this.exerciseId = window.localStorage.getItem("ExerciseId");
        if (this.exerciseId)
            this.getMembers();
        this.getGroups();
        //Getting value from child CodeComponent
        this._eventEmitter.exercise.subscribe(data => {
            if (data && data['Id']) {
                window.localStorage.setItem("ExerciseId", data['Id'].toString());
                this.exerciseId = data['Id'].toString();
                this.getMembers();
            }
        });
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
    get f() {
        return this.editForm.controls;
    }
    add(member) {
        // Add our member
        if (member && member.Id != 'undefined') {
            this.members.push(member);
            this.memberCtrl.setValue(null);
        }
    }
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    remove(group) {
        const index = this.members.indexOf(group);
        if (index >= 0) {
            this.membersDrop.push(this.members[index]);
            this.members.splice(index, 1);
        }
        let filter = [];
        filter.push({ Name: "IdExercise", Value: this.exerciseId });
        filter.push({ Name: "IdGroup", Value: group.Id.toString() });
        let requestDB = {
            Operation: "drop",
            TableData: null,
            Custom: "exercises-groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            //console.log(data, requestDB);
            this.response = data;
            this.response.Name = "ok";
            this.response.Status = "Record updated successfully.";
            this.setResponse(this.response['Status'], this.response['Name']);
        });
    }
    selected(event) {
        this.members.push(event.option.value);
        this.memberInput.nativeElement.value = '';
        this.memberCtrl.setValue(null);
        let filter = [];
        let requestDB = {
            Operation: "update",
            TableData: { IdGroup: event.option.value['Id'], IdExercise: this.exerciseId },
            Custom: "ExerciseGroups",
            Filter: filter,
        };
        let res;
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data) {
                res = data;
                if (res.Name == "ok" && parseInt(res.Status) > 0) {
                    this.response.Name = "ok";
                    this.response.Status = "Record updated successfully.";
                    //console.log(res);
                }
                this.setResponse(this.response['Status'], this.response['Name']);
                //this.getMembers();
            }
        });
    }
    _filter(value) {
        let usersFiltered = [];
        if (value != "" && typeof (value) != 'object') {
            this.groups.forEach(function (i) {
                if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
                    usersFiltered.push(i);
                }
            });
            return usersFiltered;
        }
    }
    getMembers() {
        let filter = [];
        filter.push({ Name: "IdExercise", Value: this.exerciseId });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data)
                this.members = data;
            //console.log("GroupsMembers | getMembers ", this.members, request);
        });
    }
    getGroups() {
        let filter = [];
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.groups = data;
            this.load = 1;
            //console.log("groups | dbList: ", data);
        });
    }
};
ExercisesGroupsComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExercisesGroupsComponent.prototype, "memberInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
], ExercisesGroupsComponent.prototype, "matAutocomplete", void 0);
ExercisesGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exercises-app-groups',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises-groups/exercises-groups.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-groups.component.css */ "./src/app/exercises/exercises-groups/exercises-groups.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
], ExercisesGroupsComponent);



/***/ }),

/***/ "./src/app/exercises/exercises.component.css":
/*!***************************************************!*\
  !*** ./src/app/exercises/exercises.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n    background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n    color: #000;\n}\n.mat-header-cell {\n    color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n    font-size: 14px;\n    font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n    background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n    color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n    color: rgba(0,0,0,.7) !important;\n    font-weight: 700 !important;\n}\n.mat-form-field {\n    font-size: 14px;\n    margin-left: 10px;\n}\n.mat-column-Action {\n    -webkit-box-flex: 0;\n            flex: 0 0 25%;\n}\n.mat-column-Title {\n    -webkit-box-flex: 0;\n            flex: 0 0 20%;\n}\n.mat-column-ExecTime {\n    -webkit-box-flex: 0;\n            flex: 0 0 10%;\n}\n.mat-column-Id {\n    -webkit-box-flex: 0;\n            flex: 0 0 6%;\n}\n.mat-column-MaxSubmissions {\n    -webkit-box-flex: 0;\n            flex: 0 0 8%;\n}\n.Date, .mat-column-CheckCount {\n    -webkit-box-flex: 0;\n            flex: 0 0 15%;\n}\n/deep/ .mat-elevation-z8 {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n    width: 100%;\n    background-color: #fcfcfc;\n    border: 0;\n    border-bottom: 2px solid lightgrey;\n    padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n    background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n    color: #000 !important;\n}\n/deep/ .mat-sort-header-arrow {\n    color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n    background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n    background-color:#ffffff !important;\n}\n.user-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin: auto;\n}\n.Notexpired {\n    color: #28a745;\n}\n.expired {\n    color: #9d1e15;\n}\n.expired, .Notexpired {\n    font-size: 10px;\n}\nbutton {\n    margin-left: 5px;\n}\n.mat-progress-bar{\n    height: 20px;\n}\n::ng-deep .mat-progress-bar-buffer {\n    background: #E4E8EB;\n}\n#checkBar {\n    border-radius: 2px;\n    width: 100px !important;\n}\n.icon {\n    width: 20px;\n    height: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlcmNpc2VzL2V4ZXJjaXNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQywyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFhO1lBQWIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQWE7WUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBYTtZQUFiLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFZO1lBQVosWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQVk7WUFBWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBYTtZQUFiLGFBQWE7QUFDakI7QUFDQTtJQUNJLHNHQUFzRztBQUMxRztBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9leGVyY2lzZXMvZXhlcmNpc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsLjEyKTtcbn1cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LWhlYWRlci1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNykgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYXQtY29sdW1uLUFjdGlvbiB7XG4gICAgZmxleDogMCAwIDI1JTtcbn1cbi5tYXQtY29sdW1uLVRpdGxlIHtcbiAgICBmbGV4OiAwIDAgMjAlO1xufVxuLm1hdC1jb2x1bW4tRXhlY1RpbWUge1xuICAgIGZsZXg6IDAgMCAxMCU7XG59XG4ubWF0LWNvbHVtbi1JZCB7XG4gICAgZmxleDogMCAwIDYlO1xufVxuLm1hdC1jb2x1bW4tTWF4U3VibWlzc2lvbnMge1xuICAgIGZsZXg6IDAgMCA4JTtcbn1cbi5EYXRlLCAubWF0LWNvbHVtbi1DaGVja0NvdW50IHtcbiAgICBmbGV4OiAwIDAgMTUlO1xufVxuL2RlZXAvIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi9kZWVwLyAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKDJuKzEpe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTYsIDIwMSwgMC4xNikgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om5vdCg6bnRoLWNoaWxkKDJuKzEpKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uTm90ZXhwaXJlZCB7XG4gICAgY29sb3I6ICMyOGE3NDU7XG59XG4uZXhwaXJlZCB7XG4gICAgY29sb3I6ICM5ZDFlMTU7XG59XG4uZXhwaXJlZCwgLk5vdGV4cGlyZWQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWF0LXByb2dyZXNzLWJhcntcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQ6ICNFNEU4RUI7XG59XG5cbiNjaGVja0JhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/exercises/exercises.component.ts":
/*!**************************************************!*\
  !*** ./src/app/exercises/exercises.component.ts ***!
  \**************************************************/
/*! exports provided: ExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesComponent", function() { return ExercisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let ExercisesComponent = class ExercisesComponent {
    constructor(host, router, _eventEmitter, dialog, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.cAdmin = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers', 'Action'];
        this.cUser = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers'];
        this.exercises = [];
        this.response = {};
        this.userSession = {};
        this.load = 0;
    }
    ngAfterViewInit() {
        this.getExercises();
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        window.localStorage.removeItem("TryACode");
        if (this.userSession.Module == 'Admin')
            this.displayedColumns = this.cAdmin;
        else
            this.displayedColumns = this.cUser;
    }
    addExercise() {
        window.localStorage.removeItem("ExerciseId");
        this.router.navigate(['add-exercise']);
    }
    ;
    viewAnswer(exercise, IsExpired) {
        window.localStorage.setItem("ExerciseId", exercise.Id.toString());
        this.router.navigate(['view-answer']);
    }
    ;
    editExercise(exercise) {
        window.localStorage.setItem("ExerciseId", exercise.Id.toString());
        this.router.navigate(['edit-exercise']);
    }
    ;
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    deleteExercise(exercise) {
        let ret = this.openModal('Delete Exercise: ' + exercise.Title, 'Confirm to delete the exercise?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(data => {
            if (data['button'] == 'YES') {
                let filter = [];
                filter.push({ Name: "Id", Value: exercise.Id.toString() });
                let requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "exercises",
                    Filter: filter,
                };
                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                    this.response = data;
                    this.setResponse(this.response['Status'], this.response['Name']);
                    if (this.response['Name'] == "ok") {
                        this.getExercises();
                    }
                });
            }
        });
    }
    showList(list) {
        let ret = this.openModal('Code Analysis by Clang-Tidy', list, 'Close', '', '');
    }
    getExercises() {
        let filter = [];
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises",
            Filter: filter,
        };
        if (this.userSession.Module == "User") {
            filter.push({ Name: "User", Value: this.userSession.Id });
            requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "exercises-user",
                Filter: filter,
            };
        }
        let gTemp = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.exercises = data;
            if (this.exercises) {
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.exercises);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                delete this.dataSource;
            }
            this.load = 1;
            //console.log("Exercises ==> Module | dbList | this.request ",
            //    this.userSession.Module, requestDB, this.exercises);
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
ExercisesComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
], ExercisesComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], ExercisesComponent.prototype, "sort", void 0);
ExercisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exercises',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exercises/exercises.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises.component.css */ "./src/app/exercises/exercises.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], ExercisesComponent);



/***/ }),

/***/ "./src/app/groups/groups-edit/groups-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/groups/groups-edit/groups-edit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMtZWRpdC9ncm91cHMtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/groups/groups-edit/groups-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/groups/groups-edit/groups-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: GroupsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsEditComponent", function() { return GroupsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");







let GroupsEditComponent = class GroupsEditComponent {
    constructor(formBuilder, host, router, _eventEmitter, _snackBar) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.response = {};
    }
    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
        this.registerForm = this.formBuilder.group({
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                ]
            ],
            Description: ['', []],
            Id: ['', []],
        }, {});
        this.groupId = window.localStorage.getItem("editGroupId");
        if (this.groupId)
            this.getGroups(this.groupId);
    }
    get fe() { return this.registerForm.controls; }
    getGroups(groupId) {
        let filter = [];
        filter.push({ Name: "Id", Value: groupId });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "groups-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            delete data[0]['mCount'];
            this.registerForm.setValue(data[0]);
            //console.log("Groups Edit | dbList: ", data, requestDB);
        });
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, 'Go to Groups', {
            duration: 3000, panelClass: [action]
        });
        snackBarRef.onAction().subscribe(() => this.router.navigate(['view-group']));
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        let filter = [];
        let requestDB = {
            Operation: "update",
            TableData: this.registerForm.value,
            Custom: "Groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.response = data;
            if (this.response.Name == "ok" && !this.groupId)
                this.response.Status = "Record inserted successfully.";
            if (this.response.Name == "ok" && this.groupId)
                this.response.Status = "Record updated successfully.";
            this.setResponse(this.response['Status'], this.response['Name']);
            //this.router.navigate(['Groups']);
            //console.log("Groups onSubmit | edit: ", this.editForm.value);
        });
    }
};
GroupsEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
GroupsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'groups-app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups-edit/groups-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups-edit.component.css */ "./src/app/groups/groups-edit/groups-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], GroupsEditComponent);



/***/ }),

/***/ "./src/app/groups/groups-members/groups-members.component.css":
/*!********************************************************************!*\
  !*** ./src/app/groups/groups-members/groups-members.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-input-element {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: slategray;\n}\n.mat-form-field-underline {\n  background-color: slategray;\n}\n.mat-form-field-ripple {\n  background-color: slategray;\n}\n.mat-form-field-required-marker {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: #ff884d;\n}\n.mat-form-field-ripple {\n  background-color: #ff884d;\n}\n.mat-form-field-required-marker {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #007bff;\n}\n.mat-form-field-label {\n  color: #007bff;\n}\n.mat-form-field-required-marker {\n  color: #007bff;\n}\n.mat-form-field-ripple {\n  background-color: #007bff;\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n::-webkit-input-placeholder { /* Edge */\n  color: gray;\n}\n::-moz-placeholder {\n  color: gray;\n}\n::-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy1tZW1iZXJzL2dyb3Vwcy1tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFFQSw4QkFBOEIsU0FBUztFQUNyQyxXQUFXO0FBQ2I7QUFNQTtFQUNFLFdBQVc7QUFDYjtBQUZBO0VBQ0UsV0FBVztBQUNiO0FBRkE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXBzLW1lbWJlcnMvZ3JvdXBzLW1lbWJlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiBzbGF0ZWdyYXk7XG59XG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogc2xhdGVncmF5O1xufVxuLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XG59XG4ubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6IHNsYXRlZ3JheTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICNmZjg4NGQ7XG59XG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODg0ZDtcbn1cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogI2ZmODg0ZDtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiAjZmY4ODRkO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cbiAgY29sb3I6IGdyYXk7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogZ3JheTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/groups/groups-members/groups-members.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/groups/groups-members/groups-members.component.ts ***!
  \*******************************************************************/
/*! exports provided: GroupsMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsMembersComponent", function() { return GroupsMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/keycodes.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/autocomplete.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let GroupsMembersComponent = class GroupsMembersComponent {
    constructor(host, formBuilder, router, _snackBar) {
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._snackBar = _snackBar;
        this.response = {};
        this.users = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.members = [];
        this.membersDrop = [];
        this.filteredMembers = this.memberCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((member) => member ? this._filter(member) : this.users.slice()));
    }
    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            IdGroup: [''],
            Name: [''],
        });
        this.IdGroup = parseInt(window.localStorage.getItem("editGroupId"));
        this.groupName = window.localStorage.getItem("groupName");
        this.getUsers();
        this.getMembers();
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
    get f() {
        return this.editForm.controls;
    }
    add(member) {
        // Add our member
        if (member && member.Id != 'undefined') {
            this.members.push(member);
            this.memberCtrl.setValue(null);
        }
    }
    remove(member) {
        const index = this.members.indexOf(member);
        if (index >= 0) {
            this.membersDrop.push(this.members[index]);
            this.members.splice(index, 1);
        }
    }
    selected(event) {
        this.members.push(event.option.value);
        this.memberInput.nativeElement.value = '';
        this.memberCtrl.setValue(null);
    }
    _filter(value) {
        let usersFiltered = [];
        if (value != "" && typeof (value) != 'object') {
            this.users.forEach(function (i) {
                if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
                    usersFiltered.push(i);
                }
            });
            return usersFiltered;
        }
    }
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, 'Go to Groups', {
            duration: 3000, panelClass: [action]
        });
        snackBarRef.onAction().subscribe(() => this.router.navigate(['view-group']));
    }
    onSubmit() {
        this.deleteMembers();
        let temp = this.editForm;
        delete temp.controls['Name'];
        delete temp.controls['Id'];
        for (let index = 0; index < this.members.length; ++index) {
            temp.controls['IdUser'].setValue(this.members[index].Id);
            temp.controls['IdGroup'].setValue(this.IdGroup);
            let filter = [];
            let requestDB = {
                Operation: "update",
                TableData: temp.value,
                Custom: "Members",
                Filter: filter,
            };
            let res;
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(data => {
                if (data) {
                    res = data;
                    if (res.Name == "ok" && parseInt(res.Status) > 0) {
                        this.response.Name = "ok";
                        this.response.Status = "Record updated successfully.";
                        //console.log(res);
                        this.setResponse(this.response['Status'], this.response['Name']);
                    }
                    this.getMembers();
                }
            });
        }
    }
    deleteMembers() {
        for (let index = 0; index < this.membersDrop.length; ++index) {
            let filter = [];
            filter.push({ Name: "IdGroup", Value: this.IdGroup.toString() });
            filter.push({ Name: "IdUser", Value: this.membersDrop[index].Id.toString() });
            let requestDB = {
                Operation: "drop",
                TableData: null,
                Custom: "members",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(data => {
                this.response = data;
                this.response.Name = "ok";
                this.response.Status = "Record updated successfully.";
                this.setResponse(this.response['Status'], this.response['Name']);
            });
        }
    }
    getMembers() {
        let filter = [];
        filter.push({ Name: "IdGroup", Value: this.IdGroup.toString() });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "members",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data)
                this.members = data;
            //console.log("GroupsMembers | getMembers ", this.members, request);
        });
    }
    getUsers() {
        let filter = [];
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.users = data;
            //console.log("Users | dbList: ", data);
        });
    }
};
GroupsMembersComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GroupsMembersComponent.prototype, "memberInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
], GroupsMembersComponent.prototype, "matAutocomplete", void 0);
GroupsMembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'groups-app-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups-members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups-members/groups-members.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups-members.component.css */ "./src/app/groups/groups-members/groups-members.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], GroupsMembersComponent);



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  -webkit-box-flex: 0;\n          flex: 0 0 40%;\n}\n.mat-column-Id {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.mat-column-Nome {\n  -webkit-box-flex: 0;\n          flex: 0 0 50%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n.user-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\nbutton {\n  margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBYTtVQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQWE7VUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNHQUFzRztBQUN4RztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hdC1jb2x1bW4tQWN0aW9uIHtcbiAgZmxleDogMCAwIDQwJTtcbn1cbi5tYXQtY29sdW1uLUlkIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5tYXQtY29sdW1uLU5vbWUge1xuICBmbGV4OiAwIDAgNTAlO1xufVxuL2RlZXAvIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKDJuKzEpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTk2LCAyMDEsIDAuMTYpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpub3QoOm50aC1jaGlsZCgybisxKSl7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLnVzZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let GroupsComponent = class GroupsComponent {
    constructor(host, router, _eventEmitter, dialog, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Name', 'Action'];
        this.groups = [];
        this.response = {};
        this.load = 0;
    }
    ngAfterViewInit() {
        this.getGroups();
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
    }
    addGroup() {
        window.localStorage.removeItem("editGroupId");
        this.router.navigate(['add-group']);
    }
    ;
    addMembers(group) {
        window.localStorage.setItem("editGroupId", group.Id.toString());
        window.localStorage.setItem("groupName", group.Name);
        this.router.navigate(['add-members']);
    }
    ;
    editGroup(group) {
        window.localStorage.setItem("editGroupId", group.Id.toString());
        this.router.navigate(['edit-group']);
    }
    ;
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    deleteGroup(group) {
        let ret = this.openModal('Delete Group: ' + group.Name, 'Confirm to delete the group?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(data => {
            if (data['button'] == 'YES') {
                let filter = [];
                filter.push({ Name: "Id", Value: group.Id.toString() });
                let requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "groups",
                    Filter: filter,
                };
                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                    this.response = data;
                    this.setResponse(this.response['Status'], this.response['Name']);
                    if (this.response['Name'] == "ok") {
                        this.getGroups();
                        //console.log("Groups | delete: ", this.response);
                    }
                });
            }
        });
    }
    getGroups() {
        let filter = [];
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "groups",
            Filter: filter,
        };
        let gTemp = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.groups = data;
            if (this.groups) {
                //console.log("Groups | dbList: ", data);
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.groups);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                delete this.dataSource;
            }
            this.load = 1;
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
GroupsComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
], GroupsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], GroupsComponent.prototype, "sort", void 0);
GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], GroupsComponent);



/***/ }),

/***/ "./src/app/host-credentials/host-credentials.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/host-credentials/host-credentials.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  float: left;\n  margin-left: 10px;\n}\n\n.loginMain {\n  font-size: 14px;\n  width: 150px;\n}\n\n.session {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC1jcmVkZW50aWFscy9ob3N0LWNyZWRlbnRpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob3N0LWNyZWRlbnRpYWxzL2hvc3QtY3JlZGVudGlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luTWFpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnNlc3Npb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/host-credentials/host-credentials.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/host-credentials/host-credentials.component.ts ***!
  \****************************************************************/
/*! exports provided: HostCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostCredentialsComponent", function() { return HostCredentialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm2015/ng-idle-core.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm2015/ng-idle-keepalive.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");










let HostCredentialsComponent = class HostCredentialsComponent {
    constructor(host, _eventEmitter, router, idle, keepalive, dialog, _snackBar) {
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.router = router;
        this.idle = idle;
        this.keepalive = keepalive;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.idleState = '30 m';
        this.lastPing = null;
        this.submitted = false;
        this.response = {};
        this.userSession = {};
        idle.setIdle(1800);
        idle.setTimeout(60);
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_INTERRUPTSOURCES"]);
        idle.onIdleEnd.subscribe(() => {
            this.idleState = 'No longer idle.';
            this.reset();
        });
        idle.onTimeout.subscribe(() => {
            this.logout();
            this.idleState = 'Timed out!';
        });
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'You\'ve gone idle!';
            //console.log(this.idleState);
        });
        idle.onTimeoutWarning.subscribe((countdown) => {
            this.idleState = countdown + ' seconds!';
        });
        keepalive.interval(30);
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.reset();
    }
    reset() {
        this.idle.watch();
        this.idleState = '30 m';
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        //Getting value from child HostCredentials
        this._eventEmitter.loginChange.subscribe(data => {
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
            if (data['Name'] == "error") {
                this.host.killSessionID();
                this.userSession = {};
                this.registerForm.reset();
                this.router.navigate(['welcome']);
            }
            if (data['Name'] == "stopSession") {
                this.idleState = "stopped";
                this.idle.stop();
            }
            if (data['Name'] == "startSession") {
                this.reset();
            }
            this.userSession = this.host.getSessionID();
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    // LOGIN
    setRoute(val) {
        this.router.navigate([val]);
    }
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    addUser() {
        window.localStorage.removeItem("editUserId");
        this.host.setSessionID('', 'SelfRegistration', '||NPZ8fvABP5pKSwU3');
        this.router.navigate(['add-user']);
    }
    ;
    logout() {
        let params = [];
        params.push({ Name: "", Value: this.userSession.Owner });
        let request = {
            Request: "logout",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            this.response = data;
            this.setResponse(this.response['Status'], this.response['Name']);
            if (this.response['Name'] == "ok") {
                this.host.killSessionID();
                this.userSession = {};
                this._eventEmitter.setLoginChange({ Name: "stopSession", Status: "" });
                this.router.navigate(['welcome']);
            }
        });
    }
    getValidateSession() {
        let Auth = this.host.getSessionID();
        this.host.setSessionID(Auth.Owner, Auth.Module, Auth.Id + "|" + Auth.Password + "|" + Auth.Token);
        //console.log("getValidateSession");
    }
    // Let's validate session after 60 seconds
    managerStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            while (true) {
                yield this.delay(60000);
                this.getValidateSession();
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
HostCredentialsComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["Idle"] },
    { type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HostCredentialsComponent.prototype, "hostInfo", void 0);
HostCredentialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-credentials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host-credentials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-credentials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host-credentials.component.css */ "./src/app/host-credentials/host-credentials.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["Idle"],
        _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
], HostCredentialsComponent);



/***/ }),

/***/ "./src/app/host-credentials/host-login/host-login.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/host-credentials/host-login/host-login.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginMain {\n  display: -webkit-box;\n  display: flex; flex-wrap: wrap; align-content: center;\n}\n\n.PrimaryNav a, .PrimaryNav a.active, .PrimaryNav .nolink {\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.Button--redOutline {\n  color: #fff;\n  background-color: transparent;\n  text-transform: uppercase;\n  border: 2px solid #e22866;\n}\n\n.Button--red, .Body .node-application #FormWrap .okta-form input[type=\"submit\"], .Body .node-application #FormWrap .okta-form textarea[type=\"submit\"], .Body .node-application #FormWrap .okta-form select[type=\"submit\"], .Body .block-marketo #FormWrap .okta-form input[type=\"submit\"], .Body .block-marketo #FormWrap .okta-form textarea[type=\"submit\"], .Body .block-marketo #FormWrap .okta-form select[type=\"submit\"] {\n  color: #fff;\n  background-color: #e22866;\n  text-transform: uppercase;\n}\n\n.host{\n  display: -webkit-box;\n  display: flex;\n}\n\n.name {\n  width: 180px;\n}\n\n.exit {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.addUser {\n  width: 30px;\n  margin-top: 10px;\n}\n\ninput {\n  margin-bottom: 0.2em;\n}\n\n.card-body {\n  padding: 0.5rem;\n}\n\n.form-group {\n  margin-bottom: 0rem;\n}\n\n.col-5 {\n  max-width: 20%;\n}\n\n.userStatus {\n  padding: 0.5em;\n}\n\n.userStatus span {\n  display: block;\n  font-size: 12px;\n}\n\n.session {\n  font-size: 12px;\n}\n\n.ok {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.info {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.error {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC1jcmVkZW50aWFscy9ob3N0LWxvZ2luL2hvc3QtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYSxFQUFFLGVBQWUsRUFBRSxxQkFBcUI7QUFDdkQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQVk7VUFBWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9zdC1jcmVkZW50aWFscy9ob3N0LWxvZ2luL2hvc3QtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbk1haW4ge1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLlByaW1hcnlOYXYgYSwgLlByaW1hcnlOYXYgYS5hY3RpdmUsIC5QcmltYXJ5TmF2IC5ub2xpbmsge1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5CdXR0b24tLXJlZE91dGxpbmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjI4NjY7XG59XG4uQnV0dG9uLS1yZWQsIC5Cb2R5IC5ub2RlLWFwcGxpY2F0aW9uICNGb3JtV3JhcCAub2t0YS1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIC5Cb2R5IC5ub2RlLWFwcGxpY2F0aW9uICNGb3JtV3JhcCAub2t0YS1mb3JtIHRleHRhcmVhW3R5cGU9XCJzdWJtaXRcIl0sIC5Cb2R5IC5ub2RlLWFwcGxpY2F0aW9uICNGb3JtV3JhcCAub2t0YS1mb3JtIHNlbGVjdFt0eXBlPVwic3VibWl0XCJdLCAuQm9keSAuYmxvY2stbWFya2V0byAjRm9ybVdyYXAgLm9rdGEtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLCAuQm9keSAuYmxvY2stbWFya2V0byAjRm9ybVdyYXAgLm9rdGEtZm9ybSB0ZXh0YXJlYVt0eXBlPVwic3VibWl0XCJdLCAuQm9keSAuYmxvY2stbWFya2V0byAjRm9ybVdyYXAgLm9rdGEtZm9ybSBzZWxlY3RbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyODY2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaG9zdHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hbWUge1xuICB3aWR0aDogMTgwcHg7XG59XG5cbi5leGl0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uYWRkVXNlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5jb2wtNSB7XG4gIG1heC13aWR0aDogMjAlO1xufVxuXG4udXNlclN0YXR1cyB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4udXNlclN0YXR1cyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNlc3Npb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vayB7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6ICM4NTY0MDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/host-credentials/host-login/host-login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/host-credentials/host-login/host-login.component.ts ***!
  \*********************************************************************/
/*! exports provided: HostLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostLoginComponent", function() { return HostLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let HostLoginComponent = class HostLoginComponent {
    constructor(formBuilder, host, _eventEmitter, router, dialog, _snackBar) {
        this.formBuilder = formBuilder;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.userSession = {};
        this.hostInfo = {};
        this.response = {};
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            owner: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                ]
            ],
            password: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                ]
            ],
        }, {});
        this.userSession = this.host.getSessionID();
        this._eventEmitter.hostInfo.subscribe(data => {
            this.hostInfo = data;
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    checkChangePass() {
        let filter = [];
        filter.push({ Name: "Email", Value: this.userSession.Owner });
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "host-credentials",
            Filter: filter,
        };
        window.localStorage.setItem("ForceChangePass", "0");
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            if (data && data[0]['ForceChangePass'] == "1") {
                window.localStorage.setItem("ForceChangePass", "1");
                this.router.navigate(['edit-user']);
                //console.log(data, window.localStorage.getItem("ForceChangePass"));
            }
        });
    }
    ;
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.setResponse(this.response['Status'], this.response['Name']);
        let hostInfoTemp = this.hostInfo;
        hostInfoTemp['Owner'] = this.registerForm.get('owner').value;
        hostInfoTemp['Password'] = this.registerForm.get('password').value;
        this.host.request(hostInfoTemp, 'setLogin')
            .subscribe(data => {
            this.response = data;
            if (this.response['Name'] == "Admin" || this.response['Name'] == "User") {
                this.host.setSessionID(hostInfoTemp['Owner'], this.response['Name'], this.response['Status']);
                this.userSession = this.host.getSessionID();
                //console.log("App Host-Credential | userSession: ", data);
                this.setResponse("Login successfully!", "ok");
                // We will notify the root app about new login
                this._eventEmitter.setLoginChange({ Name: "startSession", Status: "" });
                this.checkChangePass();
                this.router.navigate(['welcome']);
            }
            else {
                this.setResponse(this.response['Status'], this.response['Name']);
                //this.registerForm.reset();
                //this.f['owner'].clearValidators();
                //this.f['owner'].setErrors({ 'generic': this.response['Status'] });
                return;
            }
        });
    }
    recoverPassword() {
        this.response = {};
        let input = [];
        input.push({ Model: "", Name: "email", Type: "text", Title: "email account" });
        let ret = this.openModal('Recover Password', 'Please enter your login email. \n' +
            'If the account exists in our database, we will send you an email for password recovery.', 'Yes', 'No', input);
        ret.afterClosed().subscribe(data => {
            if (data && data['button'] == 'YES') {
                if (!data['input'][0]['Model'] ||
                    data['input'][0]['Model'] == "") {
                    this.response['Name'] = "error";
                    this.response['Status'] = "Please, type a email account...";
                    return;
                }
                let email;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    email = data['input'][0]['Model'];
                let params = [];
                params.push({ Name: "email", Value: email });
                let request = {
                    Request: "recoverPassword",
                    Param: params,
                };
                this.setResponse("Sending request for password recovery...", "info");
                this.host.request(request, 'simpleRequest')
                    .subscribe(data => {
                    this.response = data;
                    //console.log('Host-Credentials: data ', data);
                    this.setResponse(this.response['Status'], this.response['Name']);
                });
            }
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
HostLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
HostLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-login/host-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host-login.component.css */ "./src/app/host-credentials/host-login/host-login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], HostLoginComponent);



/***/ }),

/***/ "./src/app/host-status/host-status.component.css":
/*!*******************************************************!*\
  !*** ./src/app/host-status/host-status.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.icon {\n  width: 60px;\n  height: 60px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC1zdGF0dXMvaG9zdC1zdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvc3Qtc3RhdHVzL2hvc3Qtc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFncyB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtaW4td2lkdGg6IDIwdnc7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM1cHgpO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/host-status/host-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/host-status/host-status.component.ts ***!
  \******************************************************/
/*! exports provided: HostStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostStatusComponent", function() { return HostStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HostStatusComponent = class HostStatusComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HostStatusComponent.prototype, "hostInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostConnection'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HostStatusComponent.prototype, "hostConnection", void 0);
HostStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-status/host-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host-status.component.css */ "./src/app/host-status/host-status.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HostStatusComponent);



/***/ }),

/***/ "./src/app/module/module.component.css":
/*!*********************************************!*\
  !*** ./src/app/module/module.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.module {\n  padding: 0.5em;\n  margin-left: -20px;\n  display: inline-block;\n  line-height: 40px;\n}\n\n.divTable{\n  display: table;\n}\n\n.divTableRow {\n  display: table-row;\n}\n\n.divTableHeading {\n  background-color: #EEE;\n  display: table-header-group;\n}\n\n.divTableCell, .divTableHead {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.divTableHeading {\n  background-color: #EEE;\n  display: table-header-group;\n  font-weight: bold;\n}\n\n.divTableFoot {\n  background-color: #EEE;\n  display: table-footer-group;\n  font-weight: bold;\n}\n\n.divTableBody {\n  display: table-row-group;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlL21vZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlL21vZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhZ3Mge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWluLXdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzNXB4KTtcbn1cblxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5kaXZUYWJsZXtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uZGl2VGFibGVSb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG4uZGl2VGFibGVIZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xufVxuLmRpdlRhYmxlQ2VsbCwgLmRpdlRhYmxlSGVhZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGl2VGFibGVIZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXZUYWJsZUZvb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBkaXNwbGF5OiB0YWJsZS1mb290ZXItZ3JvdXA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRpdlRhYmxlQm9keSB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/module/module.component.ts":
/*!********************************************!*\
  !*** ./src/app/module/module.component.ts ***!
  \********************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");






let ModuleComponent = class ModuleComponent {
    constructor(router, host, _eventEmitter, _snackBar) {
        this.router = router;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.userSession = {};
        this.response = {};
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        //Getting value from HostCredentials
        this._eventEmitter.loginChange.subscribe(data => {
            this.userSession = this.host.getSessionID();
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', this.userSession);
        });
    }
    setRoute(val) {
        //Getting Credentials
        this.userSession = this.host.getSessionID();
        if (!this.userSession.Owner) {
            let snackBarRef = this._snackBar.open("Please, login first!", 'Login', {
                duration: 3000, panelClass: ['info']
            });
            snackBarRef.onAction().subscribe(() => this.router.navigate(['host-login']));
            this.router.navigate(['welcome']);
            return;
        }
        else {
            this.response = {};
        }
        this.router.navigate([val]);
    }
};
ModuleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
ModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-module',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./module.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/module/module.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./module.component.css */ "./src/app/module/module.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], ModuleComponent);



/***/ }),

/***/ "./src/app/operation-mode/operation-mode.component.css":
/*!*************************************************************!*\
  !*** ./src/app/operation-mode/operation-mode.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-button-toggle {\n  flex-wrap: wrap !important;\n  overflow-wrap: break-word !important;\n  border-radius: 4px;\n  margin-left: 3px;\n  margin-right:3px;\n  width: 80px;\n  height: 50px;\n  font-size: 14px;\n}\n\n.mat-button-toggle-checked {\n  background-color: #007bff;\n}\n\n.op-mode {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uLW1vZGUvb3BlcmF0aW9uLW1vZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0aW9uLW1vZGUvb3BlcmF0aW9uLW1vZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OjNweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbi5vcC1tb2RlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/operation-mode/operation-mode.component.ts":
/*!************************************************************!*\
  !*** ./src/app/operation-mode/operation-mode.component.ts ***!
  \************************************************************/
/*! exports provided: OperationModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationModeComponent", function() { return OperationModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");






let OperationModeComponent = class OperationModeComponent {
    constructor(host, dialog, _eventEmitter) {
        this.host = host;
        this.dialog = dialog;
        this._eventEmitter = _eventEmitter;
        this.clusters = [];
        this.response = {};
    }
    ngOnInit() { }
    setOpMode(mode) {
        if (mode == this.hostInfo.OpMode)
            return;
        let input = [];
        if (mode == 'MASTER') {
            input.push({ Model: "", Name: "clusterName", Type: "text", Title: "Cluster Name" });
            input.push({ Model: "", Name: "password", Type: "password", Title: "Password *(Optional)" });
        }
        let ret = this.openModal('Change Mode', 'Did you change the host operation mode to ' + mode + ', confirm the request?', 'Yes', 'No', input);
        ret.afterClosed().subscribe(data => {
            if (data && data['button'] == 'YES') {
                if (mode == 'MASTER' &&
                    (!data['input'][0]['Model'] ||
                        data['input'][0]['Model'] == "")) {
                    this.response['Name'] = "error";
                    this.response['Status'] = "Please, type a cluster name...";
                    return;
                }
                let cluster = {};
                cluster.Owner = this.host.getSessionID().Owner;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    cluster.Name = data['input'][0]['Model'];
                if (data['input'][1] && data['input'][1]['Model'] != "")
                    cluster.Password = data['input'][1]['Model'];
                let serviceOpMode = {
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
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
OperationModeComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OperationModeComponent.prototype, "hostInfo", void 0);
OperationModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operation-mode',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operation-mode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation-mode/operation-mode.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operation-mode.component.css */ "./src/app/operation-mode/operation-mode.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"]])
], OperationModeComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select {\n  max-width: 300px;\n}\n\n.description {\n  font-size: 12px;\n  display: block;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBzZWxlY3Qge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");






let SettingsComponent = class SettingsComponent {
    constructor(formBuilder, host, router, _eventEmitter) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.submitted = false;
        this.response = {};
        this.userSession = {};
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            PublicInterface: ['', []],
            BackendPort: ['', []],
            FrontendPort: ['', []],
            StartContainers: ['', []],
            MaxContainers: ['', []],
            OperationMode: ['', []],
            ClusterName: ['', []],
            ClusterPassword: ['', []],
            HostUser: ['', []],
            HostPassword: ['', []],
            SelfRegistration: ['', []],
            CodeExecTimeout: ['', []],
            Queue: ['', []],
            MaxConcurrency: ['', []],
            Debug: ['', []],
            Error: ['', []],
            SmtpServer: ['', []],
            SmtpPort: ['', []],
            SmtpUser: ['', []],
            SmtpPassword: ['', []],
        }, {});
        //Getting Credentials
        this.userSession = this.host.getSessionID();
        //Credentials
        if (this.host.getSessionID().Module != "Admin")
            this.router.navigate(['welcome']);
        this.getConfigs();
    }
    get fe() { return this.registerForm.controls; }
    getConfigs() {
        let params = [];
        let request = {
            Request: "settings",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
            //console.log("Settings | getConfigs: ", data);
            this.registerForm.setValue(data);
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.host.request(this.registerForm.value, 'setConfigs')
            .subscribe(data => {
            this.response = data;
            //console.log("Users onSubmit | edit: ", this.registerForm.value);
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-module',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/try-code/try-code.component.css":
/*!*************************************************!*\
  !*** ./src/app/try-code/try-code.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyeS1jb2RlL3RyeS1jb2RlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/try-code/try-code.component.ts":
/*!************************************************!*\
  !*** ./src/app/try-code/try-code.component.ts ***!
  \************************************************/
/*! exports provided: TryCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCodeComponent", function() { return TryCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let TryCodeComponent = class TryCodeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        window.localStorage.removeItem("AnswerId");
        window.localStorage.removeItem("ExerciseId");
        window.localStorage.setItem("TryACode", "1");
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
};
TryCodeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TryCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'try-code-module',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./try-code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/try-code/try-code.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./try-code.component.css */ "./src/app/try-code/try-code.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TryCodeComponent);



/***/ }),

/***/ "./src/app/users/users-edit/users-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/users-edit/users-edit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/users-edit/users-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-edit/users-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let UsersEditComponent = class UsersEditComponent {
    constructor(formBuilder, host, router, dialog, _eventEmitter, _snackBar) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this.dialog = dialog;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.response = {};
        this.userSession = {};
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                ]
            ],
            Password: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                ]
            ],
            CPassword: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                ]
            ],
            Email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]
            ],
            Module: ['User', []],
            ForceChangePass: ['0', []],
            TempChangePass: ['', []],
            Id: ['', []],
        }, { validator: this.checkPassword });
        //Getting Credentials
        this.userSession = this.host.getSessionID();
        this.ForceChangePass = window.localStorage.getItem("ForceChangePass");
        if (this.host.getSessionID().Module == "Admin") {
            this.userId = window.localStorage.getItem("editUserId");
            if (this.ForceChangePass == "1")
                this.userId = this.userSession.Id;
            if (this.userId)
                this.getUsers(this.userId);
        }
        //Credentials
        if (this.host.getSessionID().Module != "Admin" &&
            this.userSession.Id != "") {
            this.userId = this.userSession.Id;
            this.getUsers(this.userId);
        }
    }
    checkPassword(control) {
        if (control.get('Password').value != control.get('CPassword').value) {
            control.get('CPassword').setErrors({
                mismatch: true
            });
        }
        return false;
    }
    get fe() { return this.registerForm.controls; }
    getUsers(userId) {
        let filter = [];
        if (userId) {
            filter.push({ Name: 'Id', Value: userId });
            let requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "users-edit",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(data => {
                if (data) {
                    //console.log(data);
                    data[0]['CPassword'] = "";
                    if (this.ForceChangePass == "1")
                        data[0]['ForceChangePass'] = 0;
                    this.registerForm.setValue(data[0]);
                }
                this.fe['Password'].setValue('');
            });
        }
    }
    setRoute(val) {
        this.router.navigate([val]);
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        let temp = this.registerForm.value;
        delete temp['CPassword'];
        //if (this.ForceChangePass == "1")
        //  temp['ForceChangePass'] = "0";
        let filter = [];
        let requestDB = {
            Operation: "update",
            TableData: temp,
            Custom: "Users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.response = data;
            if (this.response.Name == "ok") {
                if (!this.userId)
                    this.response.Status = "Record inserted successfully.";
                else
                    this.response.Status = "Record updated successfully.";
            }
            let action, route = '';
            if (this.userSession.Module == 'Admin') {
                action = 'Go to Users';
                route = 'view-user';
            }
            else {
                if (!this.userId) {
                    action = 'Go to Login Page';
                    route = 'host-login';
                }
                else {
                    action = this.response.Name;
                    route = 'view-user';
                }
            }
            if (this.response.Name != "ok")
                action = this.response.Name;
            let snackBarRef = this._snackBar.open(this.response.Status, action, {
                duration: 3000, panelClass: [this.response.Name]
            });
            snackBarRef.onAction().subscribe(() => this.router.navigate([route]));
            //console.log("Users onSubmit | edit: ", this.response, parseInt(this.response.Status));
            window.localStorage.setItem("ForceChangePass", "0");
            //this.router.navigate(['Users']);
            //console.log("Users onSubmit | edit: ", temp);
            if (this.ForceChangePass == "1") {
                this.openModal('Password changed', 'Please login with the new password.', 'Close', '');
                this.host.killSessionID();
                this.userSession = {};
                this._eventEmitter.setLoginChange({ Name: "ok", Status: "" });
                this.router.navigate(['welcome']);
            }
        });
    }
    openModal(title, text, yes, no) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: title,
            text: text,
            yes: yes,
            no: no,
        };
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
UsersEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
UsersEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-edit.component.css */ "./src/app/users/users-edit/users-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], UsersEditComponent);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  -webkit-box-flex: 0;\n          flex: 0 0 20%;\n}\n.mat-column-Id, .mat-column-Module {\n  -webkit-box-flex: 0;\n          flex: 0 0 10%;\n}\n.mat-column-Nome, .mat-column-Email {\n  -webkit-box-flex: 0;\n          flex: 0 0 30%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBYTtVQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQWE7VUFBYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFhO1VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzR0FBc0c7QUFDeEc7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbm1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xufVxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LWhlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMylcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cbi9kZWVwLyAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYXQtY29sdW1uLUFjdGlvbiB7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG4ubWF0LWNvbHVtbi1JZCwgLm1hdC1jb2x1bW4tTW9kdWxlIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5tYXQtY29sdW1uLU5vbWUsIC5tYXQtY29sdW1uLUVtYWlsIHtcbiAgZmxleDogMCAwIDMwJTtcbn1cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKDJuKzEpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTk2LCAyMDEsIDAuMTYpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpub3QoOm50aC1jaGlsZCgybisxKSl7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");









let UsersComponent = class UsersComponent {
    constructor(host, router, _eventEmitter, dialog, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Name', 'Email', 'Module', 'Action'];
        this.users = [];
        this.response = {};
        this.load = 0;
    }
    ngAfterViewInit() {
        this.getUsers();
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    ngOnInit() {
        //Credentials
        if (this.host.getSessionID().Module == "User") {
            window.localStorage.setItem("editUserId", this.host.getSessionID().Id);
            this.router.navigate(['edit-user']);
            return;
        }
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
    }
    setResponse(message, action) {
        let snackBarRef = this._snackBar.open(message, action, {
            duration: 3000, panelClass: [action]
        });
    }
    addUser() {
        window.localStorage.removeItem("editUserId");
        this.router.navigate(['add-user']);
    }
    ;
    editUser(user) {
        window.localStorage.setItem("editUserId", user.Id.toString());
        this.router.navigate(['edit-user']);
    }
    ;
    deleteUser(user) {
        let ret = this.openModal('Delete User: ' + user.Name, 'Confirm to delete the user?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(data => {
            if (data['button'] == 'YES') {
                let filter = [];
                filter.push({ Name: "Id", Value: user.Id.toString() });
                let requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "users",
                    Filter: filter,
                };
                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                    this.response = data;
                    //console.log("Users | dbList: ", this.response);
                    this.setResponse(this.response['Status'], this.response['Name']);
                    if (this.response['Name'] == "ok") {
                        this.getUsers();
                    }
                });
            }
        });
    }
    getUsers() {
        let filter = [];
        let requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
            this.users = data;
            if (this.users) {
                // Assign the data to the data source for the table to render
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.users);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                delete this.dataSource;
            }
            this.load = 1;
            //console.log("Users | dbList: ", data);
        });
    }
    openModal(title, text, yes, no, input) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
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
        const modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        return modalDialog;
    }
};
UsersComponent.ctorParameters = () => [
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
], UsersComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
], UsersComponent.prototype, "sort", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], UsersComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  font-size: 14px;\n  display: block;\n  white-space: pre-line;\n}\n\n.welcome {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n}\n\n.system {\n  width: 70%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLndlbGNvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3lzdGVtIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");





let WelcomeComponent = class WelcomeComponent {
    constructor(router, host, _eventEmitter) {
        this.router = router;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.userSession = {};
    }
    ngOnInit() {
        this.userSession = this.host.getSessionID();
        //Getting value from child HostCredentials
        this._eventEmitter.loginChange.subscribe(data => {
            this.userSession = this.host.getSessionID();
        });
    }
    setRoute(val) {
        this.router.navigate(['add-user']);
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
    { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
        _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"]])
], WelcomeComponent);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




//if (environment.production) {
//  enableProdMode();
//}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(ref => {
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
}).catch(err => console.error(err));
//platformBrowserDynamic().bootstrapModule(AppModule)
//    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/naylor/E466E5C366E59718/projeto/ICS/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map