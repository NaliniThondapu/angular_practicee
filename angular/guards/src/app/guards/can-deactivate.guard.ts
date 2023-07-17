import { CanActivateFn, UrlTree } from '@angular/router';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { inject } from '@angular/core';
import { GuardServiceService } from '../guard-service.service';

export const canDeactivateGuard: CanActivateFn = (route, state) => {
  const comp: GuardServiceService = inject(GuardServiceService);
  console.log(comp);
  return comp.canDeactivate();
};
