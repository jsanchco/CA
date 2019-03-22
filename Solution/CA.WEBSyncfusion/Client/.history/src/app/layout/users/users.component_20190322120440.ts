import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GridComponent, 
  ForeignKeyService,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

// // Services
// import { UsersService } from '../../shared/services/users.service';
// import { ProfessionsService } from '../../shared/services/profession.service';
import { StorageService } from '../../shared/services/storage.service';

// // Models
// import { User } from '../../shared/models/user.model';
// import { Profession } from '../../shared/models/profession.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ForeignKeyService, EditService, ToolbarService]
})

export class UsersComponent implements OnInit {

  public items: Object[];

  public users: DataManager;
  public professions: DataManager;
  public pageSettings: Object;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

 @ViewChild('grid')
    public grid: GridComponent;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {    

      this.users = new DataManager({ 
        url: this.storageService.getBaseApiUrl() + 'users', 
        adaptor: new WebApiAdaptor ,
        headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }]
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
}
