## Input and output properties
-  These are the decorators can be used to pass the data between two different components, 
if  the components have relationship Like parent and child or sibling (both are in the same module).
-  why we need to pass the data between components , for reusability.
 For example, the userID at the time login need to display this username across all the components that why we need to tranform this between the components.
-  Any component that we can create , is the child for the **app** component.

# Passing The data from parent to Child
- To pass the data from parent to child we need to use **@Input()** decorator.
# @Input() decorator
- **app** component is parent component. we have data in this parent component like below
- we need to pass this data to the child component.
- For this first we need to create **@Input() paramentername : datatype** in the child component.
- we need to bind parent component data to the child, by adding **<app-child [names]="data"></app-child>** in the parent component html or instead of using templateurl
we can use **template** to write the html using backticks(``).


## child.component.ts
  - In the below we can use the **template** to build the html instead of wrtiting it in the html which was present in **templateUrl** path.This is also possible.But in real time we can not use.
  
```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template: `
  {{names | json}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() names: any;

}


```

## app.component.ts(Parent)
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<app-child [names]="data"></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IO_Latest';
  data = [
    {name:"nalini"},
    {name:"rameseetha"}
  ]
}


```

# Input Property alias names
-   We can give the alias names for the input properties like below

## app.component.ts(Parent)
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<app-child [n]="data"></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IO_Latest';
  data = [
    {name:"nalini"},
    {name:"rameseetha"}
  ]
}

```

## child component

```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template: `
  {{names | json}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('n') names: any;

}

```

# Passing the data from child to parent
- Most of the time we can use parent to child or sibling to sibling.
- To pass the data from child to parent we need to use **@Output()** decorator.
- while working with **@Output()** that should be assign with one event. We need to write our customevent that shoud be emitted. This is the only way we have to do this.

## Child.component.ts

```
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  // templateUrl: './child1.component.html',
  template: `
  <button (click)="sendData()">Send Data</button>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  users = [
    { name: "nalini" },
    { name: "rama" },
    { name: "seetha" }
  ]

  @Output() onUsers = new EventEmitter<any>();

  sendData() {
    this.onUsers.emit(this.users);
  }


}
```

## Parentcomponent(app.component.ts)

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<app-child [n]="data"></app-child><br><br>
  <app-child1 (onUsers) = "handler($event)"></app-child1>

  <ol>
  <li *ngFor= "let user of childData">{{user.name}}</li>
  </ol>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IO_Latest';
  childData: any;

  //this data for parent to child
  data = [
    { name: "nalini" },
    { name: "rameseetha" }
  ]

  // this is for child to parent
  handler(childdata: any) {
    console.log(childdata);
    this.childData = childdata;

  }
}


```


