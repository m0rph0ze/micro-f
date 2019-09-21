import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductBought } from './models/product-bought';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private host: string = 'api/';
  products: Product[] =  [];
  productSubject: Subject<Product[]> = new Subject;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): void {
    let url: string = `${this.host}products`;
    this.http.get<ProductBought[]>(url)
    .subscribe((products: ProductBought[]) => {
        console.warn(products);
        this.products = products;
        this.productSubject.next(this.products);
      });
  }

  getStoreProducts(): Observable<Product[]> {
      let url: string = `${this.host}storeProducts`;
      return this.http.get<Product[]>(url);
  }

  buyProducts(products: ProductBought[]): void {
    console.warn(products);
    let url: string = `${this.host}buyProducts`;
    this.http.post(url, products).subscribe(
      () => {
        this.productSubject.next(this.products.concat(products));
      },
      console.error)
  }

  subscribeToProducts(): Observable<Product[]> {
    return this.productSubject.asObservable()
  }
}
