import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UnitTestDemo';
  name : string = 'krishna';

  getReverseName(name : string) : string {
    return name.split('').reverse().join('');
  }
}
