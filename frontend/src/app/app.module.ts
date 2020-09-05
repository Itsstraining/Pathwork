import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UiModule } from './modules/ui/ui.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SigninComponent } from './pages/login/signin/signin/signin.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {BoardComponent} from './Components/board/board.component';
import {ListComponent} from './Components/list/list.component';
import {DialogComponent} from './Components/dialog/dialog.component';
import {DialogContentComponent} from './Components/dialog-content/dialog-content.component';
import {MatSelectModule} from '@angular/material/select';

import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './pages/login/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { NavbarfakeComponent } from './pages/navbarfake/navbarfake.component';

@NgModule({
  declarations: [
    AppComponent,

    SigninComponent,

    BoardComponent,
    ListComponent,
    DialogComponent,
    DialogContentComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    RegisterComponent,
    NavbarfakeComponent,



  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    //NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
