import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getProducts(): any {
    return this.http.get('http://localhost:8080/api/products/');
  }

  public createProduct(product: any) {
    return this.http.post('http://localhost:8080/api/products/', product);
  }

  public updateProduct(product: any) {
    return this.http.put('http://localhost:8080/api/products/', product);
  }

  public deleteProduct(id: number) {
    return this.http.delete('http://localhost:8080/api/products/' + id);
  }

  public getProductById(id: number) {
    return this.http.get('http://localhost:8080/api/products/' + id);
  }

}



