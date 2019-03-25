import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GridComponent,
  ForeignKeyService,
  EditSettingsModel,
  ToolbarItems,
  EditService,
  ToolbarService
} from '@syncfusion/ej2-angular-grids';

import { Observable } from 'rxjs';

import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

// Services
import { UsersService } from '../../shared/services/users.service';
import { ProfessionsService } from '../../shared/services/profession.service';
import { StorageService } from '../../shared/services/storage.service';

// Models
import { User } from '../../shared/models/user.model';
import { Profession } from '../../shared/models/profession.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ForeignKeyService, EditService, ToolbarService]
})

export class UsersComponent implements OnInit {

  public items: Object[];

  public data: DataManager;

  // public users: Object[];
  // public professions: Object[];
  // public users: User[] = [];
  // public users: User[] = [];
  public users: Observable<User[]>;
  public professions: Profession[] = [];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

 @ViewChild('grid')
    public grid: GridComponent;

  constructor(
    private usersService: UsersService,
    private professionsService: ProfessionsService,
    private storageService: StorageService) {
  }

  ngOnInit(): void {

      // this.data = new DataManager({
      //   url: this.storageService.getBaseApiUrl() + 'users',
      //   adaptor: new WebApiAdaptor ,
      //   headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }]
      // }).executeQuery(new Query().take(6)).then((e: ReturnOption) => {
      //   this.users = <User[]>e.result;
      //   console.log(this.users);
      // }).catch((e) => true);

      // this.data = new DataManager({
      //   url: this.storageService.getBaseApiUrl() + 'users',
      //   adaptor: new WebApiAdaptor ,
      //   headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }]
      // });


      // this.getUsers_();
      // this.getProfessions_();

      // this.getUsers();
      // this.getProfessions();

      this.getUsers__();
      console.log(this.users);

      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  getUsers(): void {
    this.usersService.getAll().subscribe(
      data => {
        // this.users = data;
        // this.data = new DataManager(<User[]>data);
        // console.log(this.data);
      },
      error => {
      });
  }

  getProfessions(): void {
    this.professionsService.getAll().subscribe(
      data => {
        this.professions = data;
        console.log(this.professions);
      },
      error => {
      });
  }

  getUsers_(): void {
    const user = new User();
    user.id = 1;
    user.name = 'Jesús';
    user.surname = 'Sánchez';
    user.username = 'jsanchco';
    user.age = 30;
    user.professionId = 1;
    user.professionName = 'Programmer';

    // this.users.push(user);
  }

  getProfessions_(): void {
    let profession = new Profession();
    profession.id = 1;
    profession.name = 'Programmer';
    this.professions.push(profession);

    profession = new Profession();
    profession.id = 2;
    profession.name = 'Analyst';
    this.professions.push(profession);

    profession = new Profession();
    profession.id = 3;
    profession.name = 'Project Manager';
    this.professions.push(profession);
  }

  getUsers__(): void {
    this.users = this.usersService.getAll();
  }
}
