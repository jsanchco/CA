import { Component, OnInit } from '@angular/core';

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

  public imageBlobUrl: any;
  imageToShow: any;
  isImageLoading: boolean;

  constructor(
    private storageService: StorageService,
    private documentsService: DocumentsService,
    private toastService: ToastService) { }

  ngOnInit() {
    // this.openImage();
  }

  openFile(): void {
    const url = this.storageService.getBaseApiUrl() + 'documents/gettestfile';
    this.documentsService.getDocument(url).subscribe(fileData => {
      saveFile(fileData, 'test.pdf');
    }, error => {
        this.toastService.showToast(
          error.messageError,
          ToastType.Error);
    });
  }

  openImage(): void {
    const url = this.storageService.getBaseApiUrl() + 'documents/getimage';
    this.documentsService.getImage(url).subscribe(fileData => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageBlobUrl = reader.result;
        // const blob = new Blob([this.imageBlobUrl], { type: 'application/octet-stream' });
       }, false);
    }, error => {
        this.toastService.showToast(
          error.messageError,
          ToastType.Error);
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       this.imageToShow = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
   }

   getImageFromService() {
     const imgUrl = 'https://picsum.photos/200/300/?random';
       this.isImageLoading = true;
       const url = this.storageService.getBaseApiUrl() + 'documents/getimage';
       this.documentsService.getImage(url).subscribe(data => {
         this.createImageFromBlob(data);
         this.isImageLoading = false;
       }, error => {
         this.isImageLoading = false;
         console.log(error);
       });
   }
}
