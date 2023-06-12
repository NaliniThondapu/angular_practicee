## Forms
- In angular we have two different types of forms

- TemplateDriven Forms
- Reactive Forms or Model driven forms
- Template Driven Forms drive the form using html directives. These are internally model driven forms only.
- where as in model driven forms we can build the form into Model(component) and drove into the html.

## Template Driven Forms
- These are used to perfom the validations on the form fields
- The **[(ngModel)]="fieldname"** we can also declare like **ngModel #username="ngModel"**
- To work with template driven forms we need to import **Forms** module.
- Here ngForm directive is nothingbut FormGroup like in reactive forms
- Where as ngModel and name directive ngModel creates form control object and name maps the property of the component

```
<input ngModel name="fname">
//ngModel and name are directives
//fname is component property name
```

## Example

```
<h1> Template Driven Forms</h1>
<form action="" #loginForm="ngForm">
  UserName:
  <input type="text"
  ngModel #username="ngModel" name="username" required minlength='5' maxlength="5">
  <span *ngIf = "username.touched && username.invalid">
    <span *ngIf = "username.hasError('required')" style="margin-left: 10px; color: red;">username is mandatory</span>
    <span *ngIf = "username.hasError('minlength')">UserName should contain minimum of 5 chars</span>
    <span *ngIf = "username.hasError('maxlength')">UserName should Not contain more than of 5 chars</span>
  </span>

  <br><br>

  Password:
  <input type="password"
  ngModel #password="ngModel" name="password" required minlength='5' maxlength="5">
  <span *ngIf = "password.touched && password.invalid">
    <span *ngIf = "password.hasError('required')" style="margin-left: 10px; color: red;">password is mandatory</span>
    <span *ngIf = "password.hasError('minlength')">password should contain minimum of 5 chars</span>
    <span *ngIf = "password.hasError('maxlength')">password should Not contain more than of 5 chars</span>
  </span>

  <br><br>

  <!-- this button is enabled if all the form fields are valid as per the validations-->
  <button [disabled]="loginForm.invalid">Submit</button>
</form>

```

## Reactive Forms or Model Driven Forms
- These are flexible to perfom the validations and it is flexible to pass the data from componen to UI.
- To work with these **ReactiveFormsModule** must import.
- while working with these we mostly use the FormBuilder , FormGroup,FormArray,FormControl,Validators 
- The **FormGroup** accepts the object with key and values.
- the FormGroup is valid when all the form controls are valid basing on the validations

## app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


## app.component.html

```
<app-reactive-form-component></app-reactive-form-component>

```

## reactive-form-component.component.html

```
<h1>reactive-form-component works!</h1>

<form [formGroup] = "basicForm" class="form-group" (ngSubmit)="fsubmit()">
  UserName:<input type="text" class="form-control" formControlName="uname"><br><br>
  Password:<input type="password" class="form-control" formControlName="pwd"><br><br>
  <button [disabled] = "basicForm.invalid">Submit</button>

</form>
```

## reactive-form-component.component.ts

```
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

```

## Form Validations Example

## form-validations.component.ts

```
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
```

##  form-validations.component.html

```
<h1>form-validations works!</h1>

<form action="" [formGroup]="loginForm" class="form-group" (ngSubmit) = "formSubmit(loginForm)">
  UserName:<input type="text" class="form-control" formControlName="username" id="username"
    placeholder="Enter userName"><br><br>
  <span *ngIf="f['username'].touched && f['username'].invalid">
    <span *ngIf="f['username'].errors && f['username'].errors['required']" style="color: red;">UserName is
      Required</span>
    <span *ngIf="f['username'].errors && f['username'].errors['minlength']" style="color: red;">UserName Should have
      Minimum 5 Chars</span>
  </span>

  Password:<input type="password" class="form-control" formControlName="password" id="password"
    placeholder="Enter password">
  <span *ngIf="f['password'].touched && f['password'].invalid">
    <span *ngIf="f['password'].errors && f['password'].errors['required']"
      style="margin: left 10px;color: red;">password is
      Required</span><br>
    <span *ngIf="f['password'].errors && f['password'].errors['minlength']" style="color: red;">password Should have
      Minimum 5 Chars</span><br>
  </span>

  <div formGroupName="Address">
    state:<input type="text" formControlName="state" name="state"><br><br>
    city:<input type="text" formControlName="city" name="city">
  </div>
  <button [disabled]="loginForm.invalid">Submit</button>

</form>

```
## app.component.html

```

<app-form-validations></app-form-validations>

```

## Dynamic Controls
- We can generate the controls(html elements) dynamically.
- we can generate the another form once submit the first form like that.

## dynamic-controls.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.css']
})
export class DynamicControlsComponent implements OnInit {

  productForm: any;
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([])
    })
  }
  ngOnInit(): void {
    this.addQuantity();
  }

  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: ''
    })
  }

  addQuantity(): void {
    this.quantities().push(this.newQuantity())
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
    alert("removed" + i)
  }
}

```

## dynamic-controls.component.html

```

<h1>dynamic-controls works!</h1>

<div class="container">
  <form [formGroup]="productForm">
    <p>
      <label for="name">Productname</label><br>
      <input type="text" id="name" formControlName="name" class="form-control">
    </p>

    <table class="table table-boarderd" formArrayName="quantities">
      <tr>
        <th colspan="2">Add Multiple Quantity</th>
        <th width="150px"><button type="button" (click)="addQuantity()" class="btn btn-primary"> Add More</button></th>
      </tr>
      <tr *ngFor="let quantity of quantities().controls; let i=index">
        <td>
          Quantity:<input type="text" form-control="qty" class="form-control">
        </td>
        <td>
          Price:<input type="text" form-control="price" class="form-control">
        </td>

        <button (click)="removeQuantity(i)" class="btn btn-danger">Remove {{i}}</button>


      </tr>
    </table>

    <button class="btn btn-success">Submit</button>

  </form><br>
  {{this.productForm.value | json}}

</div>

```









