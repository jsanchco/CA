import { Injectable, Inject } from '@angular/core';
import { Toast, ToastModel } from '@syncfusion/ej2-notifications';
import { DOCUMENT } from '@angular/common';

// Services
import { TranslationService } from './translation.service';

export enum ToastType {
  Error = 1,
  Information,
  Success,
  Warning
}
 
@Injectable()
 
export class ToastService {
  public toastInstance: Toast;

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
    private translationService: TranslationService) {
  }
  
  // To create the toast component
  createToast: Function = (model: ToastModel): Toast => {
    this.toastInstance = new Toast(model, this.document.getElementById('ej2Toast'));

    return this.toastInstance
  };
  
  // To show the toast component
  showToast: Function = (content: string, type: ToastType) => {
    this.toastInstance = this.createToast();
    this.toastInstance.width = '100%';
    this.toastInstance.position.X = 'Center';
    this.toastInstance.position.Y = 'Bottom';
    switch (type) {
      // Error
      case ToastType.Error:
        this.toastInstance.title = this.translationService.translate('error');
        this.toastInstance.content = content;
        this.toastInstance.cssClass = 'e-toast-danger';
        this.toastInstance.icon = 'e-error toast-icons';

        break;

      // Information / Success
      case ToastType.Information:
      case ToastType.Success:
        this.toastInstance.title = this.translationService.translate('information');
        this.toastInstance.content = content;
        this.toastInstance.cssClass = 'e-toast-success';
        this.toastInstance.icon = 'e-success toast-icons';
        
        break;

      // Warning
      case ToastType.Warning:
        this.toastInstance.title = this.translationService.translate('warning');
        this.toastInstance.content = content;
        this.toastInstance.cssClass = 'e-toast-warning';
        this.toastInstance.icon = 'e-warning toast-icons';
        
        break;
    
      // Information
      default:
        this.toastInstance.title = this.translationService.translate('information');
        this.toastInstance.content = content;
        this.toastInstance.cssClass = 'e-toast-success';
        this.toastInstance.icon = 'e-success toast-icons';

        break;
    }
    this.toastInstance.show();
  }
 
  // To hide the toast component
  hideToast: Function = () => {
    if (this.toastInstance) {
      this.toastInstance.hide();
    }
  }
 
  // To hide the all toast component
  hideToastAll: Function = () => {
    if (this.toastInstance) {
      this.toastInstance.hide('All');
    }
  }
}