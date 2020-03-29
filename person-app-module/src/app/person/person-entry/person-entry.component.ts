import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

  personId : number = 0;
  person : Person = new Person(0);
  isEdit : boolean = false;
  personEntryForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder,private personService : PersonService,private router:Router,private activatedRoute : ActivatedRoute) { }


  ngOnInit() {    
    this.activatedRoute.params.subscribe(
      (param)=>{
        this.personId = param.id;
        this.isEdit = param.isEdit;
        this.personService.getPersonById(this.personId).subscribe(
          (data)=>{
            this.person = data;
            alert(this.personId);
            alert(this.isEdit);
          }
        )        
      }
    )
    this.createPersonEntryForm();
  }

  

  createPersonEntryForm() : void {
    this.personEntryForm = this.formBuilder.group(
      {
        id : ['',Validators.required],
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        gender : [''],
        mobileNo : ['',Validators.required],
        email : ['',Validators.required],
        city : ['',Validators.required]
      }
    )
  }

  save():void{
    if(this.personEntryForm.valid){
      this.person = this.personEntryForm.value;
      this.personService.save(this.person).subscribe(
        (data)=>{
          alert("Person Created Successfully with id  "+data.id);          
          this.router.navigate(['/person-list']);
        },
        (error)=>{

        }
      )
    }
  }

  update() : void{
    if(this.personEntryForm.valid){
      this.person = this.personEntryForm.value;
      this.personService.update(this.person).subscribe(
        (data)=>{
          alert("Person Updated Successfully.");          
          this.router.navigate(['/person-list']);
        }
      )
    }
  }

}
