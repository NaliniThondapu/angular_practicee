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
