var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                DashboardRoutingModule,
                MatGridListModule,
                StatModule,
                MatCardModule,
                MatCardModule,
                MatTableModule,
                MatButtonModule,
                MatIconModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ],
            declarations: [DashboardComponent]
        })
    ], DashboardModule);
    return DashboardModule;
}());
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map