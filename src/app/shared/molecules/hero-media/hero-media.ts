import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MediaSource } from '../../../core/models/interfaces/MediaSource.interface';

@Component({
  selector: 'app-hero-media',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './hero-media.html',
  styleUrl: './hero-media.scss'
})
export class HeroMedia {
  mediaSource = input.required<MediaSource>();
  width = input(800);
  height = input(600);
  priority = input(true);

  // Video specific inputs
  muted = input(true);
  autoplay = input(true);
  loop = input(true);
  controls = input(false);

  isLoaded = signal(false);

  onMediaLoad() {
    this.isLoaded.set(true);
  }

}
