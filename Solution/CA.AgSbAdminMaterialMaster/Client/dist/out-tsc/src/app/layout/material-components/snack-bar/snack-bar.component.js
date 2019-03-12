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
import { MatSnackBar } from '@angular/material';
var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = __decorate([
        Component({
            selector: 'app-pizza-party',
            template: "\n        <span class=\"example-pizza-party\">\n            Pizza party!!! \uD83C\uDF55\n        </span>\n    ",
            styles: [".example-pizza-party { color: hotpink; }"]
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());
export { PizzaPartyComponent };
var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500
        });
    };
    SnackBarComponent.prototype.ngOnInit = function () { };
    SnackBarComponent = __decorate([
        Component({
            selector: 'app-snack-bar',
            templateUrl: './snack-bar.component.html',
            styleUrls: ['./snack-bar.component.scss']
        }),
        __metadata("design:paramtypes", [MatSnackBar])
    ], SnackBarComponent);
    return SnackBarComponent;
}());
export { SnackBarComponent };
//# sourceMappingURL=snack-bar.component.js.map