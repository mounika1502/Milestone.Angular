import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OtpDetailsComponent } from './otp-details/otp-details.component';
import { OtpComponent } from './otp/otp.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { CactivateGuard } from './cactivate.guard';
import { HomeComponent } from './home/home.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealerComponent } from './dealer/dealer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DealerProductComponent } from './dealer-product/dealer-product.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
 // { path:'',redirectTo:'login',pathMatch:'full'},
  { path : 'login',component:LoginComponent},   
  { path : 'homepage', component:HomepageComponent,canActivate:[CactivateGuard]},
  { path : 'product',component:ProductComponent,canActivate:[CactivateGuard]}  ,   
  { path : 'add-dealer',component:AddDealerComponent,canActivate:[CactivateGuard]},
  { path : 'profile',component:ProfileComponent,canActivate:[CactivateGuard]}, 
  { path : 'dealer',component:DealerComponent,canActivate:[CactivateGuard]},
  { path : 'add-product',component:AddProductComponent,canActivate:[CactivateGuard]},   
  { path : 'otp',component:OtpComponent},
  { path :'signup',component:SignupComponent},
  { path :'data',component:OtpDetailsComponent},
  { path : 'home',component:HomeComponent},
  { path : 'inventory',component:InventoryComponent},
  { path : 'orders',component:OrdersComponent},
  { path : 'cart',component:CartComponent},
  { path : 'checkout',component:CheckoutComponent},
  { path : 'dealerproduct',component:DealerProductComponent},
  { path : 'log',component:LogComponent},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
