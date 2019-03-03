var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Login } from '../shared/models/login.model';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StorageService } from '../shared/services/storage.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, storageService, router, formBuilder) {
        this.authenticationService = authenticationService;
        this.storageService = storageService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.errorInLogin = false;
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorInLogin = false;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    };
    LoginComponent.prototype.onLogin = function () {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.submitLogin = function (form) {
        var _this = this;
        this.submitted = true;
        this.error = null;
        localStorage.setItem('isLoggedin', 'true');
        if (this.loginForm.valid) {
            this.authenticationService.login(new Login(this.loginForm.value)).subscribe(function (data) { return _this.correctLogin(data); }, function (error) {
                // this.error.message = error.message;
                // this.error.messageError = error.error.message;
                _this.errorInLogin = true;
            });
        }
    };
    LoginComponent.prototype.correctLogin = function (data) {
        this.storageService.setCurrentSession(data);
        this.router.navigate(['/dashboard']);
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [AuthenticationService,
            StorageService,
            Router,
            FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map