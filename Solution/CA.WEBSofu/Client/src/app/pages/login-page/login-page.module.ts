import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';

// Modules Shared
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class LoginPageModule { }
