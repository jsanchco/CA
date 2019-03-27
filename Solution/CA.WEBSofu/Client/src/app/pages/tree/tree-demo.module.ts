import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreePageComponent} from './tree-page/tree-page.component';
import {RouterModule, Routes} from '@angular/router';
import {TreeModule} from 'angular-tree-component';

const routes: Routes = [
  {path: '', component: TreePageComponent}
];

/**
 * Separate module with lazy loading
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TreeModule
  ],
  declarations: [TreePageComponent]
})
export class TreeDemoModule {
}
