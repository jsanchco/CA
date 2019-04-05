import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Model for items in cart
  products = [
    {
      name: 'MODERN blue chair',
      id: 'CM125LO',
      price: 450.00,
      quantity: 4,
      image: '/assets/images/ecommerce/cart-img-1.jpg'
    },
    {
      name: 'Antique grey clock',
      id: 'CG125AM',
      price: 209.90,
      quantity: 1,
      image: '/assets/images/ecommerce/cart-img-2.jpg'
    }
  ];

  /**
   * @returns {number} total price of items in cart
   */
  getTotal() {
    return this.products.reduce( (acc, item) => acc += item.price * item.quantity, 0);
  }
}
