import { Component, OnInit } from '@angular/core';

// Models
import { Car } from '../../../shared/models/car.model';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})

export class CarPageComponent implements OnInit {

  public car: Car;

  constructor() { }

  ngOnInit() {
  }

  public onUpdateCar(car: Car) {
    this.car = car;
    console.log(this.car);
  }

  public onTabChange(p: Object): void {
    console.log('CarPageComponent -> Active Odometer');
  }
}
