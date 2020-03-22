import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router,private authService : AuthenticationService) { }

  ngOnInit() {
    this.authService.successPage = 'home';
    this.authService.isLoggedIn = false;
    this.router.navigate(['login']);
  }

}
