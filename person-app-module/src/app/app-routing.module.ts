import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules, NoPreloading } from '@angular/router';
import { PageNotFoundComponent } from './page-notfound.component';
import { AppComponent } from './app.component';
import { PersonEntryComponent } from './person/person-entry/person-entry.component';


const routes: Routes = [    
  {
    path : '' , pathMatch : 'full', redirectTo : 'home',  
  },
  {
    path : 'manageperson' , loadChildren: () => import(`./person/person.module`).then(p => p.PersonModule)  
  },  
  {   
    path : '**' , component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : NoPreloading})], //PreloadingStrategy if we want to create Custom Preloading Strategy. 
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("AppRoutingModule: Loaded...!");
  }
}
