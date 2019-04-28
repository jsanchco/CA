import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { CarPageComponent } from './car-page/car-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { CarCustomizationComponent } from './car-page/car-customization/car-customization.component';
import { CarOdometerComponent } from './car-page/car-odometer/car-odometer.component';

// Pipes
import { TranslatePipe } from '../../shared/pipes/translation.pipe';

@NgModule({
  declarations: [
    CarPageComponent,
    CarCustomizationComponent,
    CarOdometerComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe
  ]
})

export class CarModule { }
