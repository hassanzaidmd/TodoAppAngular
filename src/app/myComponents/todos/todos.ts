import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgForOf } from '@angular/common';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  standalone: true,
  selector: 'app-todos',
  imports: [NgForOf, TodoItem],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css'],
})
export class Todos {
  todos: Todo[] = [
    new Todo(1,"Khana Khana","Bahut Jaruri",false),
    new Todo(2,"Pani Pina","Aur bhi jaruri",false),
    new Todo(3,"Neend Sona","Dreams important",false),
    new Todo(4,"Game Khelna","Fun bhi zaruri",false),
  ];
  deleteTodo(todo: Todo) {
  this.todos = this.todos.filter(t => t !== todo);
}
}