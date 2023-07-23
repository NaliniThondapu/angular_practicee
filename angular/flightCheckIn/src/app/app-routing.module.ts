import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartChecinComponent } from './components/start-checin/start-checin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'startCheckIn',
    component: StartChecinComponent
  },
  {
    path: 'checkIn',
    component: CheckinComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }