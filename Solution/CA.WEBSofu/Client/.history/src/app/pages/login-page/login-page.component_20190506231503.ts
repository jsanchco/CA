import {Component, OnInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

// Services
import { AuthenticationService } from '../../shared/services/authentication.service';
import { StorageService } from '../../shared/services/storage.service';
import { TranslationService } from '../../shared/services/translation.service';
import { WaitService } from '../../shared/services/wait.service';
import { ToastType, ToastService } from '../../shared/services/toast.service';

// Models
import { Login } from '../../shared/models/login.model';
import { Session } from '../../shared/models/session.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public errorInLogin: Boolean = false;

  @ViewChild('spin') spin: ElementRef;

  @ViewChild('toast') toast: ElementRef;

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private translationService: TranslationService,
    private waitService: WaitService,
    private toastService: ToastService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.waitService.createSpinner({
      target: this.spin.nativeElement,
    });
  }

  public submitLogin(form: NgForm): void {
    this.submitted = true;
    localStorage.setItem('isLoggedin', 'true');
    if (this.loginForm.valid) {
      this.waitService.showSpinner(this.spin.nativeElement);
      this.authenticationService.login(new Login(this.loginForm.value)).subscribe(
        data => {
          this.waitService.hideSpinner(this.spin.nativeElement);
          this.correctLogin(data);
        },
        error => {
          this.toastService.showToast(
            this.toast.nativeElement,
            error.messageError,
            ToastType.Error
          );
          this.waitService.hideSpinner(this.spin.nativeElement);
        });
    } else {
      this.toastService.showToast(
        this.toast.nativeElement,
        this.translationService.translate('incorrect-form'),
        ToastType.Error
      );
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

 public getError(controlName: string): string {
    let error = '';
    const control = this.loginForm.get(controlName);
    if (controlName === 'username' && control.touched && control.errors != null) {
      error = 'El usuario no puede ser un valor nulo';
    }
    if (controlName === 'password' && control.touched && control.errors != null) {
      error = 'El password no puede ser un valor nulo';
    }
    return error;
  }
}
