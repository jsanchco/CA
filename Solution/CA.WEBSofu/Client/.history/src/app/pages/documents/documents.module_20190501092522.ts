import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsPageComponent } from './documents-page/documents-page.component';
import { DocumentUploadComponent } from './documents-page/document-upload/document-upload.component';

import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [DocumentsPageComponent, DocumentUploadComponent],
  imports: [CommonModule, DocumentsRoutingModule, UploaderModule]
})

export class DocumentsModule { }
