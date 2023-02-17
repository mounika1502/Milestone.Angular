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
import { OwlModule } from 'ngx-owl-carousel';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealerComponent } from './dealer/dealer.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddRawmaterialComponent } from './add-rawmaterial/add-rawmaterial.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DealerProductComponent } from './dealer-product/dealer-product.component';


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
    AddRawmaterialComponent,
    CartComponent,
    CheckoutComponent,
    DealerProductComponent
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
    IonicModule.forRoot(),
    NgOtpInputModule,
    OwlModule
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())   
  ],
  providers: [ IonicRouteStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
