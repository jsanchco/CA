import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsPageComponent } from './documents-page/documents-page.component';

@NgModule({
  declarations: [DocumentsPageComponent],
  imports: [CommonModule, DocumentsRoutingModule]
})

export class DocumentsModule { }
