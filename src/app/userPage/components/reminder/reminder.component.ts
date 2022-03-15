import { Component, OnInit } from '@angular/core';
import {DateAdapter} from "@angular/material/core";


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})



export class ReminderComponent implements OnInit {

  selected!: Date | null;

  ngOnInit(): void {
  }

}

