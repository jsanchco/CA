var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                GridRoutingModule,
                MatCardModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ],
            declarations: [GridComponent]
        })
    ], GridModule);
    return GridModule;
}());
export { GridModule };
//# sourceMappingURL=grid.module.js.map