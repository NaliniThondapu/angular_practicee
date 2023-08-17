import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  basicForm: any;
  uname: string = ""
  pwd: string = ""

  constructor(private fb: FormBuilder, private router: Router, private us: UserService) {
    this.basicForm = this.fb.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required]
    })
  }


  fsubmit() {

    if (this.uname == 'nalini' && this.pwd == 'nalini') {


      //If we want send this uname to userservice
      //next means setting the value to loggedInuname of userservice
      this.us.loggedInuname.next(this.uname);
      this.router.navigate(['dashboard'])


    }


  }

}
