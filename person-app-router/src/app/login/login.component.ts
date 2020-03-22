import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

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
          this.router.navigate([this.authService.successPage]);
        }        
      }
    )
  }
}
