import { Component,inject } from '@angular/core';
import { TodoService } from '../../Todos.service';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  standalone: true,
  selector: 'app-todos',
  imports: [CommonModule, TodoItem],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css'],
})
export class Todos {
  private todoService = inject(TodoService)

  todos = this.todoService.getTodos();

  deleteTodo(todo:any){
    this.todoService.deleteTodo(todo);
    this.todos = this.todoService.getTodos();
  }
}