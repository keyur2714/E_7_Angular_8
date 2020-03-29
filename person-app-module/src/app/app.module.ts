import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './auth/authentication.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthInterceptor } from './auth/auth-interceptor';
import { MainModule } from './main/main.module';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    FormsModule,    
    MainModule,
    PersonModule,    
    AuthModule,
    AppRoutingModule
  ],
  providers: [    
    AuthenticationService,
    AuthGuardService,
    {
      provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor,multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule: Loaded...!");
  }  
}
