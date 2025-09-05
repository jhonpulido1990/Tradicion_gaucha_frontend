import { FilterOption } from '../../../core/models/interfaces/FilterOption.interface';
import { ViewMode } from '../../../shared/molecules/view-toggle/view-toggle';


export interface CatalogFilterConfig {
  categories: FilterOption[];
  sortOptions: FilterOption[];
}

export interface FilterState {
  searchTerm: string;
  category: string;
  sortBy: string;
  viewMode: ViewMode;
}
