import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,        
    //HighchartsChartComponent
  ],  
  imports: [
    BrowserModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
