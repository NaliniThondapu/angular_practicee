# Directives
- A directive is an attribute that enhances the capability of HTML element.
- Directives help to interact with th HTML DOM and perfomr the changes directly.
- There are 3 types of directives.

## Types
- Component
- Structural(*ngfor,*ngif,*ngswitch....)
- Attribute(ngstyle,ngclass)

## Structural Directives
## ng-template
- It is used to hold the template content that will be used by Structural directives.
- Those directives can add and remove copies of the template content based on their own logic.
# ngIfExample
- In the below example **<ng-template #haveData>** haveData is the variable name for thie entire template block. we can give any name.

## app.component.html
 ```
 <h1> Directives </h1>
<app-ngif></app-ngif>
 ```
## ngif.component.html
```
<!-- if -->
<P> If Example</P>
<div *ngIf = "show">
  <p>The show flag is true </p>
</div>

<!-- if else-->
<p>If Else Example</p>
<div *ngIf = "users.length > 0 then haveData else noData">

</div>

<ng-template #haveData>
  <ul>
    <p>We have User Data</p>
    <li *ngFor="let user of users">{{user}}</li>
  </ul>

</ng-template>

<ng-template #noData>

  <p>We do not have User Data</p>


</ng-template>

```

## ngif.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  users:any =["nalini","rama","seetha","shiva"]
  show:boolean = true;

}

```

## ngFor 
 - It is used to iterate the elements.
 - It has change detection feature. In case of any elemets got added to the list, it automatically detect the changes and displayed on the UI with out refreshing the page.
 - For [(ngModel)]  we must import **FormsModule** in app.module.ts
 
 ## Example
 
 ## ngfor.component.html
 
 ```
 <h1>ngFor</h1>
<div>
  UserName:<input type=" text" [(ngModel)] = "username">
  <button (click) = "adduser()">Add User</button>
  <ul>
    <li *ngFor = "let user of users">{{user}}</li>
  </ul>
</div>>

```

## app.component.html
```
<h1> Directives </h1>
<app-ngfor></app-ngfor>

```

## ngfor.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  users: any = ["nalini", "rama", "seetha", "hanuma"]
  username: any;

  adduser() {
    this.users.push(this.username);
  }


}

```

## app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## HiddenProperty
- We can hide the Html content on UI via "**hidden**" property and also using **ngif** 
- But the difference is hidden does not remove the elemets from DOM it will hide for the UI.
- where as **ngIf** will remove the elemets from the DOM itself.
- In real time mostly we can use **ngif** if we want to hide something.

## hiddenproperty.component.html
```
<div [hidden] = true>
    <p> I am a hidden via hidden property</p>
</div>


<div  *ngIf = "false">
  <p>I am hidden via ngIf flag</p>
</div>

```

## aoo.component.html
```
<h1> Directives </h1>

<app-hidden-property></app-hidden-property>

```

## Leading Asterisk
- The structural directories are leading eith asterisk(*) like *ngIf ,*ngFor,*ngSwitch etc

## ngSwitch
## ngSwitch.component.html

```
<select name="" id="" [(ngModel)]="selectedVal">
  <option value=""></option>
  <option *ngFor="let user of users">{{user.name}}</option>
</select>


<div [ngSwitch]="selectedVal">
  <div *ngSwitchCase="'nalini'">Nalini Selected</div>
  <div *ngSwitchCase="'nagini'">Nagini Selected</div>
  <div *ngSwitchCase="'rama'">Rama Selected</div>
  <div *ngSwitchDefault>Please selct the proper option</div>
</div>

```
## ngswitch.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {

  selectedVal : string ="";

  users:any=[{
    name:"nalini",
    value:'n'
  },
  {
    name:"nagini",
    value:'g'
  },
  {
    name:"nandini",
    value:'d'
  },
  {
    name:"rama",
    value:'r'
  }]

}
```



## ngClass and ngStyle
- we can use these to bind multiple classes into one for styling.

## ngClass Example
   
## ngclass.component.html
```
<h1>ngClass</h1>
<h1 class = "bgcolor color center">This is the header</h1>

