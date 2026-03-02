import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.html',
  styleUrl: './greetings.css',
})
export class Greetings {
  message = input<string>('default greeting msg')
  keyUpPress(event: KeyboardEvent) {
    console.log(`Key up pressed: ${event.key}`);
  }
}
