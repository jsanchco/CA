import { Component, OnInit } from '@angular/core';

// Services
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

  constructor(
    private storageService: StorageService,
    private documentsService: DocumentsService) { }

  ngOnInit() {
  }

  openFile(): void {
    const url = this.storageService.getBaseApiUrl() + 'documents/gettestfile';
    this.documentsService.getDocument(url).subscribe(fileData => {
      saveFile(fileData, 'test.pdf');
    }, err => {
        console.log('hello!!!' + err)},
      () => console.log('yay'));
  }
}
