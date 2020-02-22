import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyStyleDirective } from './my-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';
  fontSize : string = '35px';

  @ViewChild("chColor" , {static : false})
  cColor : ElementRef;

  @ViewChild("str" , {static : false})
  str : ElementRef;
  
  @ViewChild(MyStyleDirective,{static : false})
  appMyStyle : MyStyleDirective;

  changeStyle() : void{
    alert(this.cColor.nativeElement.value);
    this.appMyStyle.color = this.cColor.nativeElement.value;
    this.appMyStyle.elementRef = this.str;
    //this.appMyStyle.changeStyle(this.str,this.cColor.nativeElement.value,'orange','35px');
    //this.appMyStyle.change(this.str);
    this.appMyStyle.change();
  }
}

