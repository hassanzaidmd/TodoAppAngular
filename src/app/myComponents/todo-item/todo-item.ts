import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todoItem!: Todo;  
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter() ;
  
  deleteTodo(){
    console.log("Delete krenge hum")
    this.todoDelete.emit(this.todoItem)
  }
}
