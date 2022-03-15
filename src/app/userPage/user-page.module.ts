import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {MenuOutletComponent} from "./components/menu-outlet/menu-outlet.component";
import {MenuBarComponent} from "./components/menu-bar/menu-bar.component";
import {SearchFieldComponent} from "./components/search-field/search-field.component";
import {MainUserPageComponent} from "./components/main-user-page/main-user-page.component";
import {RouterModule} from "@angular/router";
import {ReminderComponent} from "./components/reminder/reminder.component";
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FriendslistModule} from "../friendsList/friendslist.module";
import {MessagesModule} from "../messages/messages.module";



@NgModule({
  declarations: [
    ToolbarComponent,
    MenuOutletComponent,
    SearchFieldComponent,
    MenuBarComponent,
    ReminderComponent,
    MainUserPageComponent
  ],
  exports: [
    MainUserPageComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FriendslistModule,
    MessagesModule,
    RouterModule,

  ]
})
export class UserPageModule { }
