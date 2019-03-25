import {
  Component
} from '@angular/core';
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'es-ES': {
      'grid': {
          'Add': 'Añadir',
          'Edit': 'Editar',
          'Delete': 'Borrar',
          'Update': 'Actualizar',
          'Cancel': 'Cancelar',
          'Item': 'Registro',
          'Items': 'Registros'
      },
      'pager': {
          'currentPageInfo': '{0} de {1} páginas',
          'totalItemsInfo': '({0} registros)',
          'firstPageTooltip': 'Zur ersten Seite',
          'lastPageTooltip': 'Zur letzten Seite',
          'nextPageTooltip': 'Zur nächsten Seite',
          'previousPageTooltip': 'Zurück zur letzten Seit',
          'nextPagerTooltip': 'Zum nächsten Pager',
          'previousPagerTooltip': 'Zum vorherigen Pager'
      }
  }
});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
  }
}
