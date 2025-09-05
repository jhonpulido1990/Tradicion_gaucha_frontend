import { Component } from '@angular/core';
import { CatalogFilter } from '../../organism/catalog-filter/catalog-filter';
import { CatalogFilterConfig, FilterState } from '../../../core/models/interfaces/CatalogFilter.interface';

@Component({
  selector: 'app-catalog-template',
  imports: [CatalogFilter],
  templateUrl: './catalog-template.html',
  styleUrl: './catalog-template.scss'
})
export class CatalogTemplate {
  filterConfig: CatalogFilterConfig = {
    categories: [
      { label: 'Todas las categorías', value: '' },
      { label: 'Asados', value: 'asados' },
      { label: 'Empanadas', value: 'empanadas' },
      { label: 'Bebidas', value: 'bebidas' }
    ],
    sortOptions: [
      { label: 'Destacados', value: '' },
      { label: 'Precio: menor a mayor', value: 'price_asc' },
      { label: 'Precio: mayor a menor', value: 'price_desc' },
      { label: 'Más recientes', value: 'newest' },
      { label: 'Mejor valorados', value: 'rating' }
    ]
  };

  onFilterChange(filterState: FilterState): void {
    console.log('Filter state changed:', filterState);
    // Aquí implementarías la lógica de filtrado
  }
}
