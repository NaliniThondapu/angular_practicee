import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<app-child [n]="data"></app-child><br><br>
  <app-child1 (onUsers) = "handler($event)"></app-child1>

  <ol>
  <li *ngFor= "let user of childData">{{user.name}}</li>
  </ol>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IO_Latest';
  childData: any;

  //this data for parent to child
  data = [
    { name: "nalini" },
    { name: "rameseetha" }
  ]

  // this is for child to parent
  handler(childdata: any) {
    console.log(childdata);
    this.childData = childdata;

  }
}
