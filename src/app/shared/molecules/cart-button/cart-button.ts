import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.scss'
})
export class CartButton {
  itemCount = input(0);
  onCartClick = output<void>();

  hasItems = computed(() => this.itemCount() > 0);
  displayCount = computed(() => {
    const count = this.itemCount();
    return count > 99 ? '99+' : count.toString();
  });
}
