import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [AppComponent, BasketComponent, StoreComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
