import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { FormControl, Validators } from '@angular/forms';
import { ProductBought } from '../models/product-bought';

@Component({
  selector: 'micro-f-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public storeProducts$ : Observable<Product[]>;
  public quantity: FormControl = new FormControl(0, Validators.min(1));
  public addedProducts: ProductBought[] = [];

  constructor(
    private $basketService: BasketService
  ) { }

  ngOnInit() {
    this.getStoreProducts();
  }

  getStoreProducts(): void {
    this.storeProducts$ = this.$basketService.getStoreProducts();
  }

  addProduct(product: Product, quantity: FormControl, addedProducts: ProductBought[]): void {
    let boughtProduct: ProductBought = {
      name: product.name,
      price: product.price,
      currency: product.currency,
      quantity: quantity.value
    }
    addedProducts.push(boughtProduct);
  }

  buyProducts(): void {
    this.$basketService.buyProducts(this.addedProducts)
    this.addedProducts = [];
  }

}
