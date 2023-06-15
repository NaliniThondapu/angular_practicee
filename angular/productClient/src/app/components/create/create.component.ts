import { Component } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public createResponse: any
  public id: number = 0
  public name: string = ''
  public description: string = ''
  public price: number = 0

  constructor(private ps: ProductDataService) { }

  public createProduct(product: any) {
    this.ps.createProduct(product).subscribe(res => {
      this.createResponse = res;
    })
  }

}
