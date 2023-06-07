## Basic commands

```
npm install --global yarn -----this command is useful to install yarn this is useful to work with express JS
ng new FirstApp --- to create the new angular app
ng serve  -- to start the application, by defult the port is 4200
ng serve --port 4500 --- to start the application with required port
we can write the above commanda like below as well
ng s --port 4500
ng generate component <componentname> --- this command is used to create the component
ng generate service <servicename> -- is used to create the services
ng generate pipe <pipes name> --- is used to generate the pipes
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned ----- this command is used in case of any execution policy error for powershell. we need open the power shell as administrator and then select A(for all) then enter.

ng g m orders --route orders --module app.module -- generate the module orders ,create the route file  for orders module and this module will create under appmodule

```

## What is single page Application

- The Application loads only once initially when the user access the web application thats why we called this angular page is called single page application.
- Once the application got loaded , everytime when user interacts with our web page,  request will be sent to the backend and but the  backend is responsible only for sending appropriate data to the frontend.
- The front end will dynamically update the html DOM with out refreshing the entire web page.
- It provides a greate user interaction and it is very fast why because once the data is loaded in the web browser we need not load again and again.
- It is easy to develop.
- Best Examples are : Facebook and gmai.


## Package.json
- It has all the project dependencies.
- In case of any new libraries added to our node modules , the dependency need to add in this package.json if not available
- It has dependencies and devdependencies. Dependencies , it has list of prduction dependencies required by angular application.
- These dependencies include Angular libraries, third-party libraries, and other modules needed for the application to function correctly
- The devDependencies section of the package.json file lists the development dependencies required for development and build processes. These dependencies include tools like TypeScript, testing frameworks, build tools, and other development-specific modules. Dev dependencies are not included in the production build of the application. Similar to production dependencies, you can manage dev dependencies using the package manager.


## package-lock.json
- It is same as package.json , along with the dependencies  it has additional information  like all node modules version and its path.

## .gitignore file
- This has what ever files we do not want to commit to the github we can add those in this file.

## tsconfig.json
- The application builds  basing on this configuration only at the time of compilation time.
- we have **strict = true** under **compilerOptions** , if it is true we must add the datatype to the variable in the class components otherwise not.

## index.html
- This is under src folder of our application "C:\Nalini\angular_practice\angular_practicee\angular\FirstApp\src\index.html".
- This is the only file which will be rendered into the browser.
- We will navigate between the components only. Not reload the page everytime thats why we can achieve single page functionality by using angular.

## assets folder
- the assets folder will have all the images and datafiles of the project.
## favicon.ico
- this is an icon which we can used as a icon for our application.

## app folder
- This is present in the below path **C:\Nalini\angular_practice\angular_practicee\angular\FirstApp\src\app**
- This **app** folder is nothing but app module. This is the main module of an application.
- This module has **app-routing.module.ts**, to create the navigation between modules using this routing ts file.
- **app.component.css** , this has styling for this app module
- **app.component.html** , this will loading into my application via index.html
- **app.component.ts** , this is the class file that means it has app component file
- **app.modules.ts**, we can import or export the modules required for our application.

## component
- Every component will contain 4 files html,css,component and spec file.

## Router outlet
- **router-outlet tag** , it will act as a placeholder to hold one component at a time basing on the given path and it is provided by the angular.
- "a routerLink="register"" , this routerLink property usage is to add this "register" in the url like "http://localhost:4200/register"
-  with the above path , it will check **app.routing.module.ts** is there any path matching with if it matches load the component otherwise not. 

## PropertyBinding
- In angular it allows to bind the property of a component to avalue or expression.
- This enables you to dynamically update the property based on changes in your application

## Example

## Component

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  customType: string = "text"
  placeHolderValue: string = "please enter user name"
  username: string = "nalini"
  prodImage: string = "https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?cs=srgb&dl=pexels-katie-burandt-1212693.jpg&fm=jpg"
  link1: string = "http://facebook.com"
}

```

## Html Of this component

```
<p>data-events works!</p>
<h1>Data And Events In angular</h1>

<h2> Property Binding</h2>
<!-- here customtype is dataevent component class variable name-->
<!-- passing the data from component to UI-->
Name:<input [type]="customType" [placeholder]="placeHolderValue" [value]="username"><br>
product Image:<img [src]="prodImage" width="500px" height="500px"><br>
Link: <a [href]="link1">Click</a>

```

## Attribute Binding
- Attribute binding in Angular allows you to bind an element's attribute to a value or expression. 
- This enables you to dynamically set attributes based on the state of your application

```
<h2>Attrbute Binding</h2>
<!-- component to html-->
<button [attr.isDisabled]="isDisabled">Submit</button>

```

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  //Attribute Binding
  isDisabled: boolean = true;
}

```

