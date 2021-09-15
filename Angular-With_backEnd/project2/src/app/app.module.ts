import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './components/employee-delete/employee-delete.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    CartComponent,
    CategoryComponent,
    ProductsComponent
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
