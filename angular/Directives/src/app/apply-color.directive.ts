import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplyColor]'
})
export class ApplyColorDirective {

  constructor(private eleref: ElementRef) {
    eleref.nativeElement.style.color = "white"
    eleref.nativeElement.style.backgroundColor = 'red'
    eleref.nativeElement.style.textAlign = "center"
  }

}
