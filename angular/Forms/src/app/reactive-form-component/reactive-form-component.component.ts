import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent {
  basicForm: any;

  constructor(private fb: FormBuilder) {
    this.basicForm = this.fb.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required]
    })
  }

  fsubmit() {
    localStorage.setItem('user', JSON.stringify(this.basicForm.value));
    this.basicForm.reset();

  }


}
