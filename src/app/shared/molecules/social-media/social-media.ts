import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { SocialLink } from '../../../core/models/interfaces/SocialLink.interface';

@Component({
  selector: 'app-social-media',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss'
})
export class SocialMedia {
  socialLinks = input.required<SocialLink[]>();
  onSocialClick = output<SocialLink>();
}
