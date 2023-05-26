import { Directive, TemplateRef, ViewContainerRef ,Input} from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor(private tempRef:TemplateRef<any>,private vcr:ViewContainerRef) { }

  @Input() set appCustomIf(shouldAdd:boolean){
    if(shouldAdd){
      this.vcr.createEmbeddedView(this.tempRef)
    }
  }

}
