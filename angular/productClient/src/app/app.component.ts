import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'productClient';
  products: any;
  constructor(private ps: ProductDataService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts() {
    console.log("Get the products")
    this.ps.getProducts().subscribe((res: any) => {
      this.products = res;

    })
  }
}




