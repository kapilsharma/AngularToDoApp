import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name: string;
  category: string;

  @Output() toDoAdded = new EventEmitter<{
    name: string,
    category: string
  }>();

  constructor() { }

  ngOnInit() {
  }

  onAddToDo() {
    this.toDoAdded.emit({
      name: this.name,
      category: this.category
    });
  }
}
