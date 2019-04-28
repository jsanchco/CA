import { Component, Input, OnInit } from '@angular/core';

// Models
import { Car } from '../../../../shared/models/car.model';

@Component({
  selector: 'app-car-odometer',
  templateUrl: './car-odometer.component.html',
  styleUrls: ['./car-odometer.component.scss']
})

export class CarOdometerComponent implements OnInit {

  @Input() public car: Car;

  constructor() { }

  ngOnInit() {
    console.log(this.car);
  }
}
