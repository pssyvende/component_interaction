import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showItems = false;
  items = ['Przedmiot 1', 'Przedmiot 2', 'Przedmiot 3', 'Przedmiot 4'];
}
