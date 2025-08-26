import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-copyright',
  imports: [CommonModule],
  templateUrl: './footer-copyright.html',
  styleUrl: './footer-copyright.scss'
})
export class FooterCopyright {
  companyName = input<string>('Tradición Gaucha');

  currentYear = signal<number>(new Date().getFullYear());
}
