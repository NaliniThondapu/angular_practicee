import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public data: any;

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.log("Client side error")
        } else {
          console.log("Server side error")
        }
      }
    )

  }

}
