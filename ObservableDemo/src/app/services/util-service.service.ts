import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { Student } from '../student.model';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }


  getNameString() : Observable<String> {
    return of("keyur,denish,vinit,ravi,hiren,dharmesh,sandip");
  }

  getDigits() : Observable<number> {
    return of(22,3,1,3,4,22,55,66,99);
  }

  getNames() : Observable<String[]> {
    return this.getNameString().pipe(
      map(names => names.split(","))
    )
  }

  getEvenDigits() : Observable<number> {
    return this.getDigits().pipe(
      filter(d => d%2==0),
      map(m => {
        console.log(m);
        return m+1;
      }
      )
    )
  }


  getStudentList() : Observable<Student[]>{
    let stud1 = new Student(27,"keyur");
    let stud2 = new Student(26,"denish");
    let stud3 = new Student(44,"vinit");

    return of([stud1,stud2,stud3]);
  }

  getStudnets() : Observable<Student[]>{
    return this.getStudentList().pipe(
      map(students => {       
        for(let stud of students){
          stud.name = stud.name.toUpperCase()         
        }
        return students;
      })
    )
  }

  getStudentNames() : Observable<String[]>{
    return this.getStudnets().pipe(
      map(students=>{
        let names : String[] = [];
        let i : number = 0;
        for(let stud of students){
          names[i++] = stud.name
        }
        return names;
      })
    )
  }

}
