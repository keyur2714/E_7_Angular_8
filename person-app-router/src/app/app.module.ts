import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './person.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ManagePersonComponent,
    PersonListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
