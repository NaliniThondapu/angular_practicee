import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective {

  @Input() fontSize: string = ""
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = "red"
    eleRef.nativeElement.style.backgroundColor = "yellow"
    eleRef.nativeElement.style.fontSize = "20px"
  }

  ngAfterViewInit(): void {
    this.eleRef.nativeElement.style.fontSize = this.fontSize
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.eleRef.nativeElement.style.backgroundColor = "blue"
  }
}
