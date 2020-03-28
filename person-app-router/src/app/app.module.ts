import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './person.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';
import { AuthenticationService } from './auth/authentication.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthInterceptor } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ManagePersonComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonEntryComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PersonService,
    AuthenticationService,
    AuthGuardService,
    {
      provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor,multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
