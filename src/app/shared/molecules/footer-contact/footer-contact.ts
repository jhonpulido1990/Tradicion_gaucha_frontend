import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContactInfo } from '../../../core/models/interfaces/ContactInfo.interface';

@Component({
  selector: 'app-footer-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './footer-contact.html',
  styleUrl: './footer-contact.scss'
})
export class FooterContact {
  contactInfo = input.required<ContactInfo[]>();
}
