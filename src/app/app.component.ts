import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonLabel = "Kliknij mnie!";
  isDisabled = false;

  onClick() {
    alert("Kliknąłeś przycisk!");
  }
}
