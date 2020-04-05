import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';

  name : string = 'Radhe Krishna...!';

  subscription : Subscription;

  numObservable : Observable<number> = interval(1000);

  n = 0;

  today : Date = new Date();

  person  = {
    name : 'keyur',
    city : 'surat',
    mobileNo : '7387029671',
    email : 'keyurjava27@gmail.com',
    accountNumber : '9898012124'
  }

  ngOnInit(){
    this.subscription = this.numObservable.subscribe(
      (data : number)=>{
        this.n = data;
      }
    )
  }

  stop():void{
    this.subscription.unsubscribe();
  }

}
