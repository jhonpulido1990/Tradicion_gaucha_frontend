import { Component, input, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LogoConfig } from '../../../core/models/interfaces/LogoConfig.interface';

@Component({
  selector: 'app-logo',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  // Input signals para configuración
  config = input.required<LogoConfig>();
  size = input<'small' | 'medium' | 'large'>('medium');
  
  /**
   * Obtener dimensiones según el tamaño
   */
  getDimensions() {
    const sizes = {
      small: { width: 24, height: 24 },
      medium: { width: 40, height: 40 },
      large: { width: 48, height: 48 }
    };
    return sizes[this.size()];
  }

  // Usar sizes responsivos correctos
  responsiveSizes = computed(() => {
    return "(max-width: 768px) 10vw, 6vw";
  });
}
