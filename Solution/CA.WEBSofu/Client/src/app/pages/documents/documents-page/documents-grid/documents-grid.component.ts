import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { setCulture } from '@syncfusion/ej2-base';
import {
  GridComponent,
  ForeignKeyService,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

// Services
import { TranslationService } from '../../../../shared/services/translation.service';
import { ToastType, ToastService } from '../../../../shared/services/toast.service';
import { StorageService } from '../../../../shared/services/storage.service';

setCulture('es-ES');

@Component({
  selector: 'app-documents-grid',
  templateUrl: './documents-grid.component.html',
  styleUrls: ['./documents-grid.component.scss'],
  providers: [ForeignKeyService, EditService, ToolbarService],
  encapsulation: ViewEncapsulation.None
})

export class DocumentsGridComponent implements OnInit {

  @ViewChild('grid') public grid: GridComponent;

  public documents: DataManager;
  public documentTypes: DataManager;
  public pageSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  constructor(
    private storageService: StorageService,
    private translationService: TranslationService,
    private toastService: ToastService) { 

  }

  ngOnInit() {
    this.documents = new DataManager({
      url: this.storageService.getBaseApiUrl() + 'documents',
      adaptor: new WebApiAdaptor,
      headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }],
    });

    this.documentTypes = new DataManager({
      url: this.storageService.getBaseApiUrl() + 'documentTypes',
      adaptor: new WebApiAdaptor,
      headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }]
    });

    this.pageSettings = { pageCount: 3 };
    this.editSettings = { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

}
