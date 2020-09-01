import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashContentComponent } from './components/dash-content/dash-content/dash-content.component';
import { DashBoxComponent } from './components/dash-box/dash-box/dash-box.component';
import { DashItemComponent } from './components/dash-item/dash-item/dash-item.component';
import { DashPageComponent } from './components/dash-page/dash-page/dash-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UiModule } from './modules/ui/ui.module';
@NgModule({
  declarations: [
    AppComponent,
    DashContentComponent,
    DashBoxComponent,
    DashItemComponent,
    DashPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
