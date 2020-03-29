import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes : Routes = [
    {path : 'home',component : HomeComponent},
    {path : 'aboutus',component : AboutUsComponent, canActivate : [AuthGuardService]},//called when any link is clicked and check if it's logged in or not.
    {path : 'contactus',component : ContactUsComponent, canActivate : [AuthGuardService]},
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class MainRoutingModule{
    constructor(){
        console.log("Main Routing Module Loaded...!");
    }
}