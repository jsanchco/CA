import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

// Services
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public data: Object[];
  public pageSettings: Object;

  @ViewChild('grid')
    public grid: GridComponent;

  @ViewChild('toastMessage')
  public toastObj: ToastComponent;

  constructor(private usersService: UsersService) {
   }

  ngOnInit() {
    this.pageSettings = { pageCount: 3 };
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getAll().subscribe(
      data => {
        this.data = data;
        console.log(data);
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
}
