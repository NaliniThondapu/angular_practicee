import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  reservationId: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationId = this.activatedRoute.snapshot.params['id']
  }

}
