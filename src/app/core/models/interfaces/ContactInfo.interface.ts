export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'whatsapp';
  value: string;
  icon: string;
  label: string;
}
