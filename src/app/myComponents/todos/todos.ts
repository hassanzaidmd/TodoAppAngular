import { Component, inject } from '@angular/core';
import { TodoService } from '../../Todos.service';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';
import { CapitalizePipe } from '../capitalize-pipe';
import { Todo } from '../../Todo';

@Component({
  standalone: true,
  selector: 'app-todos',
  imports: [CommonModule, TodoItem],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css'],
  providers: [CapitalizePipe]
})
export class Todos {
  private todoService = inject(TodoService)
  capital = inject(CapitalizePipe)

  todos = this.todoService.getTodos();

  addTodo(title: string, desc: string) {
    if (!title || !desc) return;

    const newTodo: Todo = {
      sno: Date.now(),
      title: this.capital.transform(title),
      desc: desc,
      active: true
    };

    this.todoService.addTodo(newTodo);
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
    this.todos = this.todoService.getTodos();
  }
}