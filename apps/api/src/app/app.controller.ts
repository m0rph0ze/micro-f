import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('incomes')
  getIncomes() {
    return this.appService.getIncomes();
  };

  @Post('addIncome')
  addIncome(@Body() income: any) {
    return this.appService.addIncome(income)
  }
}
