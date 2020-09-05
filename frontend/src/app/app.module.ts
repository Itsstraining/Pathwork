import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UiModule } from './modules/ui/ui.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SigninComponent } from './pages/login/signin/signin/signin.component';
import { SigoutComponent } from './pages/login/signout/sigout/sigout.component';

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
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,

    SigninComponent,
    SigoutComponent,
    BoardComponent,
    ListComponent,
    DialogComponent,
    DialogContentComponent


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
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
