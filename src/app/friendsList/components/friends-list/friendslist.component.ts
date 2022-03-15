import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = Array.from({length: 100}).map((_, i) => ``);
}
