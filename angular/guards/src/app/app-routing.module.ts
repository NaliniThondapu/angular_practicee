import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { authGuard } from './guards/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { candeactivateGuard } from './guards/candeactivate.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'

  },
  {
    path: 'home',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate:[candeactivateGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate:[authGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
