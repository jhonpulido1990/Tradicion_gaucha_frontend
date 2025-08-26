export interface ContactInfo {
  icon: string;
  text: string;
  link?: string;
  type?: 'phone' | 'email' | 'location' | 'whatsapp';
}