## Style Binding

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  //sty;e binding
  bg_color: string = "black"
  txt_color: string = "white"
}
```
```
<!--Style Binding class component to UI-->
<h2>Style Binding</h2>
<h3 style="background-color: black; color: white;">This is Header1</h3>
<!-- here style.backgroundColor and style.color are predefined keys -->
<h3 [style.backgroundColor]="bg_color" [style.color]="txt_color">This is Header1</h3>

```

## Class Binding
## Html
 ```
 <!-- class binding component to UI only-->
<!-- blApplyClass is true the customCSS style will applied otherwise style cannot applied-->
<h2>class Binding</h2>
<h3 [class.customCSS]="blApplyClass">This is some header</h3>

```

## component

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  //class binding
  blApplyClass = false
}

```

## css

```
.customCSS{
  background-color: coral;
  color:white
}

```

## Event Binding
- For event binding we need use **()** braces instead of **[]** like **(click)**

```
<!-- event binding UI to component-->
<h2>Event Binding</h2>
<button (click) = "eventBinding()">Click Me</button>

```

## Component
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  //event binding
  eventBinding(){
    alert("Event binding got clicked")
  }
}

```

## Two way binding
- component to html and html to component
- For two way binding we need forms module
- so, we need to import this into our **app.module.ts**. It is mandatory for two way binding.
- we can achieve two way binding "ngModel" only. If multiple elements have twoway binding all parameter name is ngmodel only but the value name is different.

## app.module.ts
```
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataEventsComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## html

```
<!-- Two way binding or banana binding with "ngModel"-->
<!-- for two way binding we need to import forms module in apps.module.ts-->
<!-- class to UI and UI to Class-->
<h2> Two way data binding</h2>
Name:<input type="text" [(ngModel)] = "username1">
<button (click)="getUserName()">Click</button>

```

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {

  //twoway binding
  username1: string = "kumar"

  getUserName() {
    alert(this.username1);
  }


}

```

## Pipes
- In angular pipes are the features that allows to transform the data in the user understanable format.
- Pipes are used to format, filter, and manipulate data before displaying it to the user. 
- Pipes are represented by the **|** symbol in Angular
- By default the pipes are pure pipes.

## Examples for Predefined Pipes

```
<h2>Pipes in Angular</h2>
{{username1 | titlecase }}

<!-- converting the object values in different formats-->
<!-- predefined pipes-->
{{movie.title | titlecase}}<br>
{{movie.director | uppercase}}<br>
{{movie.plot | lowercase}}<br>
{{movie.subscriber | number}}<br>
{{movie.budget | currency :'INR'}}<br>
{{movie.year | date:'yyyy-MM-dd'}}<br>
{{movie | json}}<br>
```

## Component
```
 username1: string = "kumar"

  movie = {
    title: 'avenger',
    director: 'john',
    plot: 'CRIME',
    subscriber: 1645622,
    budget: 545562164,
    year: new Date()
  }
```

## Custom Pipes
- we need to create the pipe under app folder , need to use the below command
- ng generate pipe pipes/getFirst50Char
- we created the **getFirst50Char** pipe under the pipes folder.
- The above pipe component looks like below.
- This will implements the "PipeTransform" interface , and must implement only one "transform" method.
- One pipe must have only one transform method.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirst50Char'
})
export class GetFirst50CharPipe implements PipeTransform {

  transform(value: string) {
    return value.substring(0, 50);
  }

}

```
## In Html
```
<!-- custom pipes-->
<!-- we are getting first 50 chars from the custompipe after that will transform into uppercase-->
{{param | getFirst50Char | uppercase}}
```

## param intialisation in the component

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  
  param: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

}

```

## Pure and Impure Pipes
### Pure Pipes
- Pure pipes are the default type of pipes in Angular.
- A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe
- By default all the pipes are pure.
- Examples of pure pipes are uppercase, lowercase, date, currency, and json.
- But always try to use pure pipes only.

### Impure Pipes
- An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure:false//making this pipe is impure
})
export class FilterpipePipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i'))) : "";
  }

}
```
```
<!-- pure and impure pipes-->
<input type="text" [(ngModel)]='searchText'>
<button (click)='addUser()'>AddUser</button>
<ul>
  <li *ngFor="let user of users | filterpipe :searchText">{{user.name}}</li>
</ul>

```

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-events',
  templateUrl: './data-events.component.html',
  styleUrls: ['./data-events.component.css']
})
export class DataEventsComponent {
  users = [
    {
      id: 100,
      name: 'nalini'
    },
    {
      id: 101,
      name: 'rama'
    },
    {
      id: 102,
      name: 'mallika'
    }
  ]
  searchText: string = "";

  getUserName() {
    alert(this.username1);
  }

  addUser() {
    this.users.push({ id: 105, name: 'malathi' })
  }


}
```


