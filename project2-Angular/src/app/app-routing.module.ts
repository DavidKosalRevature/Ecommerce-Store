import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';



const routes: Routes = [
  {path: 'user/create', component: UserCreateComponent},
  {path: 'user/delete', component: UserDeleteComponent},
  {path: 'user/update', component: UserUpdateComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'about/us', component: AboutUsComponent},
  {path: 'contact/us', component: ContactUsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
