import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question.model';
import { JavaQuestion } from '../model/java.model';
import { AngularQuestion } from '../model/angular.model';
import { Python } from '../model/python.model';

const objString = {provide : Question , useClass : AngularQuestion};

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [
    objString
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';
  //questionObj : Question = new AngularQuestion(); // Old Way tightly couple code.

  constructor(private questionObj : Question) { }

  ngOnInit() {
    this.startExam();
  }

  startExam() : void {
    this.question = this.questionObj.askQuestion();
  }

}
