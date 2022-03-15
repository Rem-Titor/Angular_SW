import {Component, HostListener, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Output() onClick = new EventEmitter<boolean>()

  showEdit:boolean = false

  constructor() { }
  ngOnInit(): void {
  }

  Toggle(){
    this.onClick.emit(false)
    console.log('emmiting')
  }

}
