import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { EJAngular2Module } from 'ej-angular2';

import 'syncfusion-ej-global/i18n/ej.culture.es-ES.min.js';
import 'syncfusion-ej-global/l10n/ej.localetexts.es-ES.min.js';

import {AppComponent} from './app.component';
import {MultimenuComponent} from './components/multimenu/multimenu.component';
import {AppRoutesModule} from './routes/app-routes.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypographyPageComponent} from './pages/typography-page/typography-page.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ResizeService} from './resize/resize.service';
import {EchartComponent} from './components/echart-component/echart.component';
import {DropdownPageComponent} from './pages/dropdown-page/dropdown-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {FormElementsPageComponent} from './pages/form-elements-page/form-elements-page.component';
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from './pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {OtherComponentsPageComponent} from './pages/other-components-page/other-components-page.component';
import {ProductDetailsPageComponent} from './pages/product-details-page/product-details-page.component';
import {TabsPageComponent} from './pages/tabs-page/tabs-page.component';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {PricingTablesPageComponent} from './pages/pricing-tables-page/pricing-tables-page.component';
import {ListPageComponent} from './pages/list-page/list-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {RatingPageComponent} from './pages/rating-page/rating-page.component';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapPageComponent} from './pages/google-map-page/google-map-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {TextMaskModule} from 'angular2-text-mask';
import { BarchartPageComponent } from './pages/barchart-page/barchart-page.component';
import { LineChartPageComponent } from './pages/line-chart-page/line-chart-page.component';
import { BubbleChartPageComponent } from './pages/bubble-chart-page/bubble-chart-page.component';
import { HeatMapPageComponent } from './pages/heat-map-page/heat-map-page.component';
import { RadarPageComponent } from './pages/radar-page/radar-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { AccordionPageComponent } from './pages/accordion-page/accordion-page.component';
import { DatepickerPageComponent } from './pages/datepicker-page/datepicker-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { PopoverPageComponent } from './pages/popover-page/popover-page.component';
import { ProgressbarPageComponent } from './pages/progressbar-page/progressbar-page.component';
import { TimepickerPageComponent } from './pages/timepicker-page/timepicker-page.component';
import { TooltipPageComponent } from './pages/tooltip-page/tooltip-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { BadgePageComponent } from './pages/badge-page/badge-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { DataMapsPageComponent } from './pages/data-maps-page/data-maps-page.component';
import { TranslatePageComponent } from './pages/translate-page/translate-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ScrollPageComponent } from './pages/scroll-page/scroll-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';

// Helpers
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';

// Pipes
import { TranslatePipe } from './shared/pipes/translation.pipe';

// Services
import { StorageService } from './shared/services/storage.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { TranslationService } from './shared/services/translation.service';
import { WaitService } from './shared/services/wait.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MultimenuComponent,
    DashboardPageComponent,
    TypographyPageComponent,
    EchartComponent,
    DropdownPageComponent,
    LoginPageComponent,
    FormElementsPageComponent,
    ButtonsPageComponent,
    MainPageComponent,
    RegisterPageComponent,
    ComingSoonPageComponent,
    MaintenancePageComponent,
    NotFoundPageComponent,
    ProductsPageComponent,
    OtherComponentsPageComponent,
    ProductDetailsPageComponent,
    TabsPageComponent,
    GalleryPageComponent,
    CartPageComponent,
    PricingTablesPageComponent,
    ListPageComponent,
    ProfilePageComponent,
    RatingPageComponent,
    GoogleMapPageComponent,
    ContactPageComponent,
    CardsPageComponent,
    BarchartPageComponent,
    LineChartPageComponent,
    BubbleChartPageComponent,
    HeatMapPageComponent,
    RadarPageComponent,
    TablePageComponent,
    AccordionPageComponent,
    DatepickerPageComponent,
    ModalPageComponent,
    PaginationPageComponent,
    PopoverPageComponent,
    ProgressbarPageComponent,
    TimepickerPageComponent,
    TooltipPageComponent,
    GridPageComponent,
    BadgePageComponent,
    IconsPageComponent,
    DataMapsPageComponent,
    TranslatePageComponent,
    ScrollPageComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
    AppRoutesModule,
    NgbModule.forRoot(),
    NgbButtonsModule,
    NgxGalleryModule,
    TextMaskModule,
    BrowserAnimationsModule,
    // Insert your google maps api key, if you do not need google map in your project, you can remove this import
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ToastModule,
    EJAngular2Module.forRoot()
  ],
  providers: [
    StorageService,
    AuthenticationService,
    TranslationService,
    WaitService,
    ResizeService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
