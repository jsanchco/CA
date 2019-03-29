import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // When this field is set true, it removes class from root component. That causes pre loader to be removed.
  @HostBinding('class.loading') loading = false;

  constructor(public router: Router) {
  }
}
