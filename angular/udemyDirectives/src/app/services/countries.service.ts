import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


// this  Injectable decorator tells the angular , this perticular object can be created at run time and it should be injected
//into other components when required that is dependency injection
@Injectable({
  //providein property will tell angular to use the root dependency injection module to create the objects
  // and injects it in the diffe components

  //if we want we can use our own custom modules also.
  //we need to add our custom module under providers of app.module.ts and add that name instead of root
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  public getCountries(): any {
    return this.httpClient.get('https://restcountries.com/v3.1/all')
  }
}
