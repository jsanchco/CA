import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

// Services
import { ToastType, ToastService } from '../../../../shared/services/toast.service';
import { StorageService } from '../../../../shared/services/storage.service';

import { Car } from '../../../../shared/models/car.model';
import { Profession } from '../../../../shared/models/profession.model';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})

export class DocumentUploadComponent implements OnInit {

  public path: Object;

  constructor(
    private storageService: StorageService,
    private toastService: ToastService) {
  }

  ngOnInit() {
    this.path = {
      saveUrl: this.storageService.getBaseApiUrl() + 'documents/uploadfiles',
      removeUrl: this.storageService.getBaseApiUrl() + 'documents/removefiles'
    };
  }

  public onUploadSuccess(args: any): void  {
    if (args.operation === 'upload') {
      const message = 'File uploaded successfully';

      this.toastService.showToast(
        message,
        ToastType.Success);
    }
  }

  public onUploadFailure(args: any): void  {
    const message = 'File failed to upload';

    this.toastService.showToast(
      message,
      ToastType.Error);
  }

  public onUploading(args: any) {
    args.currentRequest.setRequestHeader('Authorization', 'Bearer ' + this.storageService.getCurrentSession().token);

    const actualCar: Car = {
      model: '',
      currentSpeed: 0,
      maxSpeed: 0
    }
    // const data = [];
    // data.push({ car: actualCar });
    // args.customFormData = data;

    const actualProfession: Profession = {
      id: 1,
      name: 'Test',
      description: 'Test Description'
    }

    const data = [];
    data.push({ profession: JSON.stringify(actualProfession) });
    args.customFormData = data;

    // const data = [];
    // data.push({ car: 'Hola' });
    // args.customFormData = data;
  }
}
