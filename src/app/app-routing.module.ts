import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';


const routes: Routes = [
   
  { path : '', component:HomepageComponent,
  children:[
    { path : 'product',component:ProductComponent},   
    { path : 'raw',component:RawMaterialComponent},  
  ]},
  { path : 'add',component:AddProductComponent},
  
  { path : 'login',component:LoginComponent},



];
  

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
