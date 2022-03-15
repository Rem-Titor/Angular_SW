import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import { DialogComponent } from './components/dialog/dialog.component';
import { DialoglistComponent } from './components/dialoglist/dialoglist.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SearchChatComponent } from './components/search-chat/search-chat.component';
import { ChatsComponent } from './components/chats/chats.component';
import { MessageComponent } from './components/message/message.component';
import {ScrollingModule} from "@angular/cdk/scrolling";



@NgModule({
  declarations: [

    DialogComponent,
    DialoglistComponent,
    MessagesComponent,
    SearchChatComponent,
    ChatsComponent,
    MessageComponent,
  ],
  imports: [
    ScrollingModule,
    MatIconModule,
    CommonModule,

  ],
  exports:[
    MessagesComponent
  ]
})
export class MessagesModule { }
