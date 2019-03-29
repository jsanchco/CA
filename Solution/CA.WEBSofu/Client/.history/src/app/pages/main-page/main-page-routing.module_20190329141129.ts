import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        children: [
            {
                path: 'dashboard-page',
                loadChildren: './dashboard-page/dashboard-page.module#DashboardPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainPageRoutingModule {}
