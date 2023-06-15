import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective {

  constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef) { }

  @Input('appMyFor') set customFor(num: number) {
    console.log("Inside For")
    for (var i = 0; i < num; i++) {
      this.container.createEmbeddedView(this.templateRef)
    }

  }

}
