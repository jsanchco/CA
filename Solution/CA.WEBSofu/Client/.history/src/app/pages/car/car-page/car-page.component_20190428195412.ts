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
    this.car = {
      model: 'Mercedes CLA 200',
      currentSpeed: 0,
      maxSpeed: 200
    };
  }

}
