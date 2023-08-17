import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef , private render:Renderer2) { }

  @HostListener('mouseenter')
  onMouseover(){
    this.render.setStyle(this.element.nativeElement,"margin",'5px 10px')
    this.render.setStyle(this.element.nativeElement,"padding",'30px 30px')
    this.render.setStyle(this.element.nativeElement,"transition",'0.5s')
    this.render.setStyle(this.element.nativeElement,"background-color",'green')

  }

  @HostListener('mouseleave')
  onMouseout(){
    this.render.setStyle(this.element.nativeElement,"margin",'10px 20px')
    this.render.setStyle(this.element.nativeElement,"padding",'10px 20px')
    this.render.setStyle(this.element.nativeElement,"transition",'0.5s')
  }

}
