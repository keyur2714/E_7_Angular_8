import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { UtilServiceService } from './services/util-service.service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';

  numberObservable : Observable<number> = interval(100);

  subscription : Subscription ;

  seqNum : number = 0;

  friendNames : String[] = [];

  namesObs : Observable<String[]>;
  
  studentObservable : Observable<Student[]>;

  constructor(private utilServiceService:UtilServiceService) {    
  }

  ngOnInit(){
    // this.utilServiceService.getNames().subscribe(
    //   (data : String[]) =>{
    //     this.friendNames = data;
    //   }
    // )
    this.namesObs = this.utilServiceService.getStudentNames();
    this.utilServiceService.getEvenDigits().subscribe(
      (data: number)=>{
        this.seqNum = data;
      }
    )
    this.studentObservable = this.utilServiceService.getStudnets();
  } 


  start(): void {
    this.subscription = this.numberObservable.subscribe(
      (next : number)=>{
        this.seqNum = next;
      },
      (error) =>{
        console.log("Error")
      },
      () =>{
        console.log("Completed");
      }
    )    
  }

  stop() : void {
    this.subscription.unsubscribe();
  }

}
