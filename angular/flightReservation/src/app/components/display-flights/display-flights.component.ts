import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
  data: any;

  constructor(private reservation: ReservationServiceService, private router: Router) {
  }

  ngOnInit() {
    console.log("Data from Service:" + this.reservation.data)
    this.data = this.reservation.data;
  }

  public onSelect(id: number) {
    this.router.navigate(['/passengerDetails/' + id])

  }

}
