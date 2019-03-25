import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionsComponent } from './professions.component';
import { ProfessionsRoutingModule } from './professions-routing.module';

import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

// Modules Shared
import { SharedModule } from '../../shared/shared.module';
import { SharedSyncfusionModule } from '../../shared/shared-syncfusion.module';

@NgModule({
  declarations: [
    ProfessionsComponent
  ],
  imports: [
    CommonModule,
    ProfessionsRoutingModule,
    SharedModule,
    SharedSyncfusionModule,
    ToastModule,
    GridAllModule
  ]
})

export class UsersModule { }
