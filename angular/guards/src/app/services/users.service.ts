import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "https://jsonplaceholder.typicode.com/users"
  username: string = ""
  password: string = ""
  isRegisterFormHasData:boolean = false;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url);
  }

  public isUserCorrectUser(): boolean {
    if (this.username == "nalini" && this.password == "nalini") {
      return true;
    }
    return false;
  }
}
