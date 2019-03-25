import {
  Component
} from '@angular/core';
import { L10n, setCulture } from '@syncfusion/ej2-base';

setCulture('es-ES');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }
}
