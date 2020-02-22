import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {  

  constructor(private viewContainerRef : ViewContainerRef,private templateRef : TemplateRef<any> ) { 
    console.log("MyLoopDirective : Object Created...!");
  }

  @Input("appMyLoop") set myLoop(loopCounter : number){
    //alert(loopCounter);
    console.log(this.templateRef);
    console.log(this.templateRef.elementRef.nativeElement);
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }    
  }

  @Input("appMyLoopParam1") set param1(param1 : string) {
    console.log(param1);
  }

}
