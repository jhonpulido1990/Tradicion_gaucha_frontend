import { CategoryCardConfig } from "./CategoryCard.interface";
import { SectionHeaderConfig } from "./SectionHeader.interface";

export interface CategoriesSectionConfig {
  sectionHeader: SectionHeaderConfig;
  categories: CategoryCardConfig[];
  columns?: 2 | 3 | 4;
  spacing?: 'sm' | 'md' | 'lg';
  animations?: boolean;
}