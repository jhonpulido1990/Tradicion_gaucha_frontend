import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NavMenu } from '../../molecules/nav-menu/nav-menu';
import { CartButton } from '../../molecules/cart-button/cart-button';
import { BrandLogo } from '../../molecules/brand-logo/brand-logo';
import { NavItem } from '../../../core/models/interfaces/NavItem.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavMenu, CartButton, BrandLogo],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private router = inject(Router);

  // Signals para el estado del componente
  isMenuOpen = signal(false);
  cartItemCount = signal(0); // Simulado, en producción vendría de un servicio

  // Computed properties
  showTagline = computed(() => !this.isMenuOpen());

  navItems = signal<NavItem[]>([
    { label: 'Inicio', route: '/', icon: 'home' },
    { label: 'Catálogo', route: '/catalogo', icon: 'th-large' },
    { label: 'Contacto', route: '/contacto', icon: 'envelope' }
  ]);

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  handleNavItemClick(item: NavItem) {
    this.closeMenu();
    // Navegación adicional si es necesario
  }

  handleCartClick() {
    this.closeMenu();
    this.router.navigate(['/carrito']);
  }
}
