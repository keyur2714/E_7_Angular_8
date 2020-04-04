import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList : Person[] = [];

  constructor(private personService:PersonService,private location : Location,private router : Router) { }

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

  edit(id:number) : void{
    this.router.navigate(['/edit-person',id,true]);
  }

  addPerson() : void{
    this.router.navigate(['add-person']);// without lazy loading
    //this.router.navigate(['/manage-person/add-person']);
  }

  delete(id:number) : void {
    let confirmMsg = confirm("Are you sure want to delete Person with id "+id+" ?");
    if(confirmMsg){
      this.personService.delete(id).subscribe(
        ()=>{
          alert("Person deleted with id "+id);
          this.getPersonList();          
        }
      )
    }
  }

  back():void{
    this.location.back();
  }
}
