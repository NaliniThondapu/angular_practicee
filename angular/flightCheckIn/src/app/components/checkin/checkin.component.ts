import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinServiceService } from 'src/app/services/checkin-service.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  noOfBags: number = 0
  data: any
  constructor(private service: CheckinServiceService, private router: Router) { }

  ngOnInit() {
    this.data = this.service.data;
    console.log("Flight Number:" + this.data?.flight?.flightNumber)
    console.log("Flight Number:" + this.data?.flight?.departureCity)
    console.log("Flight Number:" + this.data?.flight?.arrivalCity)
  }
  public onSubmit() {

    let request = {
      "reservationID": this.data.id,
      "checkinFlag": true,
      "numberOfBags": this.noOfBags
    }

    console.log(request)

    this.service.checkin(request).subscribe((res: any) => {
      this.router.navigate(['/confirm'])
    })

  }


}
