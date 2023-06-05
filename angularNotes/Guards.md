## Guards
- It will take care of the security of an application.
- It will check weather ther user is valid user or not to access the application or module.
- To generate the guards we can use the below command
## concepts of guards
- Route/Auth guards
- canActivate route guard
- canActivateChild Route Guard
- canDeactivate Route Guard
- Resolve route guard
- Modules/Featured modules
- LazyLoading
- canLoad Route Guard
- Authentication and authorization
- CRUD operations
- Promises
```
ng g guard <guardname>

or

ng g g <guardname>
```

## Types Of Guards
-  CanActivate
-  CanActivateChild
-  CanDeactivate
-  CanMatch

## CanActivate Example

## auth.service.ts
 
 ```
 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isUserLoggedin(){
    return true;
  }
}

```

## auth.guard.ts

```
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const auth: AuthService = inject(AuthService);
  if (auth.isUserLoggedin()) {
    return true;
  }
  alert("Permission Denied for this user")
  return false;
};

```

## app-routing.module.ts

```
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


```

## canActivateChild Guard
- It will controle the child components basing on the boolena that returned by Guard

## app-routing.module.ts

```
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

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## admin.guard.ts

```
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

```

## auth.service.ts

```
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isUserLoggedin(){
    return true;
  }

  isUserAdmin(){
    return false;
  }

}

```


## Resolve guard example

- This guard is used to change the component if Data is availble. in case if data is from other API.

## app-routing.module.ts

```
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
 
  {
    path: "resolve",
    component: ResolveComponent,
    resolve:{
      data:resolveGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


```

## resolve.component.ts

```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {
  users: any;
  errorMessage: string = "Users are not available"

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.users = this.route.snapshot.data['data'] //this must match with the routing module data that is field name ]
  }

}

```

## resolve.guard.ts

```
import { CanActivateFn } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';

export const resolveGuard: CanActivateFn = (route, state): any => {

  const us: UserService = inject(UserService);
  return us.getAllUsers();
};

```




