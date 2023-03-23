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
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { DealerUpdateComponent } from './dealer-update/dealer-update.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { AddRawComponent } from './add-raw/add-raw.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RawUpdateComponent } from './raw-update/raw-update.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShipperDataComponent } from './shipper-data/shipper-data.component';
import { ShipperUpdateComponent } from './shipper-update/shipper-update.component';
import { UpdatedealerComponent } from './updatedealer/updatedealer.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './edit-manufacturer/edit-manufacturer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
 // { path:'',redirectTo:'login',pathMatch:'full'},
  { path : 'login',component:LoginComponent},   
  { path : 'homepage', component:HomepageComponent,canActivate:[CactivateGuard]},
  { path : 'product',component:ProductComponent,canActivate:[CactivateGuard]}  ,   
  { path : 'add-dealer',component:AddDealerComponent,canActivate:[CactivateGuard]},
  { path : 'profile',component:ProfileComponent}, 
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
  { path : 'prod-data',component:ProductDescriptionComponent},
  { path : 'updatestatus',component:UpdatestatusComponent},
  { path : 'dealer-update',component:DealerUpdateComponent},
  { path : 'profile-update',component:ProfileUpdateComponent},
  { path : 'raw',component:RawMaterialComponent},
  { path : 'add-raw',component:AddRawComponent},
  { path : 'side',component:SidebarComponent},
  { path : 'menu',component:MenubarComponent},
  { path : 'raw-update',component:RawUpdateComponent},
  { path : 'shippers',component:ShippersComponent},
  { path : 'add-shipper',component:AddShipperComponent},
  { path : 'shipper-data',component:ShipperDataComponent},
  { path : 'shipper-update',component:ShipperUpdateComponent},
  { path : 'update-dealer',component:UpdatedealerComponent},
  { path : 'manufacturer',component:ManufacturerComponent},
  { path : 'add-manufacturer',component:AddManufacturerComponent},
  { path : 'Edit-manufacturer',component:EditManufacturerComponent},
  { path : 'about',component:AboutUsComponent},
  { path : 'forgotPassword',component:ForgotPasswordComponent}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
