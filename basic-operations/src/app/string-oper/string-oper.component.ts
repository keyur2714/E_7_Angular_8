import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-oper',
  templateUrl: './string-oper.component.html',
  styleUrls: ['./string-oper.component.css']
})
export class StringOperComponent implements OnInit {

  result : string = '';

  constructor() { }

  ngOnInit() {
  }

  sayHello() : void {
    alert("Hello Radhe Krishna...!");
  }

  toUpper(s : string) : void {
    //alert(s);
    this.result = s.toUpperCase();
  }
  toLower(s : string) : void {
    this.result = s.toLowerCase();
  }

  toReverse(s : string) : void{
    let str = s.split("").reverse().join('');
    this.result = str;
  }

  check(s : string) : void {
    alert(s);
  }

}
