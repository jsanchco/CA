import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Login } from '../shared/models/login.model';

import { AuthenticationService } from '../shared/services/authentication.service';
import { StorageService } from '../shared/services/storage.service';

import { Router } from '@angular/router';
import { Session } from '../shared/models/session.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted: Boolean = false;
    public errorInLogin: Boolean = false;
    public error: {
        message: string,
        messageError: string,
        name: string,
        ok: Boolean,
        status: number,
        statusText: string,
        url: string
    } = null;

    constructor(
        private authenticationService: AuthenticationService,
        private storageService: StorageService,
        private router: Router,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.errorInLogin = false;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
          });
    }

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
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
