import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { CarPageComponent } from './car-page/car-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarCustomizationComponent } from './car-page/car-customization/car-customization.component';
import { CarOdometerComponent } from './car-page/car-odometer/car-odometer.component';

@NgModule({
  declarations: [CarPageComponent, CarCustomizationComponent, CarOdometerComponent],
  imports: [
    CommonModule, 
    CarRoutingModule,
    NgbModule
  ]
})

export class CarModule { }
