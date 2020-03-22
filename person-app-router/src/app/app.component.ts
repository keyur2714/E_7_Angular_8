import { Component } from '@angular/core';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'person-app-router';
  isLoggedIn : boolean = false;

  constructor(private authService : AuthenticationService){
  }

  checkLoggedin() : void{
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
