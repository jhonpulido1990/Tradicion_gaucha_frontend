import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { CTAButton, CTAButtonsGroupConfig } from '../../../core/models/interfaces/CTAButton.interface';

@Component({
  selector: 'app-cta-buttons-group',
  imports: [CommonModule],
  templateUrl: './cta-buttons-group.html',
  styleUrl: './cta-buttons-group.scss'
})
export class CtaButtonsGroup {
  config = input.required<CTAButtonsGroupConfig>();
  buttonClick = output<CTAButton>();

  onButtonClick(button: CTAButton): void {
    this.buttonClick.emit(button);
  }
}
