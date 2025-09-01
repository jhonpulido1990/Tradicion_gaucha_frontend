import { Component, input, output } from '@angular/core';
import { TitleCard } from '../../molecules/title-card/title-card';
import { FeacturePills } from '../../molecules/feacture-pills/feacture-pills';
import { CommonModule } from '@angular/common';
import { CtaButtonsGroup } from '../../molecules/cta-buttons-group/cta-buttons-group';
import { HeroImage } from '../../molecules/hero-image/hero-image';
import { HeroHeaderConfig } from '../../../core/models/interfaces/HeroHeader.interface';
import { CTAButton, CTAButtonsGroupConfig } from '../../../core/models/interfaces/CTAButton.interface';
import { Router } from '@angular/router';
import { TitleCardConfig } from '../../../core/models/interfaces/TitleCard.interface';
import { FeaturePillsConfig } from '../../../core/models/interfaces/FeacturePill.interface';
import { HeroImageConfig } from '../../../core/models/interfaces/HeroImage.interface';

@Component({
  selector: 'app-hero-header',
  imports: [
    CommonModule,
    TitleCard,
    FeacturePills,
    CtaButtonsGroup,
    HeroImage
  ],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.scss'
})
export class HeroHeader {
  config = input.required<HeroHeaderConfig>();
  buttonClick = output<CTAButton>();

  constructor(private router: Router) { }

  getTitleCardConfig(): TitleCardConfig {
    return {
      ...this.config().titleCard,
      animated: this.config().animations
    };
  }

  getFeaturePillsConfig(): FeaturePillsConfig {
    return {
      ...this.config().featurePills,
      animated: this.config().animations
    };
  }

  getCTAButtonsConfig(): CTAButtonsGroupConfig {
    return {
      ...this.config().ctaButtons,
      animated: this.config().animations
    };
  }

  getHeroImageConfig(): HeroImageConfig {
    return {
      ...this.config().heroImage,
      animated: this.config().animations
    };
  }

  onButtonClick(button: CTAButton): void {
    if (button.route) {
      this.router.navigate([button.route]);
    }
    this.buttonClick.emit(button);
  }
}
