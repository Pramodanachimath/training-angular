import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hostHighlight]'
})
export class HostHighlightDirective implements OnInit{

  constructor(public elementRef:ElementRef,public renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green')
    this.renderer.addClass(this.elementRef.nativeElement,'header')
  }

  @HostListener("mouseenter")
  onMouseEnter(event:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','purple')
    this.renderer.removeClass(this.elementRef.nativeElement,'header')
  }

  @HostListener("mouseleave")
  onMouseExit(event:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green')
    this.renderer.addClass(this.elementRef.nativeElement,'xheader')
  }

}
