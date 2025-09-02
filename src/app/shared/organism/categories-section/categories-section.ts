import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { SectionHeader } from '../../molecules/section-header/section-header';
import { CategoryCard } from '../../molecules/category-card/category-card';
import { CategoriesSectionConfig } from '../../../core/models/interfaces/CategoriesSection.interface';
import { CategoryCardConfig } from '../../../core/models/interfaces/CategoryCard.interface';
import { Router } from '@angular/router';
import { SectionHeaderConfig } from '../../../core/models/interfaces/SectionHeader.interface';

@Component({
  selector: 'app-categories-section',
  imports: [
    CommonModule,
    SectionHeader,
    CategoryCard
  ],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.scss'
})
export class CategoriesSection {
  config = input.required<CategoriesSectionConfig>();
  categoryClick = output<CategoryCardConfig>();

  constructor(private router: Router) { }

  getSectionHeaderConfig(): SectionHeaderConfig {
    return {
      ...this.config().sectionHeader,
      animated: this.config().animations
    };
  }

  getCategoryConfig(category: CategoryCardConfig): CategoryCardConfig {
    return {
      ...category,
      animated: this.config().animations
    };
  }

  getGridClasses(): string {
    const columns = this.config().columns || 3;
    const spacing = this.config().spacing || 'md';
    return `categories-section__grid--columns-${columns} categories-section__grid--spacing-${spacing}`;
  }

  onCategoryClick(category: CategoryCardConfig): void {
    if (category.route) {
      this.router.navigate([category.route]);
    }
    this.categoryClick.emit(category);
  }
}
