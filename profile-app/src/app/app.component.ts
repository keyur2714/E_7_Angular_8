import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'My Profile';
  constructor(){
    console.log("App Component Object Created...!");
  }

  ngOnInit(): void {
    this.title = 'Keyur Profile';
    console.log("App Component Initialized...!");
  }
}
