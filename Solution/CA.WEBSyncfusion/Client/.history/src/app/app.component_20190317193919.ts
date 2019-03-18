import {
  Component, HostListener
} from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }

  @HostListener('window:onbeforeunload', ['$event'])
  onBeforeUnload() {
      this.saveLogFile();
  }

  saveLogFile(): void {
    saveAs(new Blob(['Hello!!!!'], { type: 'text' }), 'data.log');
  }
}
