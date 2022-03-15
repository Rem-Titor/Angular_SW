import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendFieldComponent } from './components/friend-field/friend-field.component';
import { SearchFriendComponent } from './components/search-friend/search-friend.component';
import { FriendslistComponent } from './components/friends-list/friendslist.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ScrollingModule} from "@angular/cdk/scrolling";


@NgModule({
  declarations: [
    FriendFieldComponent,
    SearchFriendComponent,
    FriendslistComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    ScrollingModule
  ],

  exports: [
    FriendslistComponent
  ]
})
export class FriendslistModule { }
