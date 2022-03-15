import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-user-page',
  templateUrl: './main-user-page.component.html',
  styleUrls: ['./main-user-page.component.css']
})
export class MainUserPageComponent implements OnInit {

  showmenu:boolean = false
  value:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
