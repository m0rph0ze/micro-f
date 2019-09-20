import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  incomes = [
    {amount: 1000, currency:  'USD',service: 'Website development', rate: 3.9},
    {amount: 758,  currency: 'GPD', service:'Logo design', rate: 4.7},
    {amount: 633,  currency: 'EUR', service:'Additional IT services', rate: 4.3},
    {amount: 1924, currency: 'PLN', service:'Programming services', rate: 1}
  ];

  getIncomes(): any[] {
    return this.incomes;
  }

  addIncome(income: any): void {
    this.incomes.push(income);
  }

}
