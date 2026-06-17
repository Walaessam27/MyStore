import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // أضفنا Output و EventEmitter
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  
  // الخطوة المطلوبة: تعريف الـ Output
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  selectedQuantity: number = 1;
  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { } // أزلنا الـ CartService من هنا

  ngOnInit(): void { }

  // تعديل الوظيفة لتقوم بعمل emit (إرسال) فقط
  addItemToCart(product: Product): void {
    const productWithQuantity = { ...product, quantity: Number(this.selectedQuantity) };
    this.addToCart.emit(productWithQuantity); // نرسل المنتج للأب
  }
}