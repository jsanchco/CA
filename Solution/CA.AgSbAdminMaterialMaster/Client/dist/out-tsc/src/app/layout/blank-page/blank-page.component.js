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
var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () { };
    BlankPageComponent = __decorate([
        Component({
            selector: 'app-blank-page',
            templateUrl: './blank-page.component.html',
            styleUrls: ['./blank-page.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());
export { BlankPageComponent };
//# sourceMappingURL=blank-page.component.js.map