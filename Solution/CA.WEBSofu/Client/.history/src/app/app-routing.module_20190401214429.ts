import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizatedGuard } from './shared/guard/authorizated.guard';

// Services
import { StorageService } from './shared/services/storage.service';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './pages/main-page.module#MainPageModule',
  //   canActivate: [AuthorizatedGuard]
  // },
  {
      path: '',
      loadChildren: './pages/login-page/login-page.module#LoginPageModules'
  },
  {
      path: 'login',
      loadChildren: './pages/login-page/login-page.module#LoginPageModules'
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
