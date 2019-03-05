var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ChartsRoutingModule,
                Ng2Charts,
                MatCardModule,
                MatGridListModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ],
            declarations: [ChartsComponent]
        })
    ], ChartsModule);
    return ChartsModule;
}());
export { ChartsModule };
//# sourceMappingURL=charts.module.js.map