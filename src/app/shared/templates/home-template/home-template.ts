import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Hero } from '../../organisms/hero/hero';

@Component({
  selector: 'app-home-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss'
})
export class HomeTemplate {
  heroData = signal({
    title: 'Tradición Gaucha Auténtica',
    subtitle: 'Productos artesanales de calidad superior',
    description: 'Descubre nuestra colección de mates, parrillas y accesorios tradicionalmente argentinos, elaborados con la más alta calidad y respetando nuestras raíces culturales.',
    mediaSource: {
      type: 'video' as const,
      src: 'assets/images/imagen_1.mp4',
      alt: 'Tradición gaucha - Asado argentino'
    },
    ctaButtons: [
      {
        type: 'catalog' as const,
        label: 'Explorar Catálogo',
        route: '/catalogo',
        icon: 'th-large',
        variant: 'primary' as const
      },
      {
        type: 'whatsapp' as const,
        label: 'Contactar WhatsApp',
        url: 'https://wa.me/5491112345678?text=Hola, me interesa conocer más sobre sus productos de tradición gaucha',
        icon: 'whatsapp',
        variant: 'secondary' as const
      }
    ]
  });

  handleCTAClick(button: any) {
    console.log('CTA clicked:', button);
    // Analytics tracking aquí
  }
}
