import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

// Modules Shared
import { SharedModule } from '../shared/shared.module';
import { SharedSyncfusionModule } from '../shared/shared-syncfusion.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidebarModule,
    SharedModule,
    RadioButtonModule,
    BrowserModule,
    SharedSyncfusionModule
  ]
})

export class LayoutModule { }
