import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [AppComponent, BasketComponent, StoreComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [BasketService],
  bootstrap: [AppComponent],
  // entryComponents: [AppComponent]
})
export class BasketModule {
  // constructor(private injector: Injector) {
  //   const sender = createCustomElement(AppComponent, { injector });
  //   customElements.define('basket-module', sender);
  // }

  // ngDoBootstrap() {}
}
