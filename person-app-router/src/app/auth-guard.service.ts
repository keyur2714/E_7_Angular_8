import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';
import { User } from './auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{
  
  

  constructor(private authService : AuthenticationService,private router:Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    //alert(state.url);
    if(this.authService.isLoggedIn){      
      let currentUser  = JSON.parse(sessionStorage.getItem("loggedInUser"));      
      if(state.url === '/manageperson'){
        if(currentUser.role === 'ADMIN')
          return true;
        else{
          alert("Sorry But you do not have permission to access this Page.");
          return false;
        }
      }else{
        return true;
      }        
    }else{
      this.authService.successPage = state.url;
      this.router.navigate(['login']);
      return false;
    }
  }
  
  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    let currentUser  = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if(currentUser.role === 'ADMIN')
      return true;
    else{
      alert("Sorry But you do not have permission to access this Page.");
      return false;
    }  
  }
}
