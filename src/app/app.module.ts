import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Users/home/home.component';
import { LoginComponent } from './Users/login/login.component';
import { SignupComponent } from './Users/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NguCarouselModule } from '@ngu/carousel';
import { FooterComponent } from './footer/footer.component';
import { ClothingComponent } from './Product/clothing/clothing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { OneProductComponent } from './Product/one-product/one-product.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './Social/contact/contact.component';
import { CartComponent } from './Product/cart/cart.component';
import { WishlistComponent } from './Product/wishlist/wishlist.component';
import { ProfileComponent } from './Users/profile/profile.component';
import { ForgotpwdComponent } from './Users/forgotpwd/forgotpwd.component';
import { AboutComponent } from './Users/about/about.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ClothingComponent,
    OneProductComponent,
    ContactComponent,
    CartComponent,
    WishlistComponent,
    ProfileComponent,
    ForgotpwdComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NguCarouselModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    IvyCarouselModule,
    CarouselModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
