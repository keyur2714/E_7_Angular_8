import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Person } from '../manage-person/person.model';
import { PersonalInfoService } from '../manage-person/personal-info.service';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

  personEntryForm : FormGroup;
  @Input() person : Person = new Person(0);
  @Output() isSaved = new  EventEmitter<boolean>();
  constructor(private formBuilder : FormBuilder,private personService : PersonalInfoService) { }


  ngOnInit() {    
    if(this.person.id === 0){
      this.person.gender = 'M';
      this.createPersonEntryForm();
    }else{
      this.personEntryForm.setValue(this.person);    
    }     
  }

  

  createPersonEntryForm() : void {
    this.personEntryForm = this.formBuilder.group(
      {
        id : [this.person.id,Validators.required],
        firstName : [this.person.firstName,Validators.required],
        lastName : [this.person.lastName,Validators.required],
        gender : [this.person.gender],
        mobileNo : [this.person.mobileNo,Validators.required],
        email : [this.person.email,Validators.required],
        city : [this.person.city,Validators.required]
      }
    )
  }

  save():void{
    if(this.personEntryForm.valid){
      this.person = this.personEntryForm.value;
      this.personService.save(this.person).subscribe(
        (data)=>{
          alert("Person Created Successfully with id  "+data.id);
          this.isSaved.emit(true);
        },
        (error)=>{

        }
      )
    }
  }

  update() : void{
    if(this.personEntryForm.valid){
      this.person = this.personEntryForm.value;
      this.personService.updatePerson(this.person).subscribe(
        (data)=>{
          alert("Person Updated Successfully.");
          this.isSaved.emit(true);
        }
      )
    }
  }
  
}
