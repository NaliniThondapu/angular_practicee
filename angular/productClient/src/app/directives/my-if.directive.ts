import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private tempRef: TemplateRef<any>, private contaref: ViewContainerRef) { }

  //the name must be the selector name
  //if you want to give the required name need to do like below
  // @Input('appMyIf') set customIf(condition:boolean){
  @Input() set appMyIf(condition: boolean) {
    if (condition) {
      this.contaref.createEmbeddedView(this.tempRef);
    } else {
      //clear the view
      this.contaref.clear()
    }

  }

}
