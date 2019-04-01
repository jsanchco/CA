import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthenticationService } from '../../shared/services/authentication.service';
import { StorageService } from '../../shared/services/storage.service';
import { TranslationService } from '../../shared/services/translation.service';
import { WaitService } from '../../shared/services/wait.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private translationService: TranslationService,
    private waitService: WaitService,
    private router: Router) {

  }

  ngOnInit() {
  }

}
