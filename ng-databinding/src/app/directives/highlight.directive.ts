import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    console.log('directives are working')
    console.log(this.element.nativeElement)
    //you can do js way of dom manipulation
    this.element.nativeElement.style.backgroundColor = 'green'
  }
  //dom listeners 
  @HostListener("mouseenter")
  public onMouseEnter() {
    this.highLight('blue')
  }
  @HostListener("mouseleave")
  public onMouseLeave() {
    this.highLight(null)
  }
  private highLight(color: string | null) {
    this.element.nativeElement.style.backgroundColor = color
  }
}
