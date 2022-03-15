import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import { LoginPageComponent } from './components/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    RouterModule


  ],
  exports:[
    LoginPageComponent
  ]
})
export class LoginPageModule { }
