import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

// Services
import { UsersService } from '../../shared/services/users.service';
import { ProfessionsService } from '../../shared/services/profession.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public data: Object[];
  public professions: Object[];
  public pageSettings: Object;
  public editSettings: Object;
  public toolbar: string[];

  public professionParams: IEditCell;
  public professionElem: HTMLElement;
  public professionObj: DropDownList;

  @ViewChild('grid')
    public grid: GridComponent;

  @ViewChild('toastMessage')
  public toastObj: ToastComponent;

  constructor(
    private usersService: UsersService,
    private professionsService: ProfessionsService) {
  }

  ngOnInit() {
    this.pageSettings = { pageCount: 3 };
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , newRowPosition: 'Top' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    this.configureGrid();

    this.getUsers();
    this.getProfessions();
  }

  getUsers(): void {
    this.usersService.getAll().subscribe(
      data => {
        this.data = data;
      },
      error => {
        this.toastObj.width = '100%';
        this.toastObj.position.X = 'Center';
        this.toastObj.position.Y = 'Bottom';
        this.toastObj.show(
          {
            title: 'Error',
            icon: 'e-error toast-icons',
            cssClass: 'e-toast-danger',
            content: error.messageError
          }
        );
      });
  }

  getProfessions(): void {
    this.professionsService.getAll().subscribe(
      data => {
        this.professions = data;

        // this.professions = [
        //   { text: 'Programmer', value: '1' },
        //   { text: 'Analyst', value: '2' }];
      },
      error => {
        this.toastObj.width = '100%';
        this.toastObj.position.X = 'Center';
        this.toastObj.position.Y = 'Bottom';
        this.toastObj.show(
          {
            title: 'Error',
            icon: 'e-error toast-icons',
            cssClass: 'e-toast-danger',
            content: error.messageError
          }
        );
      });
  }

  actionBegin(args: any): void {
    // const gridInstance: any = (<any>document.getElementById('Normalgrid')).ej2_instances[0];
        if (args.requestType === 'save') {
            // if (gridInstance.pageSettings.currentPage !== 1 && gridInstance.editSettings.newRowPosition === 'Top') {
            // tslint:disable-next-line:max-line-length
            //     args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
            // } else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
            //     args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
            // }
        }
  }

  configureGrid(): void {
    this.countryParams = {
      create:()=>{
      this.countryElem = document.createElement('input');
          return this.countryElem;
      },
      read:()=>{
          return this.countryObj.text;
      },
      destroy:()=>{
          this.countryObj.destroy();
      },
      write:()=>{
          this.countryObj = new DropDownList({
          dataSource: this.country,
          fields: { value: 'countryId', text: 'countryName' },
          change: () => {
          this.stateObj.enabled = true;
          let tempQuery: Query = new Query().where('countryId', 'equal', this.countryObj.value);
          this.stateObj.query = tempQuery;
          this.stateObj.text = null;
          this.stateObj.dataBind();
      },
      placeholder: 'Select a country',
      floatLabelType: 'Never'
      });
      this.countryObj.appendTo(this.countryElem);
  }};
  }
}
