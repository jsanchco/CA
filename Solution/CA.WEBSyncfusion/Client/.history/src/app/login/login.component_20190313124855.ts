import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

// Services
import { AuthenticationService } from '../shared/services/authentication.service';
import { StorageService } from '../shared/services/storage.service';

// Models
import { Login } from '../shared/models/login.model';
import { Session } from '../shared/models/session.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public errorInLogin: Boolean = false;
  public position: Object = { X: 'Right' };

  @ViewChild('defaulttoast')
  public toastObj: ToastComponent;

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router) {
      this.loginForm = new FormGroup({
        'check': new FormControl('', [FormValidators.required])
      });
  }

  ngOnInit() {
  }

  public submitLogin(form: NgForm): void {
    this.submitted = true;
    localStorage.setItem('isLoggedin', 'true');
    if (this.loginForm.valid) {
        this.authenticationService.login(new Login(this.loginForm.value)).subscribe(
          data => this.correctLogin(data),
          error => {
            console.log(error);
            this.errorInLogin = true;
            this.toastObj.show();
          });
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/dashboard']);
  }

  get check() {
    return this.loginForm.get('check');
  }
}
