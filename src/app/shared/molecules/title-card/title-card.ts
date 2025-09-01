import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCardConfig } from '../../../core/models/interfaces/TitleCard.interface';

@Component({
  selector: 'app-title-card',
  imports: [CommonModule],
  templateUrl: './title-card.html',
  styleUrl: './title-card.scss'
})
export class TitleCard {
  config = input.required<TitleCardConfig>();
}
