import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product!: Product;
  @Output() addToCart = new EventEmitter();


  addToCartHandler(){
    console.log('Click desde el child');
  }
}
