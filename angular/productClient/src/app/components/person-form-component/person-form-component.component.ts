import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-form-component',
  templateUrl: './person-form-component.component.html',
  styleUrls: ['./person-form-component.component.css']
})
export class PersonFormComponentComponent implements OnInit {
  public personForm: any;
  countries: string[] = ["India", "USA", "Canada"]
  ngOnInit(): void {
    this.personForm = new FormGroup({
      firstName: new FormControl('Enter UserName', [Validators.required]),
      lastName: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl('')
      })
    })
  }
}
