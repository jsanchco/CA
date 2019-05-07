import { Component, ViewChild, ElementRef, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

// Models
import { Car } from '../../../../shared/models/car.model';

// Services
import { TranslationService } from '../../../../shared/services/translation.service';
import { ToastType, ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-car-customization',
  templateUrl: './car-customization.component.html',
  styleUrls: ['./car-customization.component.scss']
})

export class CarCustomizationComponent implements OnInit {

  @Input() public car: Car;
  @Output() public updateCar = new EventEmitter<Car>();

  public customCarForm: FormGroup;
  public isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private translationService: TranslationService,
    private toastService: ToastService) {
  }

  ngOnInit() {
    this.customCarForm = this.formBuilder.group({
      model: [this.car.model, Validators.required],
      maxSpeed: [this.car.maxSpeed, [Validators.required, this.validateMaxSpeed]]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.customCarForm.get(controlName);
    if (controlName === 'model' && control.touched && control.errors != null) {
      error = 'El modelo no puede ser un valor nulo';
    }
    if (controlName === 'maxSpeed' && control.errors != null) {
      error = control.errors.number;
    }
    return error;
  }

  private validateMaxSpeed(control: AbstractControl) {
    const maxSpeed = parseInt(control.value, 10);
    let error = null;
    if (maxSpeed  < 0 || maxSpeed > 200) {
      error = { ...error, number: 'La velocidad debe ser mayor que 0 y menor que 200' };
    }
    return error;
  }

  public submitCustomCarForm(): void {
    this.isSubmitted = true;
    if (this.customCarForm.valid) {
      this.car = Object.assign({}, this.customCarForm.value);
      this.updateCar.emit(this.car);
      this.toastService.showToast(
        this.translationService.translate('correct-form'),
        ToastType.Success
      );
    } else {
      this.toastService.showToast(
        this.translationService.translate('incorrect-form'),
        ToastType.Error
      );
    }
  }
}
