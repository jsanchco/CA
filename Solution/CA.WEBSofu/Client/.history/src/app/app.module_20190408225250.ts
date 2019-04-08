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
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ResizeService} from './resize/resize.service';
import {EchartComponent} from './components/echart-component/echart.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {FormElementsPageComponent} from './pages/form-elements-page/form-elements-page.component';
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from './pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {AgmCoreModule} from '@agm/core';
import {GoogleMapPageComponent} from './pages/google-map-page/google-map-page.component';
import {TextMaskModule} from 'angular2-text-mask';
import { BarchartPageComponent } from './pages/barchart-page/barchart-page.component';
import { LineChartPageComponent } from './pages/line-chart-page/line-chart-page.component';
import { BubbleChartPageComponent } from './pages/bubble-chart-page/bubble-chart-page.component';
import { HeatMapPageComponent } from './pages/heat-map-page/heat-map-page.component';
import { RadarPageComponent } from './pages/radar-page/radar-page.component';
import { DataMapsPageComponent } from './pages/data-maps-page/data-maps-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
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
    EchartComponent,
    LoginPageComponent,
    FormElementsPageComponent,
    ButtonsPageComponent,
    MainPageComponent,
    RegisterPageComponent,
    ComingSoonPageComponent,
    MaintenancePageComponent,
    NotFoundPageComponent,
    ProfilePageComponent,
    GoogleMapPageComponent,
    BarchartPageComponent,
    LineChartPageComponent,
    BubbleChartPageComponent,
    HeatMapPageComponent,
    RadarPageComponent,
    DataMapsPageComponent,
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
