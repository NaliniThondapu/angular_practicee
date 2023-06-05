import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  id: any;

  constructor(private us: UserService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    //will get the params from the router path
    this.id = this.route.snapshot.params['id']
    this.us.getUser(this.id).subscribe(res => {
      this.user = res
    })

  }

}
