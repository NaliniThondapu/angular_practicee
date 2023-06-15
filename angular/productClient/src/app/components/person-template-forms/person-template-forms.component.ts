import { Component } from '@angular/core';

@Component({
  selector: 'app-person-template-forms',
  templateUrl: './person-template-forms.component.html',
  styleUrls: ['./person-template-forms.component.css']
})
export class PersonTemplateFormsComponent {
  firstName:string="Nalini"
  lastName:string=""
  email:string=""
  gender:string=""
  street:string=""
  city:string=""
  country:string=""

  public onSubmit(data: any) {
    console.log(data)
  }

}
