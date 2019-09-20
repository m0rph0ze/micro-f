import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Income } from '../models/income';
import { IncomeInterface } from '../models/income-interface';

@Injectable()
export class IncomesService {
  host: string = 'api/';
  constructor(
    private http: HttpClient
  ) { }

  getIncomes(): Promise<Income[]> {
    return new Promise((resolve, reject) => {
      let url: string = `${this.host}incomes`;
      this.http.get<Income[]>(url).subscribe(resolve,reject);
    });
  }

  postIncome(income: IncomeInterface): void {
    let url: string = `${this.host}addIncome`;
    this.http.post(url, income).subscribe(console.log,console.error)
  }
}
