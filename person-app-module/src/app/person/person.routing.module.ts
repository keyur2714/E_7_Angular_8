import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';
const routes : Routes = [
        {path : 'manageperson',component : ManagePersonComponent , canActivate : [AuthGuardService]},
        {
            path : 'person-list',component : PersonListComponent,
            canActivateChild : [AuthGuardService], //called when child route link is clicked.
            children : [
                {
                    path : 'detail/:id/:name',component : PersonDetailComponent
                }
            ]   
        },
        {path : 'person-detail/:id/:name',component : PersonDetailComponent},
        {path : 'add-person',component : PersonEntryComponent},
        {path : 'edit-person/:id/:isEdit',component : PersonEntryComponent},
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class PersonRoutingModule{
    constructor(){
        console.log("PersonRoutingModule: Loaded..!");
    }
}