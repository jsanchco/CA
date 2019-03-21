import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { 
  GridAllModule
  } from '@syncfusion/ej2-angular-grids';

// Modules Shared
import { SharedModule } from '../../shared/shared.module';
import { SharedSyncfusionModule } from '../../shared/shared-syncfusion.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SharedSyncfusionModule,
    GridAllModule
  ]
})

export class DashboardModule { }
