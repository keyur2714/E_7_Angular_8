import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
    declarations : [
        LoginComponent,
        LogoutComponent
    ],
    imports : [
        FormsModule,
        CommonModule,
        AuthRoutingModule
    ],
    providers :[
        AuthenticationService,
        AuthGuardService
    ]

})
export class AuthModule{
    constructor(){
        console.log("Auth Module Loaded...!");
    }
}