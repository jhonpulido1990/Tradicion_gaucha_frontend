import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationItem } from '../../../core/models/interfaces/NavigationItem.interface';

@Component({
  selector: 'app-navigation-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss'
})
export class NavigationMenu {
  // Input signals
  items = input.required<NavigationItem[]>();
  variant = input<'horizontal' | 'vertical'>('horizontal');
  showIcons = input<boolean>(true);

  // Output events
  itemClick = output<NavigationItem>();

  /**
   * Manejar click en item
   */
  onItemClick(item: NavigationItem): void {
    this.itemClick.emit(item);
  }
}
