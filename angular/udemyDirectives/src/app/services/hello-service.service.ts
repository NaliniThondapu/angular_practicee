import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private client: HttpClient) { }

  public helloService(): any {
    return this.client.get('http://test-routes.herokuapp.com/test/hello')
  }
}
