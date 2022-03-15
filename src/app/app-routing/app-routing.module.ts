import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainUserPageComponent} from "../userPage/components/main-user-page/main-user-page.component";
import {LoginPageComponent} from "../loginPage/components/login-page/login-page.component";
import {LoginComponent} from "../loginPage/components/login/login.component";
import {RegisterComponent} from "../loginPage/components/register/register.component";
import {MessagesComponent} from "../messages/components/messages/messages.component";
import {FriendslistComponent} from "../friendsList/components/friends-list/friendslist.component";


const routes: Routes = [
  {path:'loginPage', component:LoginPageComponent,
    children:[
      {path:'', component:LoginComponent, outlet:'loginPage'},
      {path:'login', component:LoginComponent, outlet:'loginPage'},
      {path:'register', component:RegisterComponent, outlet:'loginPage'},
    ]
  },
  {path:'userPage', component:MainUserPageComponent, children:[
      {path:'', component:MessagesComponent, outlet:'menuOutlet'},
      {path:'messages', component:MessagesComponent, outlet:'menuOutlet'},
      {path:'friends', component:FriendslistComponent, outlet:'menuOutlet'},
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
