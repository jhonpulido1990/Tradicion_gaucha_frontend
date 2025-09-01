import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { HeroImageConfig } from '../../../core/models/interfaces/HeroImage.interface';

@Component({
  selector: 'app-hero-image',
  imports: [CommonModule],
  templateUrl: './hero-image.html',
  styleUrl: './hero-image.scss'
})
export class HeroImage {
  config = input.required<HeroImageConfig>();
}