<!-- we can write the same in another way using class binding-->
<h1 [class.bgcolor] ="true" [class.color] ="true" [class.center] ="true">This is the header</h1>

<!-- we can write the same using ngclass-->
<h1 [ngClass]="{
  bgcolor:true,
  color:true,
  center:true
}"> This is the header<h1>

```

## ngclass.component.css

```
.bgcolor{
  background-color: red;
}

.color{
  color: white;
}

.center{
  text-align: center;
}

```

## app.component.html
```
<app-ng-class></app-ng-class>
```


## ngStyle Example
## ngstyle.component.html
```
<h1>Ng Style</h1>

<!-- this is normal style binding-->
<h1 [style.backgroundColor] = "true? 'red':'green'"
[style.color] = "true?'white':'black'"
[style.textAlign] = "true?'center':'right'">Hello World</h1>

<!-- style binding-->
<h1
[ngStyle] ="{
  backgroundColor:true?'red':'green',
  color:true?'white':'black',
  textAlign:true?'center':'right'
}">Hello world</h1>

```

## app.component.html

```
<h1> Directives </h1>
<app-ng-style></app-ng-style>

```

## safeTraversalOperator(?)
 - where ever we suspect that , the data for some of the fields are not receieved yet will get in some time in that case we can use this operator.
 - In the below example **user.name** , initially name property not avalible in the user , but trying to display on the UI. 
 - In this case , on UI did not find any issues but on console throw some error like "unable to read name" property.
 - To avoid these errors we can use this operator(?) , because of this it will wait some time the value is receieved and then display the data.
 - For example , Login page. Without login the username not available till login but we are trying to display this username on right side. In this cases it will wait till
 - the user got login and then we can display this.
## safe-traversal-operator.component.html

```
<button (click)=" displayData()">Display Data</button>
<br>
{{user?.name}}
<br>
{{user?.city}}

```
## safe-traversal-operator.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-travel-operator',
  templateUrl: './safe-travel-operator.component.html',
  styleUrls: ['./safe-travel-operator.component.css']
})
export class SafeTravelOperatorComponent {

  user: any;

  displayData(){
    this.user={
      name:"nalini",
      city:"hyd"
    }
  }

}

```

## app.component.html

```
<h1> Directives </h1>
<app-safe-travel-operator></app-safe-travel-operator>

```

# Custom Attribute Directives
- In custom attribute directives **ElementRef** to form the styles.
 ## Example
 
 ## apply.color.directive.ts
 ```
 import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplyColor]'
})
export class ApplyColorDirective {

  constructor(private eleref: ElementRef) {
    eleref.nativeElement.style.color = "white"
    eleref.nativeElement.style.backgroundColor = 'red'
    eleref.nativeElement.style.textAlign = "center"
  }

}

```
## custom-attribute-directive.component.html
```
<p>custom-attribute-directive works!</p>
<h1 appApplyColor> Custom Attribute Directive</h1>

```
## app.component.html

```
<h1> Directives </h1>
<app-custom-attribute-directive></app-custom-attribute-directive>

```

## Custom Structural Directive
- In these directives we need to use **TemplateRef<>** and **ViewContainerRef**
- ViewContainerRef deals with the DOM
- TemplateRef deals with data which we need to use to display on UI

## Example

## custom-structural-directive.component.html
```

<div *ngIf = "users.length>0">
  <ul>
    <li *ngFor = "let user of users">{{user}}</li>
  </ul>
</div>


<div *appCustomIf = "users.length>0">
  <ul>
    <li *ngFor = "let user of users">{{user}}</li>
  </ul>
</div>

```

## custom-if.directive.ts

```
import { Directive, TemplateRef, ViewContainerRef ,Input} from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor(private tempRef:TemplateRef<any>,private vcr:ViewContainerRef) { }

  @Input() set appCustomIf(shouldAdd:boolean){
    if(shouldAdd){
      this.vcr.createEmbeddedView(this.tempRef)
    }
  }

}

```