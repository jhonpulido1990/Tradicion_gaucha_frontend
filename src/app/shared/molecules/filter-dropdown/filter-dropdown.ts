import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FilterOption } from '../../../core/models/interfaces/FilterOption.interface';


@Component({
  selector: 'app-filter-dropdown',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-dropdown.html',
  styleUrl: './filter-dropdown.scss'
})
export class FilterDropdown {
  options = input.required<FilterOption[]>();
  placeholder = input<string>('Seleccionar...');
  filterChange = output<string>();

  filterControl = new FormControl('');
  isOpen = signal(false);

  constructor() {
    // ✅ SOLUCIÓN: Usar takeUntilDestroyed
    this.filterControl.valueChanges.pipe(
      takeUntilDestroyed()
    ).subscribe(value => {
      this.filterChange.emit(value || '');
    });
  }

  toggleDropdown(): void {
    this.isOpen.set(!this.isOpen());
  }

  selectOption(option: FilterOption): void {
    this.filterControl.setValue(option.value);
    this.isOpen.set(false);
  }

  getSelectedLabel(): string {
    const currentValue = this.filterControl.value;
    const selectedOption = this.options().find(opt => opt.value === currentValue);
    return selectedOption?.label || this.placeholder();
  }
}
