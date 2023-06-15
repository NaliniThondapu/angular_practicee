import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent {

  x: number;
  y: number;
  constructor() {
    this.x = 20;
    this.y = 10;
  }

  myfunction() {
    return true;
  }

}
