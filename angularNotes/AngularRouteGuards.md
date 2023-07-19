## RouteGuards
- It will take care of the security of an application.
- we can use the angualr guards to control, wheather the user has authorizd access to navigate to the routes.
- It will check weather ther user is valid user or not to access the application or module.
- To generate the guards we can use the below command

## Types Of Guards
- **CanActivate**(If we want to access perticular route , before accessing that this guard is useful to check weather the user has permissions or not to access the route).Guard Navigation to a route.
- **CanDeactivate** (Guard Navigation away from the current route)
- **Resolve**(perform route data retrival before route activation)
- **CanLoad**(Guard Navigation to a feature module loaded asynchronously)
- **CanActivateChild**(Guard navigation to a child route).

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
 ##  CanActivate :
-  This guard decides if a route can be activated (or component gets used). This guard is useful in the circumstance where the user is not authorized to navigate to the target component. Or the user might not be logged into the system
  ## CanActivateChild :
  - This guard determines whether a child route can be activated. This guard is very similar to CanActivateGuard. We apply this guard to the parent route. The Angular invokes this guard whenever the user tries to navigate to any of its child route. This allows us to check some condition and decide whether to proceed with the navigation or cancel it.
  ##  CanDeactivate: 
  - The Angular CanDeactivate guard is called, whenever we navigate away from the route before the current component gets deactivated.
  ## canDeactivate Example

  ## can-deactivate.guard.ts
  ```
import { CanActivateFn, UrlTree } from '@angular/router';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { inject } from '@angular/core';
import { GuardServiceService } from '../guard-service.service';

export const canDeactivateGuard: CanActivateFn = (route, state) => {
  const comp: GuardServiceService = inject(GuardServiceService);
  console.log(comp);
  return comp.canDeactivate();
};

```
## guard-service.service.ts
```
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {
  isSaved:boolean = false;

  constructor() { }

  public canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are   you sure?');
      return of(result);
    }
    return of(true);
  }
}
```
## user-details.component.ts
```
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardServiceService } from 'src/app/guard-service.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  isSaved = false;
  userDetailsForm: FormGroup;
  constructor(private gs: GuardServiceService) {
    this.userDetailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.isSaved = true;
    this.gs.isSaved = true;

  }

}
```

## app-routing.module.ts
```
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
```

## canLoad Guard
- We generally use this guard when we do not want to unauthorized user to be able to even see the source code of the module.
## Example


  

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




