import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from './student.model';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'city', 'mobileNo'];
  dataSource: MatTableDataSource<Student>;

  students : Student[] = [
    {
      "id" : 10,
      "name" : "keyur",
      "city" : "pune",
      "mobileNo" : "9898012121"
    },
    {
      "id" : 20,
      "name" : "denish",
      "city" : "surat",
      "mobileNo" : "9898012111"
    },
    {
      "id" : 30,
      "name" : "vinit",
      "city" : "surat",
      "mobileNo" : "9898012111"
    }
  ];
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.students);    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
