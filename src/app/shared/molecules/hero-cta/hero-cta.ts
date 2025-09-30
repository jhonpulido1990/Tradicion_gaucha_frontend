import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CTAButton } from '../../../core/models/interfaces/CTAButton.interface';

@Component({
  selector: 'app-hero-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './hero-cta.html',
  styleUrl: './hero-cta.scss'
})
export class HeroCta {
  buttons = input.required<CTAButton[]>();
  onCTAClick = output<CTAButton>();

  isVisible = signal(false);

  constructor() {
    setTimeout(() => {
      this.isVisible.set(true);
    }, 400);
  }
}
