import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import { PageOneComponent } from './components/page-one/page-one.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'page-one',
    component: PageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
