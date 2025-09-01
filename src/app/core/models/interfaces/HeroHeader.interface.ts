import { CTAButtonsGroupConfig } from "./CTAButton.interface";
import { FeaturePillsConfig } from "./FeacturePill.interface";
import { HeroImageConfig } from "./HeroImage.interface";
import { TitleCardConfig } from "./TitleCard.interface";

export interface HeroHeaderConfig {
  titleCard: TitleCardConfig;
  featurePills: FeaturePillsConfig;
  ctaButtons: CTAButtonsGroupConfig;
  heroImage: HeroImageConfig;
  animations?: boolean;
}