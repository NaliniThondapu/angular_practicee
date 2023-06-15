import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { HelloServiceService } from 'src/app/services/hello-service.service';
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-multipleservices',
  templateUrl: './multipleservices.component.html',
  styleUrls: ['./multipleservices.component.css']
})
export class MultipleservicesComponent implements OnInit {

  public customerResponse: any;
  public helloResponse: any

  constructor(private hello: HelloServiceService, private customer: CustomerServiceService) { }

  ngOnInit(): void {
    this.hello.helloService().subscribe((res: any) => {
      this.helloResponse = res;
    })
    this.customer.getCustomers().subscribe((res: any) => {
      this.customerResponse = res;
    })


    //using forkJoin function we can call multiple services parallely
    //this response has array of responses
    // forkJoin([this.hello.helloService(), this.customer.getCustomers()])
    //   .subscribe(response => {
    //     this.helloResponse = response[0]
    //     this.customerResponse = response[1]

    //   }

    //   )
  }

}
