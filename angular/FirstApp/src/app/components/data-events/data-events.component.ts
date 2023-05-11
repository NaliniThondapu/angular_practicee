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

  //Attribute Binding
  isDisabled: boolean = true;

  //style Binding
  bg_color: string = "black"
  txt_color: string = "white"

  //class binding
  blApplyClass = false

  //event binding
  eventBinding() {
    alert("Event binding got clicked")
  }

  //twoway binding
  username1: string = "kumar"

  getUserName() {
    alert(this.username1);
  }


}
