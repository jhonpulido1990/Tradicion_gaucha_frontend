import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonConfig } from '../../../core/models/interfaces/ActionButtonConfig.interface';

@Component({
  selector: 'app-action-button',
  imports: [CommonModule],
  templateUrl: './action-button.html',
  styleUrl: './action-button.scss'
})
export class ActionButton {
  // Input signals
  buttons = input.required<ActionButtonConfig[]>();

  // Output events
  buttonClick = output<string>();

  /**
   * Manejar click en botón
   */
  onButtonClick(action: string): void {
    this.buttonClick.emit(action);
  }

  /**
   * Verificar si mostrar badge
   */
  shouldShowBadge(button: ActionButtonConfig): boolean {
    return button.badge !== undefined && button.badge > 0;
  }
}
