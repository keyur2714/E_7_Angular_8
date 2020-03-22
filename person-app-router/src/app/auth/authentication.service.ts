import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn : boolean = false;
  successPage : string = 'home';

  appUrl : string = 'http://localhost:3000/users';

  constructor(private httpClient : HttpClient) { }

  authenticate(username : string,password : string) : Observable<User>{
    return this.httpClient.get<User>(this.appUrl+"?username="+username+"&password="+password).pipe(
      map(users=>users[0])
    );    
  }
}
