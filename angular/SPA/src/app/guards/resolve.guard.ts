import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';

export const resolveGuard: CanActivateFn = (route, state): any => {

  const us: UserService = inject(UserService);
  return us.getAllUsers();
};
