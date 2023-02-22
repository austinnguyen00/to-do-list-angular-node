import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Input() text: string = 'Add';

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit()
  }
}
