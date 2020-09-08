import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/login/signin/signin/signin.component';

import { BoardComponent } from './Components/board/board.component';

import { RegisterComponent } from './pages/login/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


const routes: Routes = [
  {
    path : 'signin',
    component: SigninComponent,
  },
  {
    path:'board',
    component: BoardComponent,
  },
  {
    path: 'home',
    component: SidebarComponent
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path:'homeads',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
