import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  errorMessage :string = "Users are not available"

  constructor(private us: UserService) { }
  ngOnInit(): void {
    this.us.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

}
