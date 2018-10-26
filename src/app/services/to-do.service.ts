import { Injectable } from '@angular/core';

import { ToDo } from '../models/ToDo';

@Injectable()
export class ToDoService {

  toDos: Array<ToDo> = [];

  constructor() {
    // Once we learn about Http service, we will load this data from server.
    this.toDos.push(new ToDo('Angular Session 1', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 1 Assignment', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 2', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 2 Assignment', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 3', true, 'Angular'));
    this.toDos.push(new ToDo('Angular Session 3 Assignment', true, 'Angular'));
    this.toDos.push(new ToDo('Schedule Angular meet up 2', false, 'PHPReboot'));
    this.toDos.push(new ToDo('Update Angular quick notes EBook', false, 'EBooks'));
  }

  addToDo(name: string, category: string) {
    this.toDos.push(new ToDo(name, false, category));
  }
}
