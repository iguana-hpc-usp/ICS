import {Component, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../_services/host.service";
import {Router} from "@angular/router";
import {GroupsStr} from "../_model/groups";
import {EventEmitterService} from "../_services/event-emitter.service";
import {ResponseStr, ParamStr, UniversalDTOStr} from "../_model/service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogComponent} from "../_services/dialog/dialog.component";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  displayedColumns = ['Id', 'Name', 'Action'];
  dataSource: MatTableDataSource<GroupsStr>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  groups: GroupsStr[] = [];
  response = {} as ResponseStr;

  load = 0;

  constructor(
    private host: HostService,
    private router: Router,
    private _eventEmitter: EventEmitterService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngAfterViewInit() {
    this.getGroups();
  }

  applyFilter(filterValue: string) {
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

  addGroup(): void {
    window.localStorage.removeItem("editGroupId");
    this.router.navigate(['add-group']);
  };

  addMembers(group: GroupsStr): void {
    window.localStorage.setItem("editGroupId", group.Id.toString());
    window.localStorage.setItem("groupName", group.Name);
    this.router.navigate(['add-members']);
  };

  editGroup(group: GroupsStr): void {
    window.localStorage.setItem("editGroupId", group.Id.toString());
    this.router.navigate(['edit-group']);
  };

  setResponse(message, action) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 3000, panelClass: [action]
    });
  }

  deleteGroup(group: GroupsStr): void {
    let ret = this.openModal('Delete Group: ' + group.Name,
      'Confirm to delete the group?',
      'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: group.Id.toString()});

        let requestDB: UniversalDTOStr = {
          Operation: "drop",
          TableData: null,
          Custom: "groups",
          Filter : filter,
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
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "groups",
      Filter: filter,
    };

    let gTemp: GroupsStr[] = [];

    this.host.request(requestDB, 'FDBRequest')
      .subscribe( data => {
        this.groups = data;
        if (this.groups) {
          //console.log("Groups | dbList: ", data);
          this.dataSource = new MatTableDataSource(this.groups);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          delete this.dataSource;
        }

        this.load = 1;
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
