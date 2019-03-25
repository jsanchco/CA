import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

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
        // this.professions = data;
        this.professions = [
          { text: 'Programmer', value: '1' },
          { text: 'Analyst', value: '2' }];
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
            //     args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
            // } else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
            //     args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
            // }
        }
  }
}
