import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PerfectScrollbarComponent, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollPageComponent implements OnInit {

  // Reference to scroll component
  @ViewChild(PerfectScrollbarComponent) componentScroll;
  // Reference to scroll directive
  @ViewChild(PerfectScrollbarDirective) directiveScroll;

  constructor() {
  }

  onScrollToXY(x: number, y: number) {
    this.componentScroll.directiveRef.scrollTo(x, y);
    this.directiveScroll.scrollTo(x, y);
  }

  onScrollToTop() {
    this.componentScroll.directiveRef.scrollToTop();
    this.directiveScroll.scrollToTop();
  }

  onScrollToLeft() {
    this.componentScroll.directiveRef.scrollToLeft();
    this.directiveScroll.scrollToLeft();
  }

  onScrollToRight() {
    this.componentScroll.directiveRef.scrollToRight();
    this.directiveScroll.scrollToRight();
  }

  onScrollToBottom() {
    this.componentScroll.directiveRef.scrollToBottom();
    this.directiveScroll.scrollToBottom();
  }

  ngOnInit() {
  }

}
