import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registration-entry',
  templateUrl: './registration-entry.component.html',
  styleUrls: ['./registration-entry.component.css']
})
export class RegistrationEntryComponent implements OnInit {

  registration : Registration = new Registration();
  isSubmitted : boolean = false;

  courseList : any[] = [
    {code : 'ANG',courseName : "Angular"},
    {code : 'PYT',courseName : "Python"},
    {code : 'BIGD',courseName : "Big Data"},
    {code : 'JAV',courseName : "Java"}    
  ];

  constructor() { }

  ngOnInit() {
    this.registration.gender = "M";
    this.registration.course = this.courseList[0];
  }

  save(f : NgForm) : void {
    console.log(f);
    
    if(f.valid){
      console.log(f.value);
      console.log(f.controls['id'].value);
      console.log(f.controls['name'].value);
      this.isSubmitted = true;
    }
  }

}
