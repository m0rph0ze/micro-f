import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketNameComponent } from './basket-name/basket-name.component';

@NgModule({
  imports: [CommonModule],
  exports: [BasketNameComponent],
  declarations: [BasketNameComponent]
})
export class BasketLibModule {}
