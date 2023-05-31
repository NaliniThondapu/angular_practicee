import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl('')
    })
  })

  get f() {
    return this.loginForm.controls;
  }

  formSubmit(data: any) {
    console.log(data.value);
    this.loginForm.reset();

  }

}
