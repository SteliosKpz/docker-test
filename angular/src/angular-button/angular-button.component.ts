import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-angular-button',
  imports: [],
  templateUrl: './angular-button.component.html',
  styleUrl: './angular-button.component.scss',
})
export class AngularButtonComponent {
  @Input() label: string | null = null;
  @Output() buttonClicked = new EventEmitter<boolean>();

  btnClicked() {
    this.buttonClicked.emit(false);
  }
}
