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

  getPersonById(id : number) : Observable<Person>{
    return this.httpClient.get<Person>(this.appUrl+"/"+id);
  }

  updatePerson(person : Person) : Observable<Person>{
    return this.httpClient.put<Person>(this.appUrl+"/"+person.id,person);
  }

  save(person : Person) : Observable<Person>{
    return this.httpClient.post<Person>(this.appUrl,person);
  }

  deletePersonById(id : number) : Observable<void>{
    return this.httpClient.delete<void>(this.appUrl+"/"+id);
  }
}
