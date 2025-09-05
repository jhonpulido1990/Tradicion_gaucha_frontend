import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-view-toggle',
  imports: [CommonModule],
  templateUrl: './view-toggle.html',
  styleUrl: './view-toggle.scss'
})
export class ViewToggle {
  currentView = input<ViewMode>('grid');
  viewChange = output<ViewMode>();

  onViewChange(view: ViewMode): void {
    this.viewChange.emit(view);
  }
}
