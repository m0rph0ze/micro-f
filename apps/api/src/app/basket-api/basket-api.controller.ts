import { Controller, Get, Post, Body } from '@nestjs/common';
import { BasketApiService } from './basket-api.service';

@Controller()
export class BasketApiController {
  constructor(private readonly appService: BasketApiService) {}

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  };

  @Get('storeProducts')
  getStoreProducts() {
    return this.appService.getStoreProducts();
  };

  @Post('buyProducts')
  buyProducts(@Body() boughtProducts) {
      console.warn(boughtProducts);
      return this.appService.buyProducts(boughtProducts)
  }
}
