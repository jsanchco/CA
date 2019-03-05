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
import { FormControl } from '@angular/forms';
var ToolTipComponent = /** @class */ (function () {
    function ToolTipComponent() {
        this.positionOptions = [
            'after',
            'before',
            'above',
            'below',
            'left',
            'right'
        ];
        this.position = new FormControl(this.positionOptions[0]);
    }
    ToolTipComponent.prototype.ngOnInit = function () { };
    ToolTipComponent = __decorate([
        Component({
            selector: 'app-tool-tip',
            templateUrl: './tool-tip.component.html',
            styleUrls: ['./tool-tip.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ToolTipComponent);
    return ToolTipComponent;
}());
export { ToolTipComponent };
//# sourceMappingURL=tool-tip.component.js.map