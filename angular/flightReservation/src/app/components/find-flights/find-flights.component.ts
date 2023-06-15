import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/model/criteria';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent {
  //here we are creating the criteria object once user entered on UI these object ha values because of ngModel
  criteria: Criteria = new Criteria("", "", "")
  //the router will route to another component
  constructor(private reservation: ReservationServiceService, private router: Router) {

  }
  public onSubmit() {
    this.reservation.getFlights(this.criteria).subscribe((response: any) => {
      this.reservation.data = response
      console.log(response)
      this.router.navigate(['/displayFlights'])
    })

  }


}
