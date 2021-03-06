import { Component, OnInit, ViewChild } from '@angular/core';
import { setCulture } from '@syncfusion/ej2-base';
import {
  GridComponent,
  ForeignKeyService,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

import { DataManager, WebApiAdaptor , UrlAdaptor, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { StorageService } from '../../shared/services/storage.service';

setCulture('es-ES');

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css'],
  providers: [ForeignKeyService, EditService, ToolbarService]
})

export class ProfessionsComponent implements OnInit {

  public professions: DataManager;
  public pageSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public query: Query;

  @ViewChild('toastMessage')
    public toastMessage: ToastComponent;

  @ViewChild('grid')
    public grid: GridComponent;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.professions = new DataManager({
      url: this.storageService.getBaseApiUrl() + 'professions/getspecial',
      adaptor: new WebApiAdaptor,
      // adaptor: new ODataAdaptor,
      headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }],
    });
    // this.query = new Query().addParams('id', '1');
    this.query = new Query().addParams('id', '1').addParams('description', 'Manager');
    // this.query = new Query().addParams('description', 'manager');

    this.pageSettings = { pageCount: 3 };
    this.editSettings = { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true };
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
    if (args.requestType === 'save') {
    }
    if (args.requestType === 'beginEdit') {
    }
  }

  actionComplete(args: any): void {
    if (args.requestType === 'save') {
      this.toastMessage.width = '100%';
      this.toastMessage.position.X = 'Center';
      this.toastMessage.position.Y = 'Bottom';
      this.toastMessage.show({
        title: 'Información',
        icon: 'e-success toast-icons',
        cssClass: 'e-toast-success',
        content: 'Operacion realizada con éxito'});
    }
  }
}
