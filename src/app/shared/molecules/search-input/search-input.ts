import { Component, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss'
})
export class SearchInput {
  placeholder = input<string>('Buscar productos...');
  searchValue = output<string>();

  searchControl = new FormControl('');

  constructor() {
    // ✅ SOLUCIÓN: Usar takeUntilDestroyed para cleanup automático
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed() // Se limpia automáticamente cuando el componente se destruye
    ).subscribe(value => {
      this.searchValue.emit(value || '');
    });
  }
}
