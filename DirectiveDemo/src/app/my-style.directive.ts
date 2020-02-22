import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  @Input()
  color : string = 'blue';
  @Input("bg-color")
  backgroundColor : string = 'yellow';
  @Input("font-size")
  fontSize : string = '20px';

  constructor(public elementRef : ElementRef) {
    console.log("MyStyleDirective Object Created...!");
  }


  ngAfterViewInit() : void {
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.background = this.backgroundColor;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  changeStyle(element : ElementRef,color : string,bgColor : string,fontSize : string) : void{
    element.nativeElement.style.color = color;
    element.nativeElement.style.background = bgColor;
    element.nativeElement.style.fontSize = fontSize;
  }

  // change(element : ElementRef) : void{
  //   element.nativeElement.style.color = this.color;
  //   element.nativeElement.style.background = this.backgroundColor;
  //   element.nativeElement.style.fontSize = this.fontSize;
  // }
  change() : void{
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.background = this.backgroundColor;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }
}
