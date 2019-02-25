import { RouterModule, Routes } from '@angular/router';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  { path: 'layout', component: LayoutComponent, canActivate: [ AuthorizatedGuard ] },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: '/dashboard'}
  { path: '**', redirectTo: '/layout'}
];

export const Routing = RouterModule.forRoot(appRoutes);


