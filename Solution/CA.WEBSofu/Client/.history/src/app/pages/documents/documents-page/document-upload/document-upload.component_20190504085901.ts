import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../../../shared/services/storage.service';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {

  public path: Object;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.path = {
      saveUrl: this.storageService.getBaseApiUrl() + 'documents/uploadfiles',
      removeUrl: this.storageService.getBaseApiUrl() + 'documents/removefiles',
      // headers: [{ Authorization: 'Bearer ' + this.storageService.getCurrentSession().token }]
    };
  }

  public onUploadSuccess(args: any): void  {
    if (args.operation === 'upload') {
        console.log('File uploaded successfully');
    }
  }

  public onUploadFailure(args: any): void  {
    console.log('File failed to upload');
  }

  public addHeaders(args: any) {
    args.currentRequest.setRequestHeader('Authorization', 'Bearer ' + this.storageService.getCurrentSession().token);
  }
}
