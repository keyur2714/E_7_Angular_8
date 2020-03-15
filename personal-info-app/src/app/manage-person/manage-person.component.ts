import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from './personal-info.service';
import { LoggingService } from '../logging.service';
import { Person } from './person.model';

@Component({
  selector: 'app-manage-person',
  templateUrl: './manage-person.component.html',
  styleUrls: ['./manage-person.component.css'],
  providers : [PersonalInfoService]
})
export class ManagePersonComponent implements OnInit {

  person : Person  = new Person(0);
  personList : Person[] = [];
  isLoaded : boolean = false;
  saveStatus : boolean = false;

  constructor(private personalInfoService : PersonalInfoService,private loggingService : LoggingService) { 
    this.loggingService.logInfo("PersonalInfo Component Object Created");
  }

  ngOnInit() {
    this.loggingService.logInfo("PersonalInfo Object Initialized");
    this.getPersonList();
  }

  getPersonList() : void{
    this.personalInfoService.getPersonList().subscribe(
      (data)=>{
        console.log(data);
        this.personList = data;
        this.isLoaded = true;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getSaveStatus(status) : void{
    this.saveStatus = status;    
    if(this.saveStatus){
      this.getPersonList();
    }
  }

  edit(personId : number) : void {
    this.personalInfoService.getPersonById(personId).subscribe(
      (data)=>{
        this.person = data;
      },
      (error)=>{

      }
    )
  }

  delete(personId : number) : void {
    let confirmMsg = confirm("Are you sure want to delete person with id "+personId);
    //alert(confirmMsg);
    if(confirmMsg){
      this.personalInfoService.deletePersonById(personId).subscribe(
        (data)=>{
          alert("Person Deleted Successfully with id "+personId);
          this.getPersonList();
        },
        (error)=>{

        }
      )
    }
  }
}

