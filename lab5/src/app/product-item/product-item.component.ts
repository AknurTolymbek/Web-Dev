import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() removeEvent = new EventEmitter();

  increaseLike() {
    this.product.likes++;
  }

  remove() {
    this.removeEvent.emit(this.product.id);
  }
}