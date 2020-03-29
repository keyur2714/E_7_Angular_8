import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  appUrl : string = 'http://localhost:3000/personList';

  constructor(private httpClient : HttpClient) { }

  getPersonList() : Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.appUrl);
  }

  getPersonById(id : number) : Observable<Person>{
    //let token = sessionStorage.getItem("token");
    //return this.httpClient.get<Person>(this.appUrl+"/"+id,{'headers' : {'Authorization': 'Berear '+token}});
    return this.httpClient.get<Person>(this.appUrl+"/"+id);
  }

  save(person : Person) : Observable<Person>{
    return this.httpClient.post<Person>(this.appUrl,person);
  }

  update(person : Person) : Observable<Person>{
    return this.httpClient.put<Person>(this.appUrl+"/"+person.id,person);
  }

  delete(id : number) : Observable<void>{
    return this.httpClient.delete<void>(this.appUrl+"/"+id);
  }
}
