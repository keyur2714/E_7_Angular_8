import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personal-info-app';
  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("App Component Object Created");
  }

  ngOnInit() {
    this.loggingService.logInfo("App Component Object Initialized");
  }

}
