import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BasketLibModule } from '@micro-f/basket-lib';
import { OneLibModule } from 'C:/Users/kmarszalkiewicz/Documents/nx-mikrof/micro-f/libs/one-lib/src/lib/one-lib.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BasketLibModule,
    OneLibModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
