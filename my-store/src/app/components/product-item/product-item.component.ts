import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  selectedQuantity: number = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  addToCart(product: Product): void {
    const productToAdd = { ...product, quantity: Number(this.selectedQuantity) };
    this.cartService.addToCart(productToAdd);
    alert(`${product.name} added to cart!`);
  }
}
