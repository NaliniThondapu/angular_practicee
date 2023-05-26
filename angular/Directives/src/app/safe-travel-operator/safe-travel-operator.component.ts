import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-travel-operator',
  templateUrl: './safe-travel-operator.component.html',
  styleUrls: ['./safe-travel-operator.component.css']
})
export class SafeTravelOperatorComponent {

  user: any;

  displayData(){
    this.user={
      name:"nalini",
      city:"hyd"
    }
  }

}
