import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
const routes : Routes = [
    {
        path : '' , component : UserComponent,        
    },
    {
        path : 'manage-items', component : ManageItemComponent,
        children : [
            {path : 'item-detail' , component : ItemDetailComponent}
        ]
    },
    {
        path : 'add-item', component : ItemEntryComponent
    },
    {
        path : 'edit-item', component : ItemEntryComponent
    }
]
@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports :[
        RouterModule
    ]
})
export class UserRoutingModule{
    constructor(){
        console.log("User Routing Module Loaded...!");
    }
}