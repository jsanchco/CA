import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsPageComponent } from './documents-page/documents-page.component';
import { DocumentUploadComponent } from './documents-page/document-upload/document-upload.component';
import { DocumentsViewComponent } from './documents-page/documents-view/documents-view.component';
import { DocumentsModalComponent } from './documents-page/documents-modal/documents-modal.component';
import { DocumentsGridComponent } from './documents-page/documents-grid/documents-grid.component';

import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [DocumentsPageComponent, DocumentUploadComponent, DocumentsViewComponent, DocumentsModalComponent, DocumentsGridComponent],
  imports: [CommonModule, DocumentsRoutingModule, UploaderModule, DialogModule, GridAllModule],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService]
})

export class DocumentsModule { }
