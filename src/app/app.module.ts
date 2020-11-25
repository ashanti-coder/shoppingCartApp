import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    ProductComponent,
    HeaderComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
