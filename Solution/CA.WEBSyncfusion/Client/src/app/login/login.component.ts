import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

// Models
import { Login } from '../shared/models/login.model';
import { Session } from '../shared/models/session.model';
import { Error } from '../shared/models/error.model';

// Services
import { AuthenticationService } from '../shared/services/authentication.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public errorInLogin: Boolean = false;
  public error: Error = null;

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submitLogin(form: NgForm): void {
    this.submitted = true;
    this.error = null;
    localStorage.setItem('isLoggedin', 'true');
    if (this.loginForm.valid) {
        this.authenticationService.login(new Login(this.loginForm.value)).subscribe(
          data => this.correctLogin(data),
          error => {
            // this.error.message = error.message;
            // this.error.messageError = error.error.message;
            this.errorInLogin = true;
          });
    }
  }

  private correctLogin(data: Session) {
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/dashboard']);
  }
}
