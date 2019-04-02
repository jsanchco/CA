import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';

import { ToastModule } from '@syncfusion/ej2-angular-notifications';

// Modules Shared
import { SharedModule } from '../../shared/shared.module';
import { SharedSyncfusionModule } from '../../shared/shared-syncfusion.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SharedSyncfusionModule,
    ToastModule,
    // LoginPageRoutingModule
  ]
})

export class LoginPageModule { }
