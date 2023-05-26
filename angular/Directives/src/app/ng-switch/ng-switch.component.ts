import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {

  selectedVal : string ="";

  users:any=[{
    name:"nalini",
    value:'n'
  },
  {
    name:"nagini",
    value:'g'
  },
  {
    name:"nandini",
    value:'d'
  },
  {
    name:"rama",
    value:'r'
  }]

}
