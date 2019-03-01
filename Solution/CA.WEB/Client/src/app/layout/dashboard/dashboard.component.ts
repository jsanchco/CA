import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    displayedColumns = ['id', 'name', 'surname', 'username', 'age', 'birthDate', 'email'];
    dataSource: MatTableDataSource< User >;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(private userService: UserService) {
   }

    ngOnInit() {
        this.userService.getAll().subscribe(users => {
            this.dataSource = new MatTableDataSource(users);
          });
    }
}

