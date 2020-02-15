import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  @Input("text-color")
  txtColor : string = 'info';

  @Input("bg-color")
  bgColor : string = 'dark';

  @Input()
  dataList : any[] = [];

  @Input()
  headerList : string[] = [];

  @Input()
  fieldList : string[] = [];


  constructor() { }

  ngOnInit() {
  }

}
