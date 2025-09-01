export interface HeroBadge {
  text: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export interface HeroImageConfig {
  src: string;
  alt: string;
  badge?: HeroBadge;
  animated?: boolean;
}