import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainRoutingModule } from './main.routing.module';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../auth/auth-guard.service';


@NgModule({
    declarations : [
        HomeComponent,
        AboutUsComponent,
        ContactUsComponent
    ],
    imports :[
        CommonModule,
        MainRoutingModule
    ],
    providers : [
        AuthGuardService
    ]
})
export class MainModule{
    constructor(){
        console.log("Main Module Loaded...");
    }
}