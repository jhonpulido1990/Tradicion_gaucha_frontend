export interface CTAButton {
  text: string;
  variant: 'primary' | 'secondary';
  route?: string;
  icon?: string;
}

export interface CTAButtonsGroupConfig {
  buttons: CTAButton[];
  animated?: boolean;
}