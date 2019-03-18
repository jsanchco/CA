import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

// Modules Shared
import { SharedModule } from '../../shared/shared.module';
import { SharedSyncfusionModule } from '../../shared/shared-syncfusion.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    SharedSyncfusionModule,
    ToastModule,
    GridAllModule
  ]
})

export class UsersModule { }
