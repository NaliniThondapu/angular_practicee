import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  // templateUrl: './child1.component.html',
  template: `
  <button (click)="sendData()">Send Data</button>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  users = [
    { name: "nalini" },
    { name: "rama" },
    { name: "seetha" }
  ]

  @Output() onUsers = new EventEmitter<any>();

  sendData() {
    this.onUsers.emit(this.users);
  }


}
