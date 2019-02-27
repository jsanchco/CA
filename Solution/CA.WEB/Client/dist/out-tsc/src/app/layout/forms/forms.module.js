var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SliderComponent } from './slider/slider.component';
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsRoutingModule,
                MatAutocompleteModule,
                FormModule,
                ReactiveFormsModule,
                MatSlideToggleModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatFormFieldModule,
                MatSelectModule,
                MatSliderModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ],
            declarations: [
                FormsComponent,
                CheckboxComponent,
                DatePickerComponent,
                FormFieldComponent,
                SliderComponent,
                AutoCompleteComponent
            ]
        })
    ], FormsModule);
    return FormsModule;
}());
export { FormsModule };
//# sourceMappingURL=forms.module.js.map