import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
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
    private router: Router,
    private formBuilder: FormBuilder) {
      // this.loginForm = new FormGroup({
      //   'username': new FormControl('', [FormValidators.required]),
      //   'password': new FormControl('', [FormValidators.required])
      // });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    document.getElementById('formId').addEventListener(
      'submit',
      (e: Event) => {
        e.preventDefault();
        if (!this.loginForm.valid) {
          Object.keys(this.loginForm.controls).forEach(field => {
            const control = this.loginForm.get(field);
            control.markAsTouched({ onlySelf: true });
          });
        }
      });
  }

  public submitLogin(form: NgForm): void {
    this.submitted = true;
    localStorage.setItem('isLoggedin', 'true');
    if (this.loginForm.valid) {
      this.authenticationService.login(new Login(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => {
          this.errorInLogin = true;
          this.toastObj.width = '100%';
          this.toastObj.position.X = 'Center';
          this.toastObj.position.Y = 'Bottom';
          this.toastObj.show(
            {
              title: 'Error',
              icon: 'e-error toast-icons',
              cssClass: 'e-toast-danger',
              content: error.messageError
            }
          );
        });
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/dashboard']);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
