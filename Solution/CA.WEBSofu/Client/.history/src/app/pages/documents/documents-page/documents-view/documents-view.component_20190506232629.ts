import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

// Services
import { ToastType, ToastService } from '../../../../shared/services/toast.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { DocumentsService } from '../../../../shared/services/documents.service';

// Helpers
import { saveFile } from '../../../../shared/helpers/file-download';

@Component({
  selector: 'app-documents-view',
  templateUrl: './documents-view.component.html',
  styleUrls: ['./documents-view.component.scss']
})

export class DocumentsViewComponent implements OnInit {

  @ViewChild('toast') toast: ElementRef;

  constructor(
    private storageService: StorageService,
    private documentsService: DocumentsService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  openFile(): void {
    const url = this.storageService.getBaseApiUrl() + 'documents/gettestfile';
    this.documentsService.getDocument(url).subscribe(fileData => {
      saveFile(fileData, 'test.pdf');
    }, error => {
        this.toastService.showToast(
          this.toast.nativeElement,
          error.messageError,
          ToastType.Error);
    });
  }
}
