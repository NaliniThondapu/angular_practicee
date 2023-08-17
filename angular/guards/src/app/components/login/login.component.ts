import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private us: UsersService, private route: Router) { }

  onSubmit() {
    this.us.username = this.username;
    this.us.password = this.password;
    if (this.us.isUserCorrectUser()) {
      this.route.navigate(['welcome'])
    }else{
      alert("Invalid user")
    }
  }

}
