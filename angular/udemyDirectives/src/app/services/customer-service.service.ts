import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private client:HttpClient) { }

  public getCustomers():any{
    return this.client.get('https://www.w3schools.com/angular/customers.php')
  }
}

