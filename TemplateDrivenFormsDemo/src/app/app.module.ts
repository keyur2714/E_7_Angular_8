import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { RegistrationEntryComponent } from './registration-entry/registration-entry.component';
import { RegistrationDetailComponent } from './registration-detail/registration-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationEntryComponent,
    RegistrationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
