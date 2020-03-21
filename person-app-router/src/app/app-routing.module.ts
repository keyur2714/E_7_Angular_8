import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';


const routes: Routes = [
  {path : 'home',component : HomeComponent},
  {path : 'aboutus',component : AboutUsComponent},
  {path : 'contactus',component : ContactUsComponent},
  {path : 'manageperson',component : ManagePersonComponent},
  {
    path : 'person-list',component : PersonListComponent,
    children : [
      {
        path : 'detail/:id/:name',component : PersonDetailComponent
      }
    ]
  },
  {path : 'person-detail/:id/:name',component : PersonDetailComponent},
  {path : 'add-person',component : PersonEntryComponent},
  {path : 'edit-person/:id/:isEdit',component : PersonEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
