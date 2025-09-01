import { Component, input } from '@angular/core';
import { FeaturePillsConfig } from '../../../core/models/interfaces/FeacturePill.interface';

@Component({
  selector: 'app-feacture-pills',
  imports: [],
  templateUrl: './feacture-pills.html',
  styleUrl: './feacture-pills.scss'
})
export class FeacturePills {
  config = input.required<FeaturePillsConfig>();
}
