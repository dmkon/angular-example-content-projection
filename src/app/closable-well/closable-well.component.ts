import { Component } from '@angular/core';

@Component({
  selector: 'app-closable-well',
  templateUrl: './closable-well.component.html'
})
export class ClosableWellComponent {
  visible = true;

  text() {
    if (this.visible) {
      return 'Close';
    } else {
      return 'Open';
    }
  }

  close() {
    this.visible = !this.visible;
  }

  constructor() { }
}
