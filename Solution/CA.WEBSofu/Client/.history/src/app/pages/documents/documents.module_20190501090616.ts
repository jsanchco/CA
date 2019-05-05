import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsPageComponent } from './documents-page/documents-page.component';
import { DocumentUploadComponent } from './documents-page/document-upload/document-upload.component';

@NgModule({
  declarations: [DocumentsPageComponent, DocumentUploadComponent],
  imports: [CommonModule, DocumentsRoutingModule]
})

export class DocumentsModule { }
