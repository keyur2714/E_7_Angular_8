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

  personList : Person[] = []

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
      },
      (error)=>{

      }
    )
  }

}

