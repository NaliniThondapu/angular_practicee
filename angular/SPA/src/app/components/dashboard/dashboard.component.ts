import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedInuname: any;

  constructor(private us: UserService) {
    this.loggedInuname = this.us.loggedInuname;

  }
  ngOnInit(): void {

    //here subscripe means access the value from the user service
    this.us.loggedInuname.subscribe((data: any) => {
      this.loggedInuname = data;
    })
  }

}
