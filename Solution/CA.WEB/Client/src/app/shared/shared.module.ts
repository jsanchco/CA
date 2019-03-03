import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { TranslatePipe } from '../shared/pipes/translation.pipe';

@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslatePipe
  ]
})

export class SharedModule { }
