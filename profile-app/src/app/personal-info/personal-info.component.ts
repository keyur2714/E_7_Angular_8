import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  person : Person = new Person();

  // firstName : string = 'Keyur';
  // lastName : string = 'Thakor';
  // dob : Date = new Date('1986/12/27');
  // nationality : string = '';
  // religion : string = '';

  constructor() { 
    console.log("Personal Information Component Object Created...!");
  }

  ngOnInit() {
    console.log("Personal Information Component Initialized...!");
    // this.nationality = 'Indian';
    // this.religion = 'Hindu';
    this.person.firstName = 'Keyur';
    this.person.lastName = 'Thakor';
    this.person.dob = new Date('1986-12-27');
    this.person.nationality = 'Indian';
    this.person.religion = 'Hindu';
  }

}
