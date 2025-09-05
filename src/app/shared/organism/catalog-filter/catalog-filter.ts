import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInput } from '../../molecules/search-input/search-input';
import { ViewMode, ViewToggle } from '../../molecules/view-toggle/view-toggle';
import { FilterDropdown } from '../../molecules/filter-dropdown/filter-dropdown';
import { CatalogFilterConfig, FilterState } from '../../../core/models/interfaces/CatalogFilter.interface';

@Component({
  selector: 'app-catalog-filter',
  imports: [CommonModule, SearchInput, FilterDropdown, ViewToggle],
  templateUrl: './catalog-filter.html',
  styleUrl: './catalog-filter.scss'
})
export class CatalogFilter {
  config = input.required<CatalogFilterConfig>();
  filterChange = output<FilterState>();

  // Estado interno con signals
  searchTerm = signal('');
  selectedCategory = signal('');
  selectedSort = signal('');
  viewMode = signal<ViewMode>('grid');

  onSearchChange(searchTerm: string): void {
    this.searchTerm.set(searchTerm);
    this.emitFilterState();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory.set(category);
    this.emitFilterState();
  }

  onSortChange(sortBy: string): void {
    this.selectedSort.set(sortBy);
    this.emitFilterState();
  }

  onViewChange(viewMode: ViewMode): void {
    this.viewMode.set(viewMode);
    this.emitFilterState();
  }

  private emitFilterState(): void {
    this.filterChange.emit({
      searchTerm: this.searchTerm(),
      category: this.selectedCategory(),
      sortBy: this.selectedSort(),
      viewMode: this.viewMode()
    });
  }
}
