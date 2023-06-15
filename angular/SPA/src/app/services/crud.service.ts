import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(private http: HttpClient) { }

  //GET
  getAllEmployees() {
    return this.http.get('http://localhost:3000/emps');
  }

  //POST
  createEmployee(empObj: any) {
    return this.http.post("http://localhost:3000/emps", empObj)
  }

  //DElete
  deleteEmployee(id: number) {
    return this.http.delete("http://localhost:3000/emps/" + id);
  }

  getEmployee(id: number) {
    return this.http.get('http://localhost:3000/emps/' + id);
  }

  //PUT
  updateEmployee(empObj: any) {
    return this.http.put('http://localhost:3000/emps/' + empObj.id, empObj)
  }

}
