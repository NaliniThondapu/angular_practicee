import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm: any;
  username: string = "";
  lastname: string = ""
  isUserFormDirty: boolean = false;

  constructor(private fb: FormBuilder, private route: Router, private us: UsersService) {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    })
  }

  fsubmit() {
    if (this.username || this.lastname) {
      this.us.isRegisterFormHasData = true;
    }
    this.us.username = this.username;
    this.route.navigate(['welcome'])
  }

}
