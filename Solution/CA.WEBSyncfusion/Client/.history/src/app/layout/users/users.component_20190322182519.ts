import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GridComponent,
  ForeignKeyService,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ForeignKeyService, EditService, ToolbarService]
})

export class UsersComponent implements OnInit {

  public users: DataManager;
  public professions: DataManager;
  public pageSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  @ViewChild('toastMessage')
    public toastMessage: ToastComponent;

 @ViewChild('grid')
    public grid: GridComponent;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {

      this.users = new DataManager({
        url: this.storageService.getBaseApiUrl() + 'users',
        adaptor: new WebApiAdaptor ,
        headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }],
      });

      this.professions = new DataManager({
        url: this.storageService.getBaseApiUrl() + 'professions',
        adaptor: new WebApiAdaptor ,
        headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }]
      });

      this.pageSettings = { pageCount: 3 };
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  actionFailure(e: any): void {
    let messageError = '';
    if (e.error[0] != null) {
      messageError = e.error[0].error.statusText;
    } else {
      if (e.error.error != null) {
        messageError = e.error.error.statusText;
      }
    }

    this.toastMessage.width = '100%';
    this.toastMessage.position.X = 'Center';
    this.toastMessage.position.Y = 'Bottom';
    this.toastMessage.show({
      title: 'Error',
      icon: 'e-error toast-icons',
      cssClass: 'e-toast-danger',
      content: messageError});
  }

  actionBegin(args: any): void {
    console.log('actionBegin -> ' + args.requestType);
    if (args.requestType === 'save') {
    }
    if (args.requestType === 'beginEdit') {
      // args.model.query.addParams('id', '1');
    }
  }
}
