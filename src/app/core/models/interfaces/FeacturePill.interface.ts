export interface FeaturePill {
  icon: string;
  label: string;
  color?: 'primary' | 'secondary' | 'accent';
}

export interface FeaturePillsConfig {
  features: FeaturePill[];
  animated?: boolean;
}
