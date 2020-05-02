import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations : [
        AdminComponent,
        ManageUsersComponent,
        UserEntryComponent,
        UserDetailComponent
    ],
    imports : [
        CommonModule,
        MatButtonModule,
        AdminRoutingModule
    ],
    providers :[

    ]
})
export class AdminModule{
    constructor(){
        console.log("Admin Module Loaded...!");
    }
}