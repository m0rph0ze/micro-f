import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Income } from '../models/income';

@Injectable()
export class IncomesService {

  constructor(
    private http: HttpClient
  ) { }

  getIncomes(): Promise<Income[]> {
    return new Promise((resolve, reject) => {
      let url: string = `/api/incomes`;
      this.http.get<Income[]>(url).subscribe(resolve,reject);
    })
  }
}
