import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}