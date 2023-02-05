import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OtpDetailsComponent } from './otp-details/otp-details.component';
import { OtpComponent } from './otp/otp.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
 // { path:'',redirectTo:'login',pathMatch:'full'},
  { path : '',component:LoginComponent},   
  { path : 'homepage', component:HomepageComponent,
  children:[
     { path : 'product',component:ProductComponent}     
  ]},

  { path : 'profile',component:ProfileComponent}, 
  { path : 'raw',component:RawMaterialComponent}, 
  { path : 'add',component:AddProductComponent},
  { path:'update' ,component:UpdateComponent},  
  { path: 'otp',component:OtpComponent},
  { path:'signup',component:SignupComponent},
  { path:'data',component:OtpDetailsComponent}



];
  

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
