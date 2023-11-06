import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // wstrzyknij serwis "TodoService", deklarując go w konstruktorze klasy
  constructor() {}

  getTodos() {
    // wywołaj wstrzyknięty serwis i zwróć listę todo

    return [];
  }

  removeTodo(index: number) {
    // wywołaj wstrzyknięty serwis i usuń zadanie o podanym indeksie

  }
}
