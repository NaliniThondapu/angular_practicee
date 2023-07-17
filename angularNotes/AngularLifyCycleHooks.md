## Life Cycle Hooks
- ## ngOnChanges
    - This will execute whenever a change receieved from a parent component to a variable that is receieving a value from @Input decorator.
    - It mainy uses **simpleChanges** and **simplechange** objects.
    - The **simpleChanges** has what ever variables got changed only those information it has and the other one has bpth current and previous values.

## ngOnInit()
- ngOnInit fires once upon initialization of a component.
- It called only once.
- ngOnInit() is still called even when ngOnChanges() is not


## ngDoCheck()
- whenever any change gets detect with call by reference (object , arrays etc), the ngOnChanges() life cycle not detected it.
- The ngDoCheck() life cycle will detect this.


## ngAfterContentInit()
- This will execute only one time after ngDoCheck()  gets executed.
- It will not executes second time untill we refresh the whole page.
- Mostly this life cycle will use if we want to do any calculations only once in the whole component or
-  if we want to change any variables only once in those cases mostly will use.

## ngAfterContentChecked()
  - Called after ngAfterContentInit() and after every subsequent changes via ngDoCheck().


## ngAfterViewInit()
  - Called once after the first ngAfterContentChecked().
  - If this component has any other childs like grand childs , first the above life cycles needs to excuted first in all those grand childs then only this hook will execute.

## ngAfterViewChecked()
  - Called after the ngAfterViewInit() and after every subsequent changes via ngDoCheck().
  - Mostly this life cycle hook will use if we want to do any calculations basing on childs and grand childs variales declarations or updates.
    

## ngOnDestroy()
- Called immediately before Angular destroys the directive or component.


 ## Example
 ## app.component.ts
 ```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private number: number = 23890;
  name: String = "nalini"
  isVisible :boolean = true;

  updateVisibility(){
    this.isVisible = !this.isVisible;
  }

  user = {
    name: "Shiva",
    age: 38
  }

  //In this we are changingthe value of object so that this change is pass by refernce
  //so this change will detect by ngDoCheck()
  update() {
    this.user.name = "NaliniShiva";
  }

  // In this we are totally recreate the or replace the object this is not pas by reference
  // we are completly change the object value
  //In this case this change will detect by ngOnChanges()
  // update1(){
  //   this.user = {
  //     name: "Shanmukha",
  //     age :8
  //   }

  // }

  get counter() {
    return this.number;
  }
  set counter(value) {
    this.number = value;
  }
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}


```

## app.component.html

```
<div style="text-align: center">
  <h1>My App</h1>
  <div>
    <button (click)="increment()">Addition</button>
    <app-child *ngIf="isVisible" [myNewNumber] ="counter" [myName]="name" [user]="user"></app-child>
    <button (click)="decrement()">Subtraction</button><br>
    <a (click)="update()">Update</a><br>
    <button (click)="updateVisibility()">Show/Hide</button><br>
  </div>
</div>

```

## child.component.ts
```
import { Component, DoCheck, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck{
  private mynumber: number = 0;
  @Input() myName: String = "";

  @Input() user: any;

  @Input()
  set myNewNumber(number: number) {
    this.mynumber = number;
  }

  get myNewNumber() {
    return this.mynumber;
  }

  // Even though the child has multiple Inout parameters , what ever data got changed from the parent only those params information
  // is available in the simplecahnges object. This is good for best performence.
  //This will call every time if one or all of the parameters info got changed
  ngOnChanges(changes: SimpleChanges) {
    const newNumberChange: SimpleChange = changes['myNewNumber'];
    console.log("Previous value", newNumberChange.previousValue);
    console.log("Previous value", newNumberChange.currentValue);
    this.mynumber = newNumberChange.currentValue
  }

  ngOnInit() {
    console.log("ngOnInit Value", this.myNewNumber);
  }

  //The call by referecne changes got detected by this
  ngDoCheck() {
    console.log(this.user);
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit() will excute once only")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() was executed after ngAfterContentInit()/with out it and after every ngDoCheck() ")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() was executed after ngAfterContentChecked() ")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() was executed after ngAfterViewInit() ")
  }

  //Once this life cycle hook called the content related to this component will be removed from the UI
  ngOnDestroy(){
    console.log("Component got destroyed")
  }

}

```
## child.component.html

```
<h2>{{myNewNumber}}</h2>
<h2>{{myName}}</h2>
<h2>{{user.name}}</h2>


```
- Called immediately before Angular destroys the directive or component.
