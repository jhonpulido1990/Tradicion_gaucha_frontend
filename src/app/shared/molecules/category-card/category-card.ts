import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardConfig } from '../../../core/models/interfaces/CategoryCard.interface';

@Component({
  selector: 'app-category-card',
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss'
})
export class CategoryCard {
  config = input.required<CategoryCardConfig>();
  cardClick = output<CategoryCardConfig>();

  onCardClick(): void {
    this.cardClick.emit(this.config());
  }
}
