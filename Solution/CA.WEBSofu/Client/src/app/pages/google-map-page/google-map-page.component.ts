import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-google-map-page',
  templateUrl: './google-map-page.component.html',
  styleUrls: ['./google-map-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GoogleMapPageComponent implements OnInit {

  // Map pointer coordinates
  lat = 40.730610;
  lng = -73.935242;

  constructor() { }

  ngOnInit() {
  }

}
