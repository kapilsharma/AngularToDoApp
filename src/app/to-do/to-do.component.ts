import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  providers: [ToDoService]
})
export class ToDoComponent implements OnInit {

  constructor() {}

  ngOnInit() { }
}
