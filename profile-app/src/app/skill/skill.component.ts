import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skillSets : Skill[] = [];

  constructor() { 

  }

  ngOnInit() {
    let skill1 = new Skill('Languages',["C","C++","Java","Type Script"]);
    let skill2 = new Skill("Databases",["MySql","Oracle","Sql Server"]);
    let skill3 = new Skill("Frameworks",["Angular","Spring"]);
    let skill4 = new Skill("Operating System",["Ubantu","Windows"]);
    let skill5 = new Skill();
    skill5.category = "Tools";
    skill5.skill = ["VS Code","Notepad++","Eclipse"];
    this.skillSets.push(skill1);
    this.skillSets.push(skill2);
    this.skillSets.push(skill3);
    this.skillSets.push(skill4);
    this.skillSets.push(skill5);
  }

}
