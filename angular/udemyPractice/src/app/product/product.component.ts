import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() parentProducts: any
  @Input() title: string = ""
  @Input() versionName: string = ""

  @Input() jokes: string[]
  @Input() puns: string[]

  constructor() {
    this.jokes = [];
    this.puns = [];
  }

}
