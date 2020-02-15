import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-drop-down',
  templateUrl: './my-drop-down.component.html',
  styleUrls: ['./my-drop-down.component.css']
})
export class MyDropDownComponent implements OnInit {

  @Input()
  name : string = '';

  @Input()
  dataList : any[] = [];

  @Input()
  selectedItem : any  = {};

  @Output()
  getSelectedItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedItem() : void{
   alert(this.selectedItem.desc); 
   this.getSelectedItem.emit(this.selectedItem);
  }
}
