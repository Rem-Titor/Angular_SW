import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-friend-field',
  templateUrl: './friend-field.component.html',
  styleUrls: ['./friend-field.component.css']
})
export class FriendFieldComponent implements OnInit {

  friendList: boolean = false
  postTags: boolean = false
  postCreated: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  Selector( input:string ):void{

    if(input == 'friendList'){
      this.friendList = !this.friendList
      this.postCreated = false
      this.postTags = false
    }

    if(input == 'postCreated'){
      this.postCreated = !this.postCreated
      this.friendList = false
      this.postTags = false
    }

    if(input == 'postTags'){
      this.postTags = !this.postTags
      this.postCreated = false
      this.friendList = false
    }

  };
}
