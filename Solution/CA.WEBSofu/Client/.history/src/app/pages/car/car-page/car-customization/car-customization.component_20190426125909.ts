import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl
} from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-car-customization',
  templateUrl: './car-customization.component.html',
  styleUrls: ['./car-customization.component.scss']
})

export class CarCustomizationComponent implements OnInit {

  public customCarForm: FormGroup;

  constructor() {
    this.customCarForm = new FormGroup({
      'model': new FormControl('', [FormValidators.required]),
      'maxSpeed': new FormControl('', [FormValidators.required])
    });
  }

ngOnInit() {
  document.getElementById('formId').addEventListener(
    'submit',
    (e: Event) => {
      e.preventDefault();
      if (!this.customCarForm.valid) {
        Object.keys(this.customCarForm.controls).forEach(field => {
          const control = this.customCarForm.get(field);
          control.markAsTouched({ onlySelf: true });
        });
      }
  });
}

public submitCustomCarForm(form: NgForm): void {
    if (this.customCarForm.valid) {
      console.log('Formulario correcto');
    } else {
      console.log('Formulario incorrecto');
    }
  }
}
