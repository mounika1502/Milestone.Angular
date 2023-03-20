import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OtpComponent } from './otp/otp.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgOtpInputModule } from  'ng-otp-input';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { OtpDetailsComponent } from './otp-details/otp-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealerComponent } from './dealer/dealer.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
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


// import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    SidebarComponent,
    ProductComponent,
    AddProductComponent,
    OtpComponent,
    OtpDetailsComponent,
    ProfileComponent,
    HomeComponent,
    AddDealerComponent,
    DealerComponent,
    OrdersComponent,
    InventoryComponent,
    CartComponent,
    CheckoutComponent,
    DealerProductComponent,
    LogComponent,
    ProductDescriptionComponent,
    UpdatestatusComponent,
    DealerUpdateComponent,
    ProfileUpdateComponent,
    RawMaterialComponent,
    AddRawComponent,
    RawUpdateComponent,
    MenubarComponent,
    ShippersComponent,
    AddShipperComponent,
    ShipperDataComponent,
    ShipperUpdateComponent,
    UpdatedealerComponent,
    ManufacturerComponent,
    AddManufacturerComponent,
    EditManufacturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule ,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule ,
    Ng2SearchPipeModule,
    IonicModule.forRoot(),
    NgOtpInputModule,
    
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())   
  ],
  providers: [ IonicRouteStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
