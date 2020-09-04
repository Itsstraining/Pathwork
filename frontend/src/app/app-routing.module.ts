import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/login/signin/signin/signin.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { HomeComponent } from './pages/home/home.component';

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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
