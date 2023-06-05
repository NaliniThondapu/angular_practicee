import { CanActivateFn } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { inject } from '@angular/core';

export const unsavedGuard: CanActivateFn = (route, state) => {
  const component: RegisterComponent = inject(RegisterComponent);
  if (!component.isDirty) {
    return false;
  }
  alert("There are some unsaved changes");
  return true;
};
