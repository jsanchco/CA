import {Component, OnInit} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-timepicker-page',
  templateUrl: './timepicker-page.component.html',
  styleUrls: ['./timepicker-page.component.scss']
})
export class TimepickerPageComponent implements OnInit {

  // Model for basic timepicker
  basicTime = {hour: 13, minute: 30};
  // Model for meridian timepicker
  meridianTime = {hour: 13, minute: 30};
  meridian = true;
  // Model for seconds timepicker
  secondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  // Model for spinners timepicker
  spinnersTime = {hour: 13, minute: 30};
  spinners = true;
  // Model for custom steps timepicker
  customStepsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  // Model for custom validation timepicker
  time;
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if (value.hour > 13) {
      return {tooLate: true};
    }

    return null;
  });

  constructor() {
  }

  ngOnInit() {
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  toggleSpinners() {
    this.spinners = !this.spinners;
  }
}
