import { Component, signal } from '@angular/core';
import { CTAButton } from '../../../core/models/interfaces/CTAButton.interface';
import { HeroHeaderConfig } from '../../../core/models/interfaces/HeroHeader.interface';
import { HeroHeader } from "../../organism/hero-header/hero-header";

@Component({
  selector: 'app-home-template',
  imports: [HeroHeader],
  templateUrl: './home-template.html',
  styleUrl: './home-template.scss'
})
export class HomeTemplate {
  heroConfig = signal<HeroHeaderConfig>({
    titleCard: {
      title: {
        line1: 'Auténtica',
        line2: 'Tradición',
        line3: 'Argentina'
      },
      description: 'Descubre los sabores y tradiciones de Argentina con nuestra selección premium de productos para asado, mate, vinos y utensilios artesanales.'
    },
    featurePills: {
      features: [
        {
          icon: 'pi pi-heart',
          label: 'Asado',
          color: 'secondary'
        },
        {
          icon: 'pi pi-coffee',
          label: 'Mate',
          color: 'accent'
        },
        {
          icon: 'pi pi-star',
          label: 'Vinos',
          color: 'secondary'
        }
      ]
    },
    ctaButtons: {
      buttons: [
        {
          text: 'Ver Catálogo',
          variant: 'primary',
          route: '/catalogo',
          icon: 'pi pi-arrow-right'
        },
        {
          text: 'Contáctanos',
          variant: 'secondary',
          route: '/contacto'
        }
      ]
    },
    heroImage: {
      src: 'assets/images/logo/logo.jpeg',
      alt: 'Asado tradicional argentino',
      badge: {
        text: '100% Argentino',
        position: 'top-right'
      }
    },
    animations: true
  });

  onButtonClick(button: CTAButton) {
    console.log('Button clicked:', button);
  }
}
