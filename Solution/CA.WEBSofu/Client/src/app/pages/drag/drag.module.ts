import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragPageComponent} from './drag-page/drag-page.component';
import {RouterModule, Routes} from '@angular/router';
import {DragulaModule} from 'ng2-dragula';

const routes: Routes = [
  {path: '', component: DragPageComponent}
];

/**
 * Separate module with lazy loading
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragulaModule
  ],
  declarations: [DragPageComponent]
})
export class DragModule {
}
