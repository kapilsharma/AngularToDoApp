import { Component, OnInit } from '@angular/core';

import { ToDo } from '../models/ToDo';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDos: Array<ToDo> = [];

  onToDoAdded(toDo: {
    name: string,
    category: string
  }) {
    this.toDoService.addToDo(toDo.name, toDo.category);
  }

  constructor(private toDoService: ToDoService) {
    this.toDos = this.toDoService.toDos;
  }

  ngOnInit() { }
}
