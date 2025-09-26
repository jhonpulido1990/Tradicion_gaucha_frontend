export interface FooterLink {
  label: string;
  route: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
