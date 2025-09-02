import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderConfig } from '../../../core/models/interfaces/SectionHeader.interface';

@Component({
  selector: 'app-section-header',
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss'
})
export class SectionHeader {
  config = input.required<SectionHeaderConfig>();

  getSectionHeaderClasses(): string {
    const alignment = this.config().alignment || 'center';
    const animated = this.config().animated ? 'section-header--animated' : '';
    return `section-header--${alignment} ${animated}`.trim();
  }
}
