import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageService } from './shared/services/storage.service';
import { AuthorizatedGuard } from './shared/guard/authorizated.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthorizatedGuard]
    },
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
export class AppRoutingModule {}
