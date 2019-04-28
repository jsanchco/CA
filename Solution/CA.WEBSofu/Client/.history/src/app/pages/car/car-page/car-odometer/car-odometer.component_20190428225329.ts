import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-odometer',
  templateUrl: './car-odometer.component.html',
  styleUrls: ['./car-odometer.component.scss']
})

export class CarOdometerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fetchTab(): void {
    console.log('Active Odometer');
  }
}
