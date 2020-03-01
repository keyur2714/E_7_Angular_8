import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Item } from './item.model';
@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  //itemEntryForm : FormGroup;
  itemEntryForm ;
  isSubmitted : boolean = false;
  newItem : Item = new Item();
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createItemEntryForm();
  }

  createItemEntryForm() : void {
    /*this.itemEntryForm = new FormGroup({
      id : new FormControl('',Validators.required),
      code : new FormControl('',[Validators.required,Validators.minLength(3)]),
      name : new FormControl('',Validators.required),
      price : new FormControl('',Validators.required),
      ingredients : new FormArray([new FormControl()])
    })*/
    this.itemEntryForm = this.formBuilder.group({
      id : this.formBuilder.control('',Validators.required),
      code : this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
      name : this.formBuilder.control('',Validators.required),
      price : this.formBuilder.control('',Validators.required),
      ingredients : this.formBuilder.array([this.formBuilder.control('')])
    })
    
  }

  save() : void {
    if(this.itemEntryForm.valid){
      this.isSubmitted = true;
      console.log(this.itemEntryForm);
      console.log(this.itemEntryForm.value);
      this.newItem = this.itemEntryForm.value;
    }
  }

  addMore() : void {
    /*let newIngControl = new FormControl('');
    (<FormArray>this.itemEntryForm.get('ingredients')).push(newIngControl);*/
    
    (<FormArray>this.itemEntryForm.get('ingredients')).push(this.formBuilder.control(''));
  }
}
