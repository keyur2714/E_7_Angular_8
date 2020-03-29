import { NgModule } from '@angular/core';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { CommonModule } from '@angular/common';
import { PersonService } from './person.service';
import { PersonRoutingModule } from './person.routing.module';
import { AuthGuardService } from '../auth/auth-guard.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations : [
        ManagePersonComponent,
        PersonListComponent,
        PersonDetailComponent,
        PersonEntryComponent
    ],
    imports :[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,    
        PersonRoutingModule
    ],
    providers :[
        PersonService,
        AuthGuardService
    ]
})
export class PersonModule{
    constructor(){
        console.log("PersonModule : Loaded...!");
    }
}