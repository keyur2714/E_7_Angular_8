import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  appUrl : string = 'http://localhost:3000/personList';

  constructor(private httpClient : HttpClient) { }

  getPersonList() : Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.appUrl);
  }
}
