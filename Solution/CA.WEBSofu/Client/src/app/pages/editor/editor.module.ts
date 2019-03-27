import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorPageComponent} from './editor-page/editor-page.component';
import {RouterModule, Routes} from '@angular/router';
import {QuillModule} from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: EditorPageComponent}
];

/**
 * Separate module with lazy loading
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditorPageComponent]
})
export class EditorModule {
}
