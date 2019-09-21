import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketApiService } from './basket-api/basket-api.service';
import { BasketApiController } from './basket-api/basket-api.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    BasketApiController
  ],
  providers: [
    AppService,
    BasketApiService
  ],
})
export class AppModule {}
