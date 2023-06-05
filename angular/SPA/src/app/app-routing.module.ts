import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { MapComponent } from './components/map/map.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { ResolveComponent } from './components/resolve/resolve.component';
import { resolveGuard } from './guards/resolve.guard';
import { unsavedGuard } from './guards/unsaved.guard';

const routes: Routes = [
  //default Path
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent,
    //loading multiple components along with contact with named outlets
    children: [
      {
        outlet: 'map',
        path: 'map',
        component: MapComponent
      },
      {
        outlet: 'feeds',
        path: 'feedback',
        component: FeedbackComponent
      }
    ]
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [authGuard]
  },
  {
    path: "user/:id",
    component: UserComponent,
    //configuaring canactivatechild guard(admin)
    canActivateChild: [adminGuard],

    //configuring nested routes/Components
    //Nested routing means we can display Multiple components at a time

    children: [
      //default child component loading
      // {
      //   path: '',
      //   redirectTo: 'address',
      //   pathMatch: 'full'

      // },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      }
    ]
  },
  {
    path: "resolve",
    component: ResolveComponent,
    resolve:{
      data:resolveGuard
    }
  },
  {
    path: "register",
    component: RegisterComponent
    // canDeactivate:[unsavedGuard]
  },

  //If the user entered the wrong url need to point to not found component
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
