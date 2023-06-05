import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // loggedInuname: any = new BehaviourSubject('')
  loggedInuname: any = 'nalini'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getUser(id: any) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }
}
