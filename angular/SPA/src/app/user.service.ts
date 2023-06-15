import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInuname: any = new BehaviorSubject('');

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(environment.url);
  }

  getUser(id: any) {
    const queryParams = new HttpParams({
      fromObject: {
        id: id
      }
    })
    return this.http.get(environment.url, { params: queryParams });
  }
}
