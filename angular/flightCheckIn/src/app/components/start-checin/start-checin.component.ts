import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CheckinServiceService } from 'src/app/services/checkin-service.service';

@Component({
  selector: 'app-start-checin',
  templateUrl: './start-checin.component.html',
  styleUrls: ['./start-checin.component.css']
})
export class StartChecinComponent {
  reservationId: number = 0;

  constructor(private service: CheckinServiceService, private route: Router) { }

  public onClick() {
    this.service.getReservation(this.reservationId).subscribe((res: any) => {
      this.service.data = res;
      this.route.navigate(['checkIn'])

    })

  }

}
