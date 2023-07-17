import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardServiceService } from 'src/app/guard-service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSaved = false;
  userDetailsForm: FormGroup;
  constructor(private gs: GuardServiceService) {
    this.userDetailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.isSaved = true;
    this.gs.isSaved = true;

  }

}
