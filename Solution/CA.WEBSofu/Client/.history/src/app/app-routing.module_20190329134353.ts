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
      loadChildren: './login-page/login-page.module#LoginPageModule'
  },
  {
      path: 'login-page',
      loadChildren: './login-page/login-page.module#LoginPageModule'
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
