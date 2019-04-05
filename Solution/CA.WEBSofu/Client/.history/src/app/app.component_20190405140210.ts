import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

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
          'Items': 'Registros',
          'DeleteOperationAlert': 'Debes seleccionar un registro para poder borrar',
          'CancelButton': 'Cancelar',
          'ConfirmDelete': '¿Estás seguro de querer borrar este registro?',
          'EmptyRecord': 'No existen registros'
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

// // Google analytics global variable
// declare let ga: any;

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
    // Send goggle analytics info about page change.
    // If you do not need google analytics in your project, you can delete this part
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
