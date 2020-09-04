import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/login/signin/signin/signin.component';

import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarfakeComponent } from './pages/navbarfake/navbarfake.component';

const routes: Routes = [
  {
    path : 'signin',
    component: SigninComponent,
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path: 'sidebar',
    component:SidebarComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'navbarfake',
    component: NavbarfakeComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
