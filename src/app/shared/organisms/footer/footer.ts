import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SocialMedia } from '../../molecules/social-media/social-media';
import { FooterNav } from '../../molecules/footer-nav/footer-nav';
import { FooterContact } from '../../molecules/footer-contact/footer-contact';
import { BrandLogo } from '../../molecules/brand-logo/brand-logo';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    RouterLink,
    SocialMedia,
    FooterNav,
    FooterContact,
    BrandLogo
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = signal(new Date().getFullYear());

  navigationSections = signal([
    {
      title: 'Productos',
      links: [
        { label: 'Mates y Bombillas', route: '/catalog/mates' },
        { label: 'Parrillas', route: '/catalog/parrillas' },
        { label: 'Utensilios', route: '/catalog/utensilios' },
        { label: 'Accesorios', route: '/catalog/accesorios' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', route: '/about' },
        { label: 'Nuestra Historia', route: '/history' },
        { label: 'Garantía', route: '/warranty' },
        { label: 'Envíos', route: '/shipping' }
      ]
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Contacto', route: '/contact' },
        { label: 'Preguntas Frecuentes', route: '/faq' },
        { label: 'Devoluciones', route: '/returns' },
        { label: 'Mi Cuenta', route: '/profile' }
      ]
    }
  ]);

  contactInfo = signal([
    {
      type: 'email' as const,
      value: 'info@tradiciongaucha.com',
      icon: 'envelope',
      label: 'Email'
    },
    {
      type: 'whatsapp' as const,
      value: '+54 11 1234-5678',
      icon: 'whatsapp',
      label: 'WhatsApp'
    },
    {
      type: 'address' as const,
      value: 'Buenos Aires, Argentina',
      icon: 'map-marker',
      label: 'Ubicación'
    }
  ]);

  socialLinks = signal([
    {
      platform: 'Facebook',
      url: 'https://facebook.com/tradiciongaucha',
      icon: 'facebook',
      label: 'Síguenos en Facebook'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/tradiciongaucha',
      icon: 'instagram',
      label: 'Síguenos en Instagram'
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/5491112345678',
      icon: 'whatsapp',
      label: 'Escríbenos por WhatsApp'
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/tradiciongaucha',
      icon: 'youtube',
      label: 'Mira nuestros videos'
    }
  ]);

  handleLinkClick(link: any) {
    console.log('Navegando a:', link.route);
  }

  handleSocialClick(social: any) {
    console.log('Abriendo red social:', social.platform);
  }
}
