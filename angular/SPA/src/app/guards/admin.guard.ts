import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  const auth: AuthService = inject(AuthService);
  if (auth.isUserAdmin()) {
    return true;
  }
  alert("Permission Denied for this user")
  return false

};
