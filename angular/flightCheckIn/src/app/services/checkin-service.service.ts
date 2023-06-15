import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CheckinServiceService {
  reservationUrl: string = "http://localhost:8080/flightServices/reservations/"
  data: any;

  constructor(private http: HttpClient) { }

  public getReservation(id: number): any {
    return this.http.get(this.reservationUrl + id);

  }

  public checkin(checkInrequest: any) {
    console.log("CheckInrequest" + checkInrequest)
    return this.http.put(this.reservationUrl, checkInrequest);
  }
}
