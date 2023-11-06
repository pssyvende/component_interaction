import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() todos: string[];
  @Output() removeTodoEvent = new EventEmitter<number>();

  onClick(todoIndex: number) {
    // wyemituj nowe zdarzenie "removeTodoEvent, przesyłając do rodzica wartość indeksu elementu listy, który ma być usunięty"

  }
}
