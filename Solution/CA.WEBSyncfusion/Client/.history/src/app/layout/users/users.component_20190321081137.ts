import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ForeignKeyService, EditService, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';
import { Query } from '@syncfusion/ej2-data';

// Services
import { UsersService } from '../../shared/services/users.service';
import { ProfessionsService } from '../../shared/services/profession.service';
import { Profession } from '../../shared/models/profession.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ForeignKeyService, EditService]
})

export class UsersComponent implements OnInit {

  public users: Object[];
  public pageSettings: Object;
  public editSettings: Object;
  public toolbar: string[];

  // public professions: { [key: string]: Object }[];

  // public professions: Object[];
  public professions: { [key: int]: Object }[];
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
    // this.getProfessions();
  }

  getUsers(): void {
    this.usersService.getAll().subscribe(
      data => {
        this.users = data;
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
        for (let i = 0; i < data.length; i++) {
          const profession = new Profession();
          profession.id = data[i].id;
          profession.name = data[i].name;
          profession.description = data[i].description;

          // this.professions.push({name: data[i].name, id: '1'});
          this.professions.push(profession);
        }

      // this.professions = data;
      //   this.professions = [
      //     { name: 'Programmer', id: '1' },
      //     { name: 'Analyst', id: '2' },
      //     { name: 'Project Manager', id: '3' }
      // ];
        // this.professions = data;
        // let test: { [key: string]: Object }[];
        // for (let i = 0; i < data.length; i++) {
        //     test.push({
        //       id: data[i].id,
        //       name: data[i].name,
        //       description: data[i].description
        //     });
        // }


        // for (let i = 0; i < this.professions.length; i++) {
        //   this.professions[i].professionId = this.professions[i].id;
        // }

        console.log(this.professions);
        // for (let i = 0; i < data.length; i++) {
        //   console.log(this.professions);
        //     this.professions.push({
        //       id: data[i].id,
        //       name: data[i].name,
        //       description: data[i].description
        //     });
        // }
        // public professions: { [key: string]: Object }[] = [
        //   { countryName: 'United States', countryId: '1' },
        //   { countryName: 'Australia', countryId: '2' }
        // ];

        // this.professions = data;

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
    this.professionParams = {
      create: () => {
      this.professionElem = document.createElement('input');
          return this.professionElem;
      },
      read: () => {
          return this.professionObj.text;
      },
      destroy: () => {
          this.professionObj.destroy();
      },
      write: () => {
          this.getProfessions();
          this.professionObj = new DropDownList({
            dataSource: this.professions,
            fields: { value: 'id', text: 'name' },
            placeholder: 'Select a profession',
            floatLabelType: 'Never'
      });
      this.professionObj.appendTo(this.professionElem);
    }};
  }
}
