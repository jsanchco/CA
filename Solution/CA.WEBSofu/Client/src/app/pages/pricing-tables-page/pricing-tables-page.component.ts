import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pricing-tables-page',
  templateUrl: './pricing-tables-page.component.html',
  styleUrls: ['./pricing-tables-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PricingTablesPageComponent implements OnInit {

  // Model for pricing items
  pricingItems = [
    {
      name: 'STANDARD',
      price: '49',
      features: [
        'Lorem ipsum dolor',
        'Lorem ipsum',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit'
      ]
    },
    {
      name: 'PREMIUM',
      price: '59',
      features: [
        'Lorem ipsum dolor',
        'Lorem ipsum',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit'
      ]
    },
    {
      name: 'UNLIMITED',
      price: '89',
      features: [
        'Lorem ipsum dolor',
        'Lorem ipsum',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
