import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList : Person[] = [];

  constructor(private personService:PersonService,private location : Location) { }

  ngOnInit() {
    this.getPersonList();
  }

  getPersonList() : void{
    this.personService.getPersonList().subscribe(
      (data)=>{
        this.personList = data;
      }
    )
  }

  back():void{
    this.location.back();
  }
}
