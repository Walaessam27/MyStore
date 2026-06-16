import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartContent: Product[] = [];

  constructor() { }

  getCart() {
    return this.cartContent;
  }

  addToCart(product: Product) {
    const index = this.cartContent.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cartContent[index].quantity = product.quantity;
    } else {
      this.cartContent.push(product);
    }
    return this.cartContent;
  }

  removeFromCart(productId: number) {
    this.cartContent = this.cartContent.filter(p => p.id !== productId);
    return this.cartContent;
  }

  calculateTotal(): number {
    return this.cartContent.reduce((total, p) => total + (p.price * (p.quantity || 0)), 0);
  }

  clearCart() {
    this.cartContent = [];
    return this.cartContent;
  }
}
