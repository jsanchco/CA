import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsPageComponent implements OnInit {

  // Model for products that are shown
  products = [
    {
      title: 'Modern black chair',
      price: '$ 852.00',
      isNew: true,
      image: '/assets/images/ecommerce/product-1-img.png'
    },
    {
      title: 'Antique grey clock',
      price: '$ 209.90',
      image: '/assets/images/ecommerce/product-2-img.png'
    },
    {
      title: 'Modern blue chair',
      oldPrice: '$ 706.00',
      price: '$ 450.00',
      isNew: true,
      image: '/assets/images/ecommerce/product-3-img.png'
    },
    {
      title: 'Modern lamp',
      price: '$ 143.75',
      image: '/assets/images/ecommerce/product-4-img.png'
    },
    {
      title: 'Lorem ipsum',
      oldPrice: '$ 457.00',
      price: '$ 256.00',
      image: '/assets/images/ecommerce/product-5-img.png'
    },
    {
      title: 'Lorem ipsum',
      price: '$ 742.00',
      isNew: true,
      image: '/assets/images/ecommerce/product-6-img.png'
    },
    {
      title: 'Lorem ipsum',
      price: '$ 256.00',
      image: '/assets/images/ecommerce/product-7-img.png'
    },
    {
      title: 'Lorem ipsum',
      price: '$ 845.00',
      image: '/assets/images/ecommerce/product-8-img.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
