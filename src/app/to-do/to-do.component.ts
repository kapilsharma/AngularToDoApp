import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDos = [
    {
      'name': 'Angular Session 1',
      'done': true,
      'category': 'Angular'
    },
    {
      'name': 'Angular Session 1 Assignment',
      'done': true,
      'category': 'Angular'
    },
    {
      'name': 'Angular Session 2',
      'done': true,
      'category': 'Angular'
    },
    {
      'name': 'Angular Session 2 Assignment',
      'done': true,
      'category': 'Angular'
    },
    {
      'name': 'Angular Session 3',
      'done': true,
      'category': 'Angular'
    },
    {
      'name': 'Angular Session 3 Assignment',
      'done': true,
      'category': 'Angular'
    },
    {
      'name': 'Schedule Angular meet up 2',
      'done': false,
      'category': 'PHPReboot'
    },
    {
      'name': 'Update Angular quick notes EBook',
      'done': false,
      'category': 'EBooks'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
