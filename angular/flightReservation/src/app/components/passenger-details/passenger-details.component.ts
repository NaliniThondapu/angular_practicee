import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent {
  flightData: any;
  reservation: Reservation = new Reservation('', '', '', '', '', '', '', '', '')



  //using ActivateRoute we can get the ID from url
  constructor(private service: ReservationServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): any {
    this.service.getFlight(this.activatedRoute.snapshot.params['id']).subscribe((response: any) => {
      this.flightData = response;
    })

  }

  public onSubmit(): any {
    this.reservation.flightID = this.flightData.id
    console.log("reservation flight id:" + this.reservation.flightID)
    this.service.savereservation(this.reservation).subscribe((response: any) => {
      this.router.navigate(['/confirm', response.id])
    })
  }

}
