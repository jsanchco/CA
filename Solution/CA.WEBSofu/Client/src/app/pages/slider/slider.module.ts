import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderPageComponent} from './slider-page/slider-page.component';
import {RouterModule, Routes} from '@angular/router';
import {NouisliderModule} from 'ng2-nouislider';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: SliderPageComponent}
];

/**
 * Separate module with lazy loading
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NouisliderModule,
    FormsModule
  ],
  declarations: [SliderPageComponent]
})
export class SliderModule {
}
