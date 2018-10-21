import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() toDoAdded = new EventEmitter<{
    name: string,
    category: string
  }>();

  constructor() { }

  ngOnInit() {
  }

  onAddToDo(name: HTMLInputElement, category: HTMLSelectElement) {
    this.toDoAdded.emit({
      name: (<HTMLInputElement>name).value,
      category: (<HTMLSelectElement>category).value
    });
  }
}
