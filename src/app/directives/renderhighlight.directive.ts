import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderhighlight]'
})
export class RenderhighlightDirective implements OnInit{

  constructor(private  renderer:Renderer2,private _elementRef:ElementRef) { }
  ngOnInit(): void {
    this.renderer.setStyle(this._elementRef.nativeElement,'color','pink');
    this.renderer.addClass(this._elementRef.nativeElement,'header')
  }

}
