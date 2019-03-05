var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { BottomSheetOverviewComponent } from './bottom-sheet-overview/bottom-sheet-overview.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheets.component';
import { ButtonComponent } from './button/button.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialComponentsRoutingModule } from './material-components-routing.module';
import { MaterialComponentsComponent } from './material-components.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PizzaPartyComponent, SnackBarComponent } from './snack-bar/snack-bar.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MaterialComponentsRoutingModule,
                MatDialogModule,
                MatFormFieldModule,
                MatInputModule,
                FormsModule,
                MatButtonModule,
                MatListModule,
                MatBottomSheetModule,
                MatSnackBarModule,
                MatCardModule,
                ReactiveFormsModule,
                MatOptionModule,
                MatSelectModule,
                MatTooltipModule,
                MatRadioModule,
                MatSliderModule,
                MatProgressBarModule,
                MatPaginatorModule,
                MatIconModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ],
            declarations: [
                MaterialComponentsComponent,
                DialogComponent,
                DialogOverviewComponent,
                BottomSheetComponent,
                BottomSheetOverviewComponent,
                SnackBarComponent,
                PizzaPartyComponent,
                ToolTipComponent,
                PaginatorComponent,
                ProgressBarComponent,
                ButtonComponent
            ],
            entryComponents: [
                DialogOverviewComponent,
                BottomSheetOverviewComponent,
                PizzaPartyComponent
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());
export { MaterialComponentsModule };
//# sourceMappingURL=material-components.module.js.map