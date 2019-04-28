import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-car-customization',
  templateUrl: './car-customization.component.html',
  styleUrls: ['./car-customization.component.scss']
})

export class CarCustomizationComponent implements OnInit {

  public customCarForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.customCarForm = new FormGroup({
    //   'model': new FormControl('', [FormValidators.required]),
    //   'maxSpeed': new FormControl('', [FormValidators.required])
    // });
  }

  ngOnInit() {
    this.customCarForm = this.formBuilder.group({
      model: ['', Validators.required],
      maxSpeed: ['0', [Validators.required, this.validateMaxSpeed]]
  });

  // document.getElementById('formId').addEventListener(
  //   'submit',
  //   (e: Event) => {
  //     e.preventDefault();
  //     if (!this.customCarForm.valid) {
  //       Object.keys(this.customCarForm.controls).forEach(field => {
  //         const control = this.customCarForm.get(field);
  //         control.markAsTouched({ onlySelf: true });
  //       });
  //     }
  // });
  }

  public submitCustomCarForm(): void {
    if (this.customCarForm.valid) {
      console.log('Formulario correcto');
    } else {
      console.log('Formulario incorrecto');
    }
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.customCarForm.get(controlName);
    if (controlName === 'model' && control.touched && control.errors != null) {
      error = JSON.stringify(control.errors.required);
    }
    if (controlName === 'maxSpeed' && control.errors != null) {
      error = JSON.stringify(control.errors.number.substr(0, 12));
    }
    return error;
  }

  private validateMaxSpeed(control: AbstractControl) {
    const maxSpeed = parseInt(control.value, 10);
    let error = null;
    if (maxSpeed  < 0 || maxSpeed > 200) {
      error = { ...error, number: 'La velocidad debe ser mayor que 0 y menos que 200' };
    }
    return error;
  }
}
