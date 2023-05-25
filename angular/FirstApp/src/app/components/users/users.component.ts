import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = ["rama", "seetha", "hanuma","navya"];
  userObjects: any = [
    {
      name: "nalini",
      place: "hyd"
    },
    {
      name: "shiva",
      place: "hyd"
    },
    {
      name: "rama",
      place: "hyd"
    }
  ]


  constructor(private user: UsersService) { }
  //this is just like iifes
  ngOnInit(): void {
    this.user.getAllUsers().subscribe((res) => {
      this.users = res
    })
  }

}
