import { Component, signal } from '@angular/core';
import { Todos } from './myComponents/todos/todos';

@Component({
  selector: 'app-root',
  imports: [ Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Todo List');
  constructor(){
    setTimeout(() => {
      this.title.set("Your Todos")
    },2000);
  }
}
