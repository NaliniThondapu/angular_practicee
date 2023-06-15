import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  choice: number;
  students: any;

  constructor() {
    this.choice = 6
    this.students = [{ fname: "Nalini", lname: "Thondapu", score: 90 }, { fname: "Shiva", lname: "Juturi", score: 90 }]
  }
}
