import { Component, OnInit } from '@angular/core';
import { 
  ForeignKeyService, 
  EditSettingsModel, 
  ToolbarItems, 
  EditService, 
  ToolbarService 
} from '@syncfusion/ej2-angular-grids';

import { data, employeeData } from '../../shared/helpers/datasource';

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

  ngOnInit(): void {
      this.data = data;
      this.employeeData = employeeData;

      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
  
}