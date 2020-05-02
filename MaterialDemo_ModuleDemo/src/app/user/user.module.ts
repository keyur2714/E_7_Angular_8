import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations :[
        UserComponent,
        ManageItemComponent,
        ItemEntryComponent,
        ItemDetailComponent
    ],
    imports :[
        CommonModule,
        MatButtonModule,
        UserRoutingModule
    ],
    providers :[

    ]
})
export class UserModule{
    constructor(){
        console.log("User Module Loaded...!");
    }
}