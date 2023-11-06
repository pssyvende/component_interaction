import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  todos = ['Zadanie 1', 'Zadanie 2', 'Zadanie 3'];

  onRemoveTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
  }
}
