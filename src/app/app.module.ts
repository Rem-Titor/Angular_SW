import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {UserPageModule} from "./userPage/user-page.module";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {LoginPageModule} from "./loginPage/loginpage.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserPageModule,
    BrowserAnimationsModule,
    LoginPageModule

  ],
  exports:[] ,
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
