import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-page',
  templateUrl: './tooltip-page.component.html',
  styleUrls: ['./tooltip-page.component.scss']
})
export class TooltipPageComponent implements OnInit {

  // Model context and manual triggers example
  greeting = {};
  name = 'World';
  // Reference to tooltip instance
  @ViewChild('t2') public tooltip: NgbTooltip;

  constructor() {
  }

  ngOnInit() {
  }

  public changeGreeting(greeting: any): void {
    const isOpen = this.tooltip.isOpen();
    this.tooltip.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.tooltip.open(greeting);
    }
  }
}
