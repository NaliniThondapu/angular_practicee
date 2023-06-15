import { Component } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  deleteResponse: any
  public id: number = 0

  constructor(private ps:ProductDataService){}

  public deleteProduct(id: number) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.deleteResponse = res;
    })
  }

}
