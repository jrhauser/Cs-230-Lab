import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { BannerComponent } from './banner/banner.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar5Component } from './navbar5/navbar5.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Card1Component } from './card1/card1.component';
import { CardOverlayComponent } from './card-overlay/card-overlay.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { CartLayoutComponent } from './layouts/cart-layout/cart-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DrySuitsLayoutComponent } from './layouts/drysuits-layout/drysuits-layout.component';
import { DrytopsLayoutComponent } from './layouts/drytops-layout/drytops-layout.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    BannerComponent,
    Navbar2Component,
    FooterComponent,
    Card1Component,
    CarouselComponent,
    Navbar5Component,
    CardOverlayComponent,
    HomeLayoutComponent,
    CartLayoutComponent,
    LoginLayoutComponent,
    DrySuitsLayoutComponent,
    DrytopsLayoutComponent,
    Card2Component,
    Card3Component,
    UserInfoComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
