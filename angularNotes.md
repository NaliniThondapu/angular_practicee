## Basic commands

```
ng new FirstApp --- to create the new angular app
ng serve  -- to start the application, by defult the port is 4200
ng serve --port 4500 --- to start the application with required port
we can write the above commanda like below as well
ng s --port 4500
ng generate component <componentname> --- this command is used to create the component
ng generate service <servicename> -- is used to create the services

```

## Package.json
- It has all the project dependencies.
- In case of any new libraries added to our node modules , the dependency need to add in this package.json if not available
- It has dependencies and devdependencies. Dependencies , it has list of prduction dependencies required by angular application.
- These dependencies include Angular libraries, third-party libraries, and other modules needed for the application to function correctly
- The devDependencies section of the package.json file lists the development dependencies required for development and build processes. These dependencies include tools like TypeScript, testing frameworks, build tools, and other development-specific modules. Dev dependencies are not included in the production build of the application. Similar to production dependencies, you can manage dev dependencies using the package manager.

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






