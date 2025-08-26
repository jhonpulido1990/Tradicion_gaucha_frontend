import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ContactInfo } from '../../../core/models/interfaces/ContactInfo.interface';

@Component({
  selector: 'app-footer-contact-info',
  imports: [CommonModule],
  templateUrl: './footer-contact-info.html',
  styleUrl: './footer-contact-info.scss'
})
export class FooterContactInfo {
  contacts = input.required<ContactInfo[]>();

  /**
   * Generar href según el tipo de contacto
   */
  getContactLink(contact: ContactInfo): string {
    if (contact.link) return contact.link;

    switch (contact.type) {
      case 'phone':
        return `tel:${contact.text.replace(/\s+/g, '')}`;
      case 'email':
        return `mailto:${contact.text}`;
      case 'whatsapp':
        const phone = contact.text.replace(/\D/g, '');
        return `https://wa.me/549${phone}`;
      default:
        return '#';
    }
  }

  /**
   * Determinar si el link debe abrir en nueva pestaña
   */
  shouldOpenInNewTab(contact: ContactInfo): boolean {
    return contact.type === 'whatsapp' || contact.type === 'location';
  }
}
