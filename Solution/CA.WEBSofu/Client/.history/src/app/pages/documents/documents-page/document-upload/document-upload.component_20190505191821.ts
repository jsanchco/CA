import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../../../shared/services/storage.service';

import { Car } from '../../../../shared/models/car.model';

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

  public onUploading(args: any) {
    args.currentRequest.setRequestHeader('Authorization', 'Bearer ' + this.storageService.getCurrentSession().token);

    const actualCar: Car = {
      model: '',
      currentSpeed: 0,
      maxSpeed: 0
    }
    const data = [];
    data.push({ car: actualCar });
    args.customFormData = data;
  }
}
