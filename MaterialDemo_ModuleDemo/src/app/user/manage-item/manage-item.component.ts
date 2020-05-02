import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  editItem() : void{
    this.router.navigate(['/user/edit-item']);
  }
}
