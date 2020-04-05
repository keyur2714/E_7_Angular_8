import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './custom_pipes/welcome.pipe';
import { MaskPipe } from './custom_pipes/mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    MaskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
