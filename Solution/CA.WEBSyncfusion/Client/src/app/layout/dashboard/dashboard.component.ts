import { Component, OnInit, ViewChild } from '@angular/core';
import { 
  GridComponent,
  ForeignKeyService, 
  EditSettingsModel, 
  ToolbarItems, 
  EditService, 
  ToolbarService 
} from '@syncfusion/ej2-angular-grids';

import { data, employeeData } from '../../shared/helpers/datasource';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://ej2services.syncfusion.com/production/web-services/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ForeignKeyService, EditService, ToolbarService]
})

export class DashboardComponent implements OnInit {

  public data: Object[];
  public employeeData: Object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  public dataMgr: DataManager;
  public pageSettings: Object;

  @ViewChild('grid1')
    public grid: GridComponent;

  ngOnInit(): void {
      this.data = data;
      this.employeeData = employeeData;

      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

      this.dataMgr = new DataManager({ url: SERVICE_URI + 'api/Orders', adaptor: new WebApiAdaptor });
      this.pageSettings = { pageCount: 3 };
  }  
}