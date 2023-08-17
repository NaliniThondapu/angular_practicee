import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  //in this decorator we need to provide html properties to bind the property to the host element
  @HostBinding('style.background') background :string = 'transparent'
  @HostBinding('style.border') border :string = 'none'

  @HostListener('mouseenter')
  onmouseenter(){
    this.background = 'pink'
    this.border='red 2px solid'
  }

  @HostListener('mouseleave')
  onmouseout(){
    this.background='transparent'
    this.border='none'
  }

}
