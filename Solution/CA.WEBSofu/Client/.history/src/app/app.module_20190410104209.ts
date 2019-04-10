import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {EJAngular2Module} from 'ej-angular2';

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
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from './pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {TextMaskModule} from 'angular2-text-mask';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import {ListViewModule} from '@syncfusion/ej2-angular-lists';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import {TreeViewModule, TabModule} from '@syncfusion/ej2-angular-navigations';
import {ToastModule} from '@syncfusion/ej2-angular-notifications';

import {
  GridModule,
//  GridAllModule
} from '@syncfusion/ej2-angular-grids';

// Helpers
import {JwtInterceptor} from './shared/helpers/jwt.interceptor';
import {ErrorInterceptor} from './shared/helpers/error.interceptor';

// Pipes
import {TranslatePipe} from './shared/pipes/translation.pipe';

// Services
import {StorageService} from './shared/services/storage.service';
import {AuthenticationService} from './shared/services/authentication.service';
import {TranslationService} from './shared/services/translation.service';
import {WaitService} from './shared/services/wait.service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    MultimenuComponent,
    DashboardPageComponent,
    LoginPageComponent,
    MainPageComponent,
    RegisterPageComponent,
    ComingSoonPageComponent,
    MaintenancePageComponent,
    NotFoundPageComponent,
    ProfilePageComponent,
    TranslatePipe,
    UsersPageComponent
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
    HttpClientModule,
    ButtonModule,
    ListViewModule,
    DropDownListModule,
    TreeViewModule,
    TabModule,
    ToastModule,
    GridModule,
    // GridAllModule,
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
