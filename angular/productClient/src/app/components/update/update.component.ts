import { Component } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  updateResponse: any

  public id: number = 0
  public name: string = ''
  public price: number = 0

  constructor(private ps:ProductDataService){}

  public updateProduct(product: any) {
    this.ps.updateProduct(product).subscribe(res => {
      this.updateResponse = res;
    })
  }

}
