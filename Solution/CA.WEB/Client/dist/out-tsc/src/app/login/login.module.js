var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                LoginRoutingModule,
                MatInputModule,
                MatCheckboxModule,
                MatButtonModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ],
            declarations: [LoginComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=login.module.js.map