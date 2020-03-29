import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  

  constructor(private authService : AuthenticationService,private router : Router) { }

  ngOnInit() {
  }

  login() : void{
    this.authService.authenticate(this.username,this.password).subscribe(
      (data : User)=>{
        if(data === undefined || data === null){
          alert("Invalid Username or password.");
        }else{
          this.authService.isLoggedIn = true;
          sessionStorage.setItem("loggedInUser",JSON.stringify(data));
          sessionStorage.setItem("token",data.token);
          this.router.navigate([this.authService.successPage]);
        }        
      }
    )
  }
}
