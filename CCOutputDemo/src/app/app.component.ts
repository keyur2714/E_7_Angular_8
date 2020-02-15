import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCOutputDemo';

  newMSg : string = '';

  setMessage(msg) : void {
    //alert(2);
    //alert(msg);
    this.newMSg = msg;
  }
}
