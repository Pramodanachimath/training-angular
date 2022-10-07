import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
//inject elementRef
// This is used to get the  
  constructor(private _elementref:ElementRef) { }
  ngOnInit(): void {
    //get the native element and set the style
      this._elementref.nativeElement.style.color='blue';
      this._elementref.nativeElement.style.backgroundColor='yellow';
  }

}
