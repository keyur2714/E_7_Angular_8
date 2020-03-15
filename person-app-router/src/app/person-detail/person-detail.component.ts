import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  personId : number = 0;
  person : Person = new Person();

  constructor(private activatedRoute : ActivatedRoute,private personService : PersonService,private location : Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data)=>{
        //alert(data.id+" "+data.name);
        this.personId = data.id;
        this.personService.getPersonById(this.personId).subscribe(
          (data)=>{
            this.person = data;            
          }
        )
      }
    )
  }

  back():void{
    this.location.back();
  }

}
