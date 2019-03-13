import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ToastModule } from '@syncfusion/ej2-angular-notifications';

// Modules Shared
import { SharedModule } from '../shared/shared.module';
import { SharedSyncfusionModule } from '../shared/shared-syncfusion.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SharedSyncfusionModule,
    ToastModule,
    LoginRoutingModule
  ]
})

export class LoginModule { }
