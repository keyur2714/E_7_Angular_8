import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NumberUtilCompoent } from '../number-util.component';

@Component({
  selector: 'app-numeric-operation',
  templateUrl: './numeric-operation.component.html',
  styleUrls: ['./numeric-operation.component.css']
})
export class NumericOperationComponent implements OnInit {

  @ViewChild("num1",{static : false})
  n1 : ElementRef;

  @ViewChild("num2",{static : false})
  n2 : ElementRef;

  @ViewChild("res", {static : true})
  r : ElementRef;

  @ViewChild(NumberUtilCompoent,{static : false})
  numUtilComponent : NumberUtilCompoent;

  result : number = 0;

  constructor() { }

  ngOnInit() {
   // alert("Result Is : "+this.r.nativeElement.innerHTML);
  }

  add() : void{
    //alert(this.n1.nativeElement.value);
    let a = parseInt(this.n1.nativeElement.value)
    let b = parseInt(this.n2.nativeElement.value)
    //this.result = a + b;
    this.numUtilComponent.result = this.numUtilComponent.add(a,b);
    this.n1.nativeElement.value = 0;    
    this.n2.nativeElement.value = 0;
    this.r.nativeElement.style.background = 'yellow';
    this.r.nativeElement.style.color = 'red';
    //this.r.nativeElement.innerHTML = 'Result Is: '+this.result;    
  }

  sub() : void{
    let a = parseInt(this.n1.nativeElement.value)
    let b = parseInt(this.n2.nativeElement.value)
    //this.result = a + b;
    this.numUtilComponent.result = this.numUtilComponent.sub(a,b);
    this.n1.nativeElement.value = 0;    
    this.n2.nativeElement.value = 0;
    this.r.nativeElement.style.background = 'yellow';
    this.r.nativeElement.style.color = 'red';
  }

  div() : void{
    let a = parseInt(this.n1.nativeElement.value)
    let b = parseInt(this.n2.nativeElement.value)
    //this.result = a + b;
    this.numUtilComponent.result = this.numUtilComponent.div(a,b);
    this.n1.nativeElement.value = 0;    
    this.n2.nativeElement.value = 0;
    this.r.nativeElement.style.background = 'yellow';
    this.r.nativeElement.style.color = 'red';
  }

  mul() : void{
    let a = parseInt(this.n1.nativeElement.value)
    let b = parseInt(this.n2.nativeElement.value)
    //this.result = a + b;
    this.numUtilComponent.result = this.numUtilComponent.mul(a,b);
    this.n1.nativeElement.value = 0;    
    this.n2.nativeElement.value = 0;
    this.r.nativeElement.style.background = 'yellow';
    this.r.nativeElement.style.color = 'red';
  }

}
