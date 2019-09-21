import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketService } from '../basket.service';
import { Observable, Subscription } from 'rxjs';
import { ProductBought } from '../models/product-bought';
import { Product } from '../models/product';

@Component({
  selector: 'micro-f-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {

  private _products: Subscription;
  public products: Product[] = [];

  constructor(
    private $basketApiService: BasketService
  ) { }

  ngOnInit() {
    this.subscribeToProductsUpdate();
    this.$basketApiService.getProducts();
  }

  subscribeToProductsUpdate(): void {
    this._products = this.$basketApiService.subscribeToProducts().subscribe((products: Product[]) => this.products = products);
  }

  ngOnDestroy(): void {
    this._products.unsubscribe();
  }

}
