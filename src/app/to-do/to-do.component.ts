import { Component, OnInit } from '@angular/core';

import { ToDo } from '../models/ToDo';

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
    this.toDos.push({
      name: toDo.name,
      done: false,
      category: toDo.category
    });
  }

  constructor() {
    this.toDos.push(new ToDo('Angular Session 1', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 1 Assignment', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 2', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 2 Assignment', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 3', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 3 Assignment', true, 'Angular'));
    this.toDos.push(new ToDo('Schedule Angular meet up 2', false, 'PHPReboot'));
    this.toDos.push(new ToDo('Update Angular quick notes EBook', false, 'EBooks'));
  }

  ngOnInit() { }
}
