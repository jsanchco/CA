import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  resize: boolean;
  button_display: boolean;

  @HostListener('window:onbeforeunload', ['$event'])
  onBeforeUnload() {
      this.deleteAllCookies();
      console.log('In .... HostListener');
  }

  deleteAllCookies() {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
  }

  constructor() {
    this.resize = false;
    this.button_display = false;
  }

  // Button click event handler to open the ejDialog
  onClick(event) {
    this.button_display = false;
    // this.dialog.widget.element.ejDialog('open');
  }

  // Dialog close event handler
  onClose(event) {
    this.button_display = true;
  }
}
