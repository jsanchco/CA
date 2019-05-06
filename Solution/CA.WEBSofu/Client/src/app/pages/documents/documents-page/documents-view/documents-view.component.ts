import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Services
import { StorageService } from '../../../../shared/services/storage.service';
import { DocumentsService } from '../../../../shared/services/documents.service';

// Helpers
import { getFileNameFromResponseContentDisposition, saveFile } from '../../../../shared/helpers/file-download';

@Component({
  selector: 'app-documents-view',
  templateUrl: './documents-view.component.html',
  styleUrls: ['./documents-view.component.scss']
})
export class DocumentsViewComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private documentsService: DocumentsService) { }

  ngOnInit() {
  }

  openFile(): void
  {
    const url = this.storageService.getBaseApiUrl() + 'documents/gettestfile';
    this.documentsService.getDocument(url).subscribe(fileData => 
    {
      saveFile(fileData, 'test.pdf');
    });
  } 
}
