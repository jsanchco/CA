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
import { MatDialog } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent = __decorate([
        Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialog])
    ], DialogComponent);
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map