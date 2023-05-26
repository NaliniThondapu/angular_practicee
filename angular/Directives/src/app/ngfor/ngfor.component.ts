import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  users: any = ["nalini", "rama", "seetha", "hanuma"]
  username: any;

  adduser() {
    this.users.push(this.username);
  }


}
