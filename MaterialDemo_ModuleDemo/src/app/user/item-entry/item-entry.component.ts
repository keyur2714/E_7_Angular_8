import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  constructor() { 
    console.log("Item Entry Component Loaded...!");
  }

  ngOnInit() {
  }

}
