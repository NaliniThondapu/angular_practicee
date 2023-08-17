import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any;

  constructor(private userservice: UsersService) { }

  ngOnInit() {
    this.userservice.getAllUsers().subscribe(data => {
      this.users = data;
    })

  }

}
