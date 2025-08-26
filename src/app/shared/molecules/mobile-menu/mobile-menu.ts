import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItem } from '../../../core/models/interfaces/NavigationItem.interface';
import { NavigationMenu } from "../navigation-menu/navigation-menu";

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule, NavigationMenu],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss'
})
export class MobileMenu {
  // Input signals
  isOpen = input.required<boolean>();
  navigationItems = input.required<NavigationItem[]>();

  // Output events
  closeMenu = output<void>();
  itemClick = output<NavigationItem>();

  /**
   * Cerrar menú desde overlay
   */
  onOverlayClick(): void {
    this.closeMenu.emit();
  }

  /**
   * Prevenir cierre al hacer click en el menú
   */
  onMenuClick(event: Event): void {
    event.stopPropagation();
  }

  /**
   * Manejar click en item del menú
   */
  onItemClick(item: NavigationItem): void {
    this.itemClick.emit(item);
    this.closeMenu.emit();
  }
}
