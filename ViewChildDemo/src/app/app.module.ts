import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericOperationComponent } from './numeric-operation/numeric-operation.component';
import { NumberUtilCompoent } from './number-util.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericOperationComponent,
    NumberUtilCompoent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
