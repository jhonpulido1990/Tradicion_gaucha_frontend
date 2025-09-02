import { Component, signal } from '@angular/core';
import { CTAButton } from '../../../core/models/interfaces/CTAButton.interface';
import { HeroHeaderConfig } from '../../../core/models/interfaces/HeroHeader.interface';
import { HeroHeader } from "../../organism/hero-header/hero-header";
import { CategoryCardConfig } from '../../../core/models/interfaces/CategoryCard.interface';
import { CategoriesSectionConfig } from '../../../core/models/interfaces/CategoriesSection.interface';
import { CategoriesSection } from '../../organism/categories-section/categories-section';

@Component({
  selector: 'app-home-template',
  imports: [HeroHeader, CategoriesSection],
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
          icon: 'pi pi-apple',
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
      src: 'assets/images/asado.png',
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

  onCategoryClick(category: CategoryCardConfig) {
    console.log('Category clicked:', category);
  }

  // Nueva configuración de categorías
  categoriesConfig = signal<CategoriesSectionConfig>({
    sectionHeader: {
      title: 'Nuestras Categorías',
      description: 'Explora nuestra selección cuidadosamente curada de productos tradicionales argentinos',
      alignment: 'center'
    },
    categories: [
      {
        title: 'Parrillas y Asadores',
        description: 'Todo para el asado perfecto',
        image: 'assets/images/categories/parrillas-asadores.png',
        alt: 'Parrillas y asadores tradicionales',
        route: '/catalogo/parrillas-asadores'
      },
      {
        title: 'Mates y Bombillas',
        description: 'La tradición del mate',
        image: 'assets/images/categories/mates-bombillas.png',
        alt: 'Mates y bombillas artesanales',
        route: '/categoria/mates-bombillas'
      },
      {
        title: 'Vinos Argentinos',
        description: 'Los mejores vinos del país',
        image: 'assets/images/categories/vinos-argentinos.png',
        alt: 'Vinos argentinos premium',
        route: '/categoria/vinos'
      },
      {
        title: 'Utensilios de Cocina',
        description: 'Herramientas artesanales',
        image: 'assets/images/categories/utensilios-cocina.png',
        alt: 'Utensilios de cocina tradicionales',
        route: '/categoria/utensilios'
      }
    ],
    columns: 4,
    spacing: 'md',
    animations: true
  });
}
