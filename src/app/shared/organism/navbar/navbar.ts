import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Importar moleculas
import { Logo } from '../../molecules/logo/logo';
import { NavigationMenu } from '../../molecules/navigation-menu/navigation-menu';
import { ActionButton } from '../../molecules/action-button/action-button';
import { MobileMenu } from '../../molecules/mobile-menu/mobile-menu';
import { LogoConfig } from '../../../core/models/interfaces/LogoConfig.interface';
import { NavigationItem } from '../../../core/models/interfaces/NavigationItem.interface';
import { ActionButtonConfig } from '../../../core/models/interfaces/ActionButtonConfig.interface';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    Logo,
    NavigationMenu,
    ActionButton,
    MobileMenu
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  // Estado reactivo
  cartItemsCount = signal<number>(0);
  isMenuOpen = signal<boolean>(false);

  // Configuraciones
  logoConfig = signal<LogoConfig>({
    imageSrc: 'assets/images/logo/logo-removebg.png',
    imageAlt: 'Logo Tradición Gaucha',
    text: 'Tradición Gaucha',
    route: '/home',
    showText: true
  });

  navigationItems = signal<NavigationItem[]>([
    {
      label: 'Inicio',
      route: '/',
      icon: 'pi pi-home',
      ariaLabel: 'Ir a página de inicio'
    },
    {
      label: 'Catálogo',
      route: '/catalogo',
      icon: 'pi pi-list',
      ariaLabel: 'Ver catálogo de productos'
    },
    {
      label: 'Contacto',
      route: '/contacto',
      icon: 'pi pi-envelope',
      ariaLabel: 'Ir a página de contacto'
    },
    {
      label: 'Admin',
      route: '/admin',
      icon: 'pi pi-cog',
      ariaLabel: 'Panel de administración'
    }
  ]);

  actionButtons = computed<ActionButtonConfig[]>(() => [
    {
      icon: 'pi pi-user',
      label: 'Buscar productos',
      action: 'search',
      variant: 'default'
    },
    {
      icon: 'pi pi-shopping-cart',
      label: 'Ver carrito de compras',
      action: 'cart',
      badge: this.cartItemsCount(),
      variant: 'cart'
    }
  ]);

  mobileToggleButton = computed<ActionButtonConfig[]>(() => [
    {
      icon: this.isMenuOpen() ? 'pi pi-times' : 'pi pi-bars',
      label: this.isMenuOpen() ? 'Cerrar menú' : 'Abrir menú',
      action: 'toggle-menu',
      variant: 'default'
    }
  ]);

  constructor(private router: Router) { }

  /**
   * Manejar acciones de botones
   */
  onActionClick(action: string): void {
    switch (action) {
      case 'search':
        this.handleSearch();
        break;
      case 'cart':
        this.goToCart();
        break;
      case 'toggle-menu':
        this.toggleMobileMenu();
        break;
    }
  }

  /**
   * Manejar click en item de navegación
   */
  onNavigationItemClick(item: NavigationItem): void {
    this.router.navigate([item.route]);
    this.closeMobileMenu();
  }

  /**
   * Alternar menú móvil
   */
  toggleMobileMenu(): void {
    this.isMenuOpen.update(current => !current);
  }

  /**
   * Cerrar menú móvil
   */
  closeMobileMenu(): void {
    this.isMenuOpen.set(false);
  }

  /**
   * Manejar búsqueda
   */
  private handleSearch(): void {
    this.router.navigate(['/login']);
  }

  /**
   * Ir al carrito
   */
  private goToCart(): void {
    this.router.navigate(['/carrito']);
  }
}
