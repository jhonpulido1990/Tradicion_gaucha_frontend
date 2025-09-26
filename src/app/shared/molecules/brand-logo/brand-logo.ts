import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type LogoSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-brand-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './brand-logo.html',
  styleUrl: './brand-logo.scss'
})
export class BrandLogo {
  size = input<LogoSize>('md');
  brandName = input('Tradición Gaucha');
  showTagline = input(true);

  logoWidth() {
    const sizes = { sm: 40, md: 56, lg: 72 };
    return sizes[this.size()];
  }

  logoHeight() {
    const sizes = { sm: 40, md: 56, lg: 72 };
    return sizes[this.size()];
  }
}
