import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-notfound.component';
import { AppComponent } from './app.component';


const routes: Routes = [    
  {
    path : '' , pathMatch : 'full', redirectTo : 'home',  
  },
  {   
    path : '**' , component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("AppRoutingModule: Loaded...!");
  }
}
