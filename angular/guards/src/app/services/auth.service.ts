import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private us: UsersService) { }

  isUserLoggedIn() {
    return this.us.isUserCorrectUser();
  }

  isFormHasData() {
    if (!this.us.isRegisterFormHasData) {
      return confirm("You have unsaved changes do you want to discard the changes..?")
    } else {
      return true;
    }
  }


}
