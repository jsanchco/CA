import { RouterModule, Routes } from '@angular/router';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard'}
];

export const Routing = RouterModule.forRoot(appRoutes);


