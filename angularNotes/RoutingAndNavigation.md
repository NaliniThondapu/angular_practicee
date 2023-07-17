## Routing And Navigation 
-  **Check the videos of Mar first and sixth for the below conecpts**. Below are the concepts of Routing and navigation. Cannot able to write the notes for some points. In case of doubts need to check the videos.
- Routing in a NutShell
- Configuring routes
- Router Outlet
- Router link
- Default route
- Not-found route
- Programatic navigation
- Route Parameters
- Nested routes
- Named Router Outlet
## BootStrap
  - Bootstrap is the most popular CSS Framework for developing responsive and websites.
  - To inject this in our angular we need to include below few in the head of section of **index.html**
  - please check **SPA project for understanding**
## index.html

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>SPA</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <!-- Bootstarp related urls -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>

```

## routerLink
 - This is to link the path , to which component we can communicate when click on this.
 - **router-outlet** is used to check the path.

## navbar.component.html
```
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" routerLink="login">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="register">Register</a>
    </li>
  </ul>
</nav>
```

## Default Route
- If the application is started , by if we want to add default compoent we can add this routing like below.

## app-routing.module.ts
```
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## NotFound Route
 - If user enters wrong url we can point to perticular component.
## app-routing.module.ts

```
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
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

```

## Named Router Outlet
- If you want load multiple components , we can achieve this by Named outlets.
- For exxample, while loading contact component , as part of this we can also load Map and feedback in tha same.
- we need to mention like below

  ## app-routing.module.ts

```
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## contact.component.html

```
<h1 class="text-center"> User Management Policy</h1>
<div>
  <div class='row'>
    <div class="col-md-6">
      <router-outlet name="map"></router-outlet>
    </div>
    <div class="col-md-6">
      <router-outlet name="feeds"></router-outlet>
    </div>
  </div>

</div>

```

## Nested Routes
- Nested routing means we can display Multiple components at a time

## app-routing.module.ts

```
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## user.component.html

```
<h1 class="text-center">Users DashBoard</h1>
<div>
  <table class="table table-boardered">
    <tr class="bg-primary">
      <th>ID</th>
      <th>Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>City</th>
    </tr>
    <tr>
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.username}}</td>
      <td>{{user.email}}</td>
      <td>{{user.address.city}}</td>
    </tr>
  </table>
</div>

<div>
  <ul class="nav nav-tab">
    <li class="nav-item">
      <a class="nav-link" routerLink="address">Address</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="company">Company</a>
    </li>
  </ul>
<router-outlet></router-outlet>
</div>

```

## Programatic navigation
- This means for example, if uname and pwd got entered we need to save these to the userservice and need to load on the dashboard component.
- we can achieve this like below

## login.component.ts
```
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  basicForm: any;
  uname: string = ""
  pwd: string = ""

  constructor(private fb: FormBuilder, private router: Router, private us: UserService) {
    this.basicForm = this.fb.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required]
    })
  }

  fsubmit() {

    if (this.uname == 'nalini' && this.pwd == 'nalini') {
      //If we want send this uname to userservice
      //next means setting the value to loggedInuname of userservice
      this.us.loggedInuname.next(this.uname);
      this.router.navigate(['dashboard'])


    }
  }

}

```

## user.service.ts
```
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInuname: any = new BehaviorSubject('');
}

```

## dashboard.component.html

```
<p>dashboard works!</p>

{{loggedInuname}}

```

## dashboard.component.ts

```
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedInuname: any;

  constructor(private us: UserService) {
    this.loggedInuname = this.us.loggedInuname;

  }
  ngOnInit(): void {

    //here subscripe means access the value from the user service
    this.us.loggedInuname.subscribe((data: any) => {
      this.loggedInuname = data;
    })
  }

}

```

## Get the values from the Route path
-we can get the route params like below

## user.component.ts

```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  id: any;

  constructor(private us: UserService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    //will get the params from the router path
    this.id = this.route.snapshot.params['id']
    console.log(this.route.queryParams);
    this.us.getUser(this.id).subscribe(res => {
      this.user = res
    })

  }

}
```
## user.service.ts

```
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInuname: any = new BehaviorSubject('');

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(environment.url);
  }

  getUser(id: any) {
    const queryParams = new HttpParams({
      fromObject: {
        id: id
      }
    })
    return this.http.get(environment.url, { params: queryParams });
  }
}

```






 
