import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  flightUrl: string = "http://localhost:8080/flightServices/flightsByDepartureTime"
  flightByIdurl: String = "http://localhost:8080/flightServices/flight"
  reservationsurl: string = "http://localhost:8080/flightServices/reservations"
  data:any

  constructor(private _httpClient: HttpClient) { }

  public getFlights(criteria: any): any {
    return this._httpClient.get(this.flightUrl + "?from=" + criteria.from + "&to=" + criteria.to + "&dateOfDeparture=" + criteria.departureDate)

  }

  public getFlight(id: number): any {
    return this._httpClient.get(this.flightByIdurl + "/" + id);

  }

  public savereservation(reservation: any) {
    console.log(reservation.flightID)
    console.log(reservation.passengerFirstName)
    return this._httpClient.post(this.reservationsurl, reservation)
  }

}
