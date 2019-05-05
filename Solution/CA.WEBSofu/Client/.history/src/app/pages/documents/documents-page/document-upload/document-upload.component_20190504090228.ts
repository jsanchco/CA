import { Component, OnInit } from '@angular/core';

import { EmitType } from '@syncfusion/ej2-base';
import { SelectedEventArgs } from '@syncfusion/ej2-angular-inputs';

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
      removeUrl: this.storageService.getBaseApiUrl() + 'documents/removefiles'
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

  public onFileUpload: EmitType<SelectedEventArgs> = (args: any) =>  {
    // add addition data as key-value pair.
    args.customFormData = [{'name': 'Syncfusion INC'}];
  };
}
