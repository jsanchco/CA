import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {FormElementsPageComponent} from '../pages/form-elements-page/form-elements-page.component';
import {ButtonsPageComponent} from '../pages/buttons-page/buttons-page.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';
import {ComingSoonPageComponent} from '../pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from '../pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page/not-found-page.component';
import {GalleryPageComponent} from '../pages/gallery-page/gallery-page.component';
import {ProfilePageComponent} from '../pages/profile-page/profile-page.component';
import {GoogleMapPageComponent} from '../pages/google-map-page/google-map-page.component';
import {BarchartPageComponent} from '../pages/barchart-page/barchart-page.component';
import {LineChartPageComponent} from '../pages/line-chart-page/line-chart-page.component';
import {BubbleChartPageComponent} from '../pages/bubble-chart-page/bubble-chart-page.component';
import {HeatMapPageComponent} from '../pages/heat-map-page/heat-map-page.component';
import {RadarPageComponent} from '../pages/radar-page/radar-page.component';
import {DataMapsPageComponent} from '../pages/data-maps-page/data-maps-page.component';
import {ScrollPageComponent} from '../pages/scroll-page/scroll-page.component';

import { AuthorizatedGuard } from '../shared/guard/authorizated.guard';

// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', canActivate: [AuthorizatedGuard], component: MainPageComponent, children: [
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'form-elements', component: FormElementsPageComponent},
      {path: 'buttons', component: ButtonsPageComponent},
      {path: 'gallery', component: GalleryPageComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'google-map', component: GoogleMapPageComponent},
      {path: 'barchart', component: BarchartPageComponent},
      {path: 'linechart', component: LineChartPageComponent},
      {path: 'bubblechart', component: BubbleChartPageComponent},
      {path: 'heatmap', component: HeatMapPageComponent},
      {path: 'radar', component: RadarPageComponent},
      {path: 'data-maps', component: DataMapsPageComponent},
      {path: 'scroll', component: ScrollPageComponent},
      {path: 'component-table', loadChildren: 'app/pages/component-table/component-table.module#ComponentTableModule'},
      {path: 'drag', loadChildren: 'app/pages/drag/drag.module#DragModule'},
      {path: 'editor', loadChildren: 'app/pages/editor/editor.module#EditorModule'},
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'prefix'}]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'coming-soon', component: ComingSoonPageComponent},
  {path: 'maintenance', component: MaintenancePageComponent},
  {path: '404', component: NotFoundPageComponent},
  {path: '', redirectTo: '/main/dashboard', pathMatch: 'prefix'},
  {path: '**', redirectTo: '/main/dashboard', pathMatch: 'prefix'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [
    AuthorizatedGuard
  ]
})

export class AppRoutesModule {
}
