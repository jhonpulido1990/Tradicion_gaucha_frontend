import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FooterColumn } from '../../molecules/footer-column/footer-column';
import { Logo } from '../../molecules/logo/logo';
import { FooterContactInfo } from '../../molecules/footer-contact-info/footer-contact-info';
import { FooterCopyright } from '../../molecules/footer-copyright/footer-copyright';
import { ContactInfo } from '../../../core/models/interfaces/ContactInfo.interface';
import { FooterLink } from '../../../core/models/interfaces/FotterLink.interface';
import { LogoConfig } from '../../../core/models/interfaces/LogoConfig.interface';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    Logo,
    FooterColumn,
    FooterContactInfo,
    FooterCopyright
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  // Configuración del logo para el footer
  logoConfig = signal<LogoConfig>({
    imageSrc: '/assets/images/logo/logo.jpeg',
    imageAlt: 'Logo Tradición Gaucha',
    text: 'Tradición Gaucha',
    route: '/',
    showText: true
  });

  // Descripción de la empresa
  companyDescription = signal<string>(
    'Productos tradicionales argentinos de la más alta calidad para mantener viva nuestra cultura.'
  );

  // Links de navegación
  navigationLinks = signal<FooterLink[]>([
    { label: 'Inicio', route: '/' },
    { label: 'Catálogo', route: '/catalogo' },
    { label: 'Contacto', route: '/contacto' }
  ]);

  // Links de categorías
  categoryLinks = signal<FooterLink[]>([
    { label: 'Parrillas', route: '/catalogo/parrillas' },
    { label: 'Mates', route: '/catalogo/mates' },
    { label: 'Vinos', route: '/catalogo/vinos' },
    { label: 'Utensilios', route: '/catalogo/utensilios' }
  ]);

  // Información de contacto
  contactInfo = signal<ContactInfo[]>([
    {
      icon: 'pi pi-map-marker',
      text: 'Buenos Aires, Argentina',
      type: 'location'
    },
    {
      icon: 'pi pi-phone',
      text: '+54 11 1234-5678',
      type: 'phone'
    },
    {
      icon: 'pi pi-envelope',
      text: 'info@tradiciongaucha.com',
      type: 'email'
    },
    {
      icon: 'pi pi-whatsapp',
      text: 'WhatsApp: +54 9 11 1234-5678',
      type: 'whatsapp'
    }
  ]);
}
