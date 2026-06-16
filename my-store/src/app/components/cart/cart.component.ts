import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  
  // بيانات النموذج
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalPrice = this.cartService.calculateTotal();
  }

  updateQuantity(item: Product, event: any): void {
    const newQty = Number(event);
    if (newQty === 0) {
      this.removeItem(item.id);
    } else {
      item.quantity = newQty;
      this.calculateTotal();
    }
  }

  removeItem(id: number): void {
    this.cartItems = this.cartService.removeFromCart(id);
    this.calculateTotal();
    alert('Removed from cart');
  }

  onSubmit(): void {
    // توجيه لصفحة النجاح مع تمرير البيانات
    this.router.navigate(['/success', this.fullName, this.totalPrice.toFixed(2)]);
    this.cartService.clearCart();
  }
}
