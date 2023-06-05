import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {
  users: any;
  errorMessage: string = "Users are not available"

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.users = this.route.snapshot.data['data'] //this must match with the routing module data that is field name ]
  }

}
