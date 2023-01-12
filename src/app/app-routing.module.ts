import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path : '',component:LoginComponent},
  { path : 'homepage',component:HomeComponent },
  { path : 'home', component:HomepageComponent},
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
