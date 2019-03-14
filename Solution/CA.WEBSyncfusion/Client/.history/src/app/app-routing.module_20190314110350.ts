import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizatedGuard } from './shared/guard/authorizated.guard';

// Services
import { StorageService } from './shared/services/storage.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthorizatedGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './layout/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthorizatedGuard]
  },
  // {
  //   path: '',
  //   loadChildren: './layout/layout.module#LayoutModule',
  //   canActivate: [AuthorizatedGuard]
  // },
  {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    StorageService,
    AuthorizatedGuard
  ]
})

export class AppRoutingModule { }
