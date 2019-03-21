import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ForeignKeyService,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';

// Services
import { UsersService } from '../../shared/services/users.service';
import { ProfessionsService } from '../../shared/services/profession.service';
import { Profession } from '../../shared/models/profession.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ForeignKeyService, EditService, ToolbarService]
})

export class UsersComponent implements OnInit {

  public users: Object[];
  public professions: Object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  constructor(
    private usersService: UsersService,
    private professionsService: ProfessionsService) {
  }

  ngOnInit(): void {
      this.getUsers();
      this.getProfessions();

      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  getUsers(): void {
    this.usersService.getAll().subscribe(
      data => {
        this.users = data;
      },
      error => {
      });
  }

  getProfessions(): void {
    this.professionsService.getAll().subscribe(
      data => {
      this.professions = data;
      },
      error => {
      });
  }
}
