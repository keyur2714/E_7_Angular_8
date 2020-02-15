import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { HeaderComponent } from './header/header.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    PersonalInfoComponent,
    HeaderComponent,
    MyGridComponent,
    DeptListComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
