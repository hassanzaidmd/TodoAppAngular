import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.html',
})
export class TodoItem {

  @Input() todoItem!: Todo;

  @Output() todoDelete = new EventEmitter<Todo>();

  deletTodo() {
    this.todoDelete.emit(this.todoItem);
  }
}