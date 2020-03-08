import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonalInfoService } from './manage-person/personal-info.service';
import { LoggingService } from './logging.service';
import { PersonEntryComponent } from './person-entry/person-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagePersonComponent,
    PersonEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoggingService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
