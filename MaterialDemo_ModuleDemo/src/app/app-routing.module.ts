import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'manage-students', component : ManageStudentsComponent},
  {path : 'admin' , loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)},
  {path : 'user' , loadChildren: () => import('./user/user.module').then(u => u.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...!");
  }
}
