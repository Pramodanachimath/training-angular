import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bindHighlight]'
})
export class BindHighlightDirective implements OnInit{

  @Input() defaultColor=''
  @Input() highlightColor=''
  @Input() textTransform=''
  @Input() bgcolor=''
  @Input() newbgcolor=''

  //add properties devcorated with @Hostrbinding
  //This is to bind the properties to the input values

  // @HostBinding('style.color') basicColor='';
  @HostBinding('style.color') newColor='';
  @HostBinding('style.textTransform') textFormat='';
  @HostBinding('style.backgroundColor') highbgColor='';
  
  

  constructor() { }
  ngOnInit(): void {
    //assign property with hostbinding=property with input
   this.newColor=this.defaultColor;
   this.highbgColor=this.bgcolor
  }
  @HostListener("mouseenter")
  onMouseEnter(event:Event){
   this.newColor=this.highlightColor
   this.textFormat=this.textTransform
   this.highbgColor=this.newbgcolor
  }
}
