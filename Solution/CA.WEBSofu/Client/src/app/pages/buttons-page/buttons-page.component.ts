import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsPageComponent implements OnInit {

  // Models for button groups examples
  model = {
    left: true,
    middle: false,
    right: false
  };
  radioModel = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
