import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
    selector : '[app-my-directive]'
})
export class MyDirective implements OnInit{
    @Input()
    color : string = 'orange';
    constructor(private elementRef : ElementRef){
        console.log("App My Directive Object Created...!");
    }
    ngOnInit(){
        console.log(this.elementRef.nativeElement);
        this.elementRef.nativeElement.style.color = this.color;
    }
}