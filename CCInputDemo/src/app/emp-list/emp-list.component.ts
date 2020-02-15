import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.mode';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  empList : Employee[] = [];
  headerList : string[] = ["Employee #","Name","Salary"];
  fieldList : string[] = ["id","name","salary"];

  constructor() { }

  ngOnInit() {
    let emp1 = new Employee(27,"denish",100200);
    let emp2 = new Employee(26,"keyur",100300);
    let emp3 = new Employee(44,"vinit",100400);
    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
  }

}
