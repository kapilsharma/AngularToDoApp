import {Component, Input, OnInit} from '@angular/core';
import {ToDoService} from '../../services/to-do.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public toDoService: ToDoService) {
  }

  ngOnInit() {
  }

}
