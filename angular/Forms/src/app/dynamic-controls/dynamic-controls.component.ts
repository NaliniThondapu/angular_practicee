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
