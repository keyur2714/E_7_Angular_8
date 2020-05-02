import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes : Routes = [
    {
        path : '', component : AdminComponent
    },
    {
        path : 'manage-users', component : ManageUsersComponent,
        children : [
            {path : 'detail',component : UserDetailComponent}
        ]
    },
    {path : 'add-user', component : UserEntryComponent},
]
@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports :[
        RouterModule
    ]
})
export class AdminRoutingModule {
    constructor(){
        console.log("Admin Routing Module Loaded...!");
    }
}