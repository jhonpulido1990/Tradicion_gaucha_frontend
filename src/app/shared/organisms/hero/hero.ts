import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { HeroMedia } from '../../molecules/hero-media/hero-media';
import { HeroContent } from '../../molecules/hero-content/hero-content';
import { HeroCta } from '../../molecules/hero-cta/hero-cta';
import { CTAButton } from '../../../core/models/interfaces/CTAButton.interface';
import { MediaSource } from '../../../core/models/interfaces/MediaSource.interface';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroMedia, HeroContent, HeroCta],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  // Content inputs
  title = input.required<string>();
  subtitle = input<string>();
  description = input<string>();

  // Media inputs
  mediaSource = input.required<MediaSource>();
  mediaWidth = input(800);
  mediaHeight = input(600);

  // Video specific inputs
  videoMuted = input(true);
  videoAutoplay = input(true);
  videoLoop = input(true);
  videoControls = input(false);

  // CTA inputs
  ctaButtons = input.required<CTAButton[]>();

  // Layout inputs
  variant = input<'default' | 'centered' | 'reverse'>('default');
  backgroundType = input<'light' | 'dark' | 'gradient'>('light');

  // Outputs
  onCTAClick = output<CTAButton>();

  // Computed properties
  heroClasses = computed(() => {
    return `hero--${this.variant()} hero--bg-${this.backgroundType()}`;
  });
}
