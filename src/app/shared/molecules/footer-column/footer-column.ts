import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterLink } from '../../../core/models/interfaces/FotterLink.interface';

@Component({
  selector: 'app-footer-column',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-column.html',
  styleUrl: './footer-column.scss'
})
export class FooterColumn {
  title = input.required<string>();
  links = input.required<FooterLink[]>();
}
