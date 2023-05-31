import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  @Input() sellers :string[]

  constructor(){
    this.sellers=[]
  }

}
