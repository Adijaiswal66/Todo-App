import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { log } from 'node:console';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }
  ngOnInit(): void { }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("todo has been triggered");
    console.log(todo);
  }
}
