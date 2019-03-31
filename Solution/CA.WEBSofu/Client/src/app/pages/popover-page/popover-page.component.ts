import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-page',
  templateUrl: './popover-page.component.html',
  styleUrls: ['./popover-page.component.scss']
})
export class PopoverPageComponent implements OnInit {

  // Variables for context and manual triggers example
  greeting = {};
  name = 'World';
  @ViewChild('p2') public popover: NgbPopover;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method for context and manual triggers example
   * @param greeting
   */
  public changeGreeting(greeting: any): void {
    const isOpen = this.popover.isOpen();
    this.popover.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.popover.open(greeting);
    }
  }

}
