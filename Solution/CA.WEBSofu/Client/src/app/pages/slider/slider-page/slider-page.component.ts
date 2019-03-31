import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderPageComponent implements OnInit {

  // Model for single value example
  public someValue: number = 5;
  public someMin: number = -10;
  public someMax: number = 10;
  public someStep: number = 1;
  public disabled: boolean = false;

  // Model for range example
  public someRange: number[] = [3, 7];

  // Model for keyboard support example
  public keyupLabelOn: boolean = false;
  public keydownLabelOn: boolean = false;
  public someKeyboard: number[] = [1, 3];
  public someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: true,
    step: 0.1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };

  // Model for tooltip example
  public someRange3: number[] = [2, 8];

  constructor() {
  }

  ngOnInit() {
  }

  changeSomeValue(value: number) {
    this.someValue = this.someValue + value;
  }

  changeSomeMin(value: number) {
    this.someMin = this.someMin + value;
  }

  changeSomeMax(value: number) {
    this.someMax = this.someMax + value;
  }

  changeSomeStep(value: number) {
    this.someStep = this.someStep + value;
  }

  changeSomeRange(index: number, value: number) {
    let newRange = [this.someRange[0], this.someRange[1]];
    newRange[index] = newRange[index] + value;
    this.someRange = newRange;
  }

  blinkKeyupLabel() {
    this.keyupLabelOn = true;
    setTimeout(() => {
      this.keyupLabelOn = false;
    }, 450);
  }

  blinkKeydownLabel() {
    this.keydownLabelOn = true;
    setTimeout(() => {
      this.keydownLabelOn = false;
    }, 450);
  }
}
