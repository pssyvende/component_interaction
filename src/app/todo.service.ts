import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = ['Zadanie 1', 'Zadanie 2', 'Zadanie 3'];

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
