import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonalInfoService } from './manage-person/personal-info.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ManagePersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LoggingService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
