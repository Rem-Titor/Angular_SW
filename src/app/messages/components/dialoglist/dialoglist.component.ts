import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialoglist',
  templateUrl: './dialoglist.component.html',
  styleUrls: ['./dialoglist.component.css']
})
export class DialoglistComponent implements OnInit {


  counter(i: number) {
    return new Array(i);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
