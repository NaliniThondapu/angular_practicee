import { Component } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  getProductResponse: any

  public id: number = 0

  constructor(private ps: ProductDataService) { }

  public getProductById(id: number) {
    this.ps.getProductById(id).subscribe(res => {
      this.getProductResponse = res;
    })

  }

}
