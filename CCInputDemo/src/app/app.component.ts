import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CCInputDemo';
  personList : Person[] = [];

  menuItems : string[] = ["Admin","User","Sales","Purchase","Contact Us"];

  person : Person = new Person();

  constructor(){}
  ngOnInit(){
    let person1 = new Person("keyur","surat","7387029671","keyurjava27@gmail.com",32);  
    let person2 = new Person("denish","surat","7387029111","denishjava27@gmail.com",33);  
    let person3 = new Person("vinit","mumbai","7387029222","vinitjava27@gmail.com",31);  
    let person4 = new Person("ravi","pune","7387029333","ravijava27@gmail.com",32);  
    let person5 = new Person("hiren","bardoli","7387029444","hirenjava27@gmail.com",33);  
    let person6 = new Person("ami","surat","7387029555","amijava27@gmail.com",30);  
    let person7 = new Person("sandip","pune","7387029666","sandipjava27@gmail.com",33);  

    this.personList = [person1,person2,person3,person4,person5,person6];
    this.personList.push(person7);

  }

  search(str : string) : void {
    this.person = this.personList.find(per=>per.name === str);
  }
}
