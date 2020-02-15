import { Component, OnInit } from '@angular/core';
import { Department } from './dept.model';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  deptList : Department[] = [];
  headerList : string[] = ["Dept #","Dept Name"];
  fieldList : string[] = ["id","deptName"];


  constructor() { }

  ngOnInit() {
    let dept1 = new Department(1,"IT");
    let dept2 = new Department(2,"HR");
    let dept3 = new Department(3,"ADMIN");
    this.deptList = [dept1,dept2,dept3];
  }

}
