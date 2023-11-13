import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  todo: string = '';

  // wstrzyknij serwis "TodoService", deklarując go w konstruktorze klasy
  constructor() {}

  addTodo() {
    // wywołaj wstrzyknięty serwis i dodaj nowe zadanie, dostarczając metodzie zawartość zmiennej "todo"

    this.todo = '';
  }
}
