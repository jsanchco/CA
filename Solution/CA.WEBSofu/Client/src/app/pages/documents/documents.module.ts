import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsPageComponent } from './documents-page/documents-page.component';
import { DocumentUploadComponent } from './documents-page/document-upload/document-upload.component';
import { DocumentsViewComponent } from './documents-page/documents-view/documents-view.component';
import { DocumentsModalComponent } from './documents-page/documents-modal/documents-modal.component';
import { DocumentsGridComponent } from './documents-page/documents-grid/documents-grid.component';

import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  declarations: [DocumentsPageComponent, DocumentUploadComponent, DocumentsViewComponent, DocumentsModalComponent, DocumentsGridComponent],
  imports: [CommonModule, DocumentsRoutingModule, UploaderModule, DialogModule]
})

export class DocumentsModule { }
