export type CTAType = 'catalog' | 'whatsapp' | 'custom';

export interface CTAButton {
  type: CTAType;
  label: string;
  url?: string;
  route?: string;
  icon: string;
  variant: 'primary' | 'secondary';
}