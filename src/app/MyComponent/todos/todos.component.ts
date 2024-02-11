import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { json } from 'stream/consumers';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  localItem: any;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void { }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    if (todo.title != '' || todo.desc != '') {
      console.log(todo);
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }


}
