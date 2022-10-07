import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotif]'
})
export class NotifDirective implements OnInit{
//inject template ref
  constructor(private template:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

  @Input() set appNotif(condition:boolean){
     //if cond not true ,then show the template in the view
    if(!condition)
    {
      //create the embedde  view using container ref
      //and add a template inside this view
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      //if condition is true clear the view
      this.viewContainer.clear();
    }
  }
 
 
   
  ngOnInit(): void {
    
  }

}
