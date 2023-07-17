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
