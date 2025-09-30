import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-hero-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './hero-content.html',
  styleUrl: './hero-content.scss'
})
export class HeroContent {
  title = input.required<string>();
  subtitle = input<string>();
  description = input<string>();

  isVisible = signal(false);

  constructor() {
    // Activar animación después del montaje
    setTimeout(() => {
      this.isVisible.set(true);
    }, 200);
  }
}
