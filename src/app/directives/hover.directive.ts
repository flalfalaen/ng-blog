import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  public shadowBox = ' border media shadow m-1 bg-white rounded ';

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setAttribute(this.elementRef.nativeElement,  'class', this.shadowBox);
    this.renderer.addClass(this.elementRef.nativeElement,  'border');
    this.renderer.addClass(this.elementRef.nativeElement,  'media');
    this.renderer.addClass(this.elementRef.nativeElement,  'shadow');
    this.renderer.addClass(this.elementRef.nativeElement,  'ml-5');
    this.renderer.addClass(this.elementRef.nativeElement,  'bg-white');
    this.renderer.addClass(this.elementRef.nativeElement,  'rounded');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement,  'border');
    this.renderer.removeClass(this.elementRef.nativeElement,  'media');
    this.renderer.removeClass(this.elementRef.nativeElement,  'shadow');
    this.renderer.removeClass(this.elementRef.nativeElement,  'ml-5');
    this.renderer.removeClass(this.elementRef.nativeElement,  'bg-white');
    this.renderer.removeClass(this.elementRef.nativeElement,  'rounded');
  }

}
