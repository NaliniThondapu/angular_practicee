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

  movie = {
    title: 'avenger',
    director: 'john',
    plot: 'CRIME',
    subscriber: 1645622,
    budget: 545562164,
    year: new Date()
  }

  param: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
