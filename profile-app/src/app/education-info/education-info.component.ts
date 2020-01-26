import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {

  educationList : Education[] = [];

  constructor() { }

  ngOnInit() {
    let education1 = new Education(2001,'GSEB','S.S.E',72.14);
    let education2 = new Education(2003,'GSHEB','H.S.E',66.50);  
    let education3 = new Education(2007,'B-Tech','S.P.U',65.00);  
    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);
  }

}
