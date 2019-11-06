import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement,  'bg-info');
    this.renderer.addClass(this.elementRef.nativeElement,  'text-white');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'bg-info');
    this.renderer.addClass(this.elementRef.nativeElement,  'text-white');
  }

}
