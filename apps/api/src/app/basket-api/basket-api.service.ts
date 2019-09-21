import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketApiService {
  products = [
    {
        price: 199,
        currency: 'PLN',
        name: 'The greatest IDE',
        quantity: 1
    },
    {
        price: 99,
        currency: 'PLN',
        name: 'Keyboard',
        quantity: 1
    },
    {
        price: 299,
        currency: 'PLN',
        name: 'Server',
        quantity: 1
    },
    {
        price: 499,
        currency: 'PLN',
        name: 'Electricity',
        quantity: 1
    },
  ];

  storeProducts = [
    {
        price: 999,
        currency: 'PLN',
        name: 'Smartphone',
    },
    {
        price: 750,
        currency: 'PLN',
        name: 'Monitor',
    },
    {
        price: 2500,
        currency: 'PLN',
        name: 'PC',
    }
  ]

  getProducts(): any[] {
    return this.products;
  }

  getStoreProducts(): any {
      return this.storeProducts;
  }

  buyProducts(boughtProducts): void {
    this.products = this.products.concat(boughtProducts);
  }

}
