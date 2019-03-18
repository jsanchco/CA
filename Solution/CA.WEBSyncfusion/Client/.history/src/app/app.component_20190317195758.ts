import {
  Component, HostListener
} from '@angular/core';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private storageService: StorageService;
  constructor(storageService: StorageService) {
    this.storageService = storageService;
  }

  @HostListener('window:onbeforeunload', ['$event'])
  onBeforeUnload() {
    this.storageService.removeCurrentSession();
  }
}
