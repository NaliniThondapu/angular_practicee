import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  username: String = "";

  constructor(private us: UsersService) {
  }

  ngOnInit() {
    this.username = this.us.username;
  }

}
