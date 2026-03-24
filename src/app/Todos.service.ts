import { Injectable } from "@angular/core";
import { Todo } from "./Todo";

@Injectable({
    providedIn: "root"
})
export class TodoService {
    todos: Todo[] = [
        { sno: 1, title: "Khana Khana", active: true, desc: "fagyuafg jadsgjba" },
        new Todo(2, "Pani Pina", "Aur bhi jaruri", false),
        new Todo(3, "Neend Sona", "Dreams important", false),
        new Todo(4, "Game Khelna", "Fun bhi zaruri", false),
    ];
    getTodos() {
        return this.todos;
    }
    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter(t => t !== todo);
    }
}