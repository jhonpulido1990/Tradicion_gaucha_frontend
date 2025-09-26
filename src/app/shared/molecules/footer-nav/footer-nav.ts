import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterSection, FooterLink } from '../../../core/models/interfaces/FooterNavigation.interface';

@Component({
  selector: 'app-footer-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './footer-nav.html',
  styleUrl: './footer-nav.scss'
})
export class FooterNav {
  sections = input.required<FooterSection[]>();
  onLinkClick = output<FooterLink>();
}
