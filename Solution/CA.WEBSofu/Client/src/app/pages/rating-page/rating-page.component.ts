import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingPageComponent implements OnInit {

  // Models for basic demo example
  currentRate = 8;
  // Model for events and readonly ratings example
  selected = 0;
  hovered = 0;
  readonly = false;
  // Model for custom star template example
  customRate = 5;
  // Model for custom decimal rating example
  decimalRate = 3.14;

  constructor() { }

  ngOnInit() {
  }

}
