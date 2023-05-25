import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template: `
  {{names | json}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('n') names: any;

}
