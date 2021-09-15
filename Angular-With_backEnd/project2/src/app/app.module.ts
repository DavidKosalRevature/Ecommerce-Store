import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoryComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }