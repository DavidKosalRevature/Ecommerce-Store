import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  // {
  //   path:'',redirectTo: '/productDetails',pathMatch:'full'
  // },
  //  {
  //   path:'',redirectTo: '/cart',pathMatch:'full'
  // },
{
path:'productDetails', component: ProductDetailsComponent
},
{
  path:'cart', component: CartComponent
},
  // {
  //   path:'**',component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
