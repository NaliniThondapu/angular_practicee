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
