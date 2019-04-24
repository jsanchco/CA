import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRoutingModule } from './default-rotuing.module';
import { DefaultPageComponent } from './default-page/default-page.component';

@NgModule({
  declarations: [DefaultPageComponent],
  imports: [CommonModule, DefaultRoutingModule]
})

export class DefaultModule { }
