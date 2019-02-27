import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Login } from '../shared/models/login.model';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StorageService } from '../shared/services/storage.service';
import { Router } from '@angular/router';
import { Session } from '../shared/models/session.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted: Boolean = false;
    public error: {code: number, message: string} = null;

    constructor(
        private storageService: StorageService,
        // private authenticationService: AuthenticationService,
        private router: Router,
        private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
          });
    }

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }

    public submitLogin(): void {
        console.log('submitLogin()');
    }
}
