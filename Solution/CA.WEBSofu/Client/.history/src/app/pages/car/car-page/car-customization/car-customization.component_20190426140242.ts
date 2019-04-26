import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { FormValidators } from '@syncfusion/ej2-angular-inputs';

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
      maxSpeed: ['', Validators.required]
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
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
