import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/login/signin/signin/signin.component';
import { SigoutComponent } from './pages/login/signout/sigout/sigout.component';

const routes: Routes = [
  {
    path : 'signin',
    component: SigninComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
