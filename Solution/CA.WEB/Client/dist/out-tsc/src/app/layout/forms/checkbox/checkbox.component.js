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
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent = __decorate([
        Component({
            selector: 'app-checkbox',
            templateUrl: './checkbox.component.html',
            styleUrls: ['./checkbox.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map