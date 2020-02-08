import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css']
})
export class ManageFriendsComponent implements OnInit {

  friends : string[] = ["keyur","denish","vinit"];
  selectedName : string = '';
  name : string = 'Vicky';
  updateIdx : number = -1;

  constructor() { }

  ngOnInit() {
  }

  add() : void {
    //alert(name);
    let name = this.name;
    let checkDup = this.friends.indexOf(name);
    if(checkDup === -1){
      this.friends.push(name);
      this.name = '';
    }else{
      alert("Name Already Exists");
    }
    
  }

  edit(index : number) : void{
    this.name = this.friends[index];
    this.updateIdx = index;
  }

  update() : void {
    this.friends[this.updateIdx] = this.name;
    this.updateIdx = -1;
    this.name = '';
  }

  delete(idx : number) : void{
    let confirmMsg = confirm("Are you sure want to delete "+this.friends[idx]+" from friends-list?");
    //alert(confirmMsg);
    if(confirmMsg){
      this.friends.splice(idx,1);
    }
  }

  setSelected(name) : void{
    this.selectedName = name;
  }
}
