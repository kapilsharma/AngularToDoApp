import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('name') nameInTS: ElementRef;
  @ViewChild('category') categoryInTS: ElementRef;

  @Output() toDoAdded = new EventEmitter<{
    name: string,
    category: string
  }>();

  constructor() { }

  ngOnInit() {
  }

  onAddToDo() {
    this.toDoAdded.emit({
      name: (<HTMLInputElement>this.nameInTS.nativeElement).value,
      category: (<HTMLInputElement>this.categoryInTS.nativeElement).value
    });
  }
}
