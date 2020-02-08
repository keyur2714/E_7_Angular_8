import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StringOperComponent } from './string-oper/string-oper.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOperComponent,
    ManageFriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
