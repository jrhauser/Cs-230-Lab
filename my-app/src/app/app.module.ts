import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { BannerComponent } from './banner/banner.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar5Component } from './navbar5/navbar5.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    BannerComponent,
    Navbar2Component,
    FooterComponent,
    Navbar5Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
