import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Income } from '../models/income';
import { IncomesService } from './incomes.service';

@Component({
  selector: 'micro-f-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {
  public incomes: Income[] = [];

  public incomeForm = this.formBuilder.group({
    amount: [0, Validators.compose([Validators.required, Validators.min(0)])],
    currency: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    service: ['', Validators.compose([Validators.required])],
    rate: [0, Validators.compose([Validators.required, Validators.min(0)])],
  })

  constructor(
    private formBuilder: FormBuilder,
    private $incomeService: IncomesService
  ) { }

  ngOnInit() {
    this.getIncomes();
  }

  getIncomes(): void {
    this.$incomeService.getIncomes()
    .then((incomes: Income[]) => incomes.forEach(
      (income: Income) => this.incomes.push(new Income(income.amount, income.currency, income.service, income.rate))
    ))
    .catch(console.error);
  }

  addIncome(formDirective: FormGroupDirective, incomes: Income[]): void {
    if(formDirective.form.valid) {
      let income: Income = new Income(
        formDirective.form.controls['amount'].value,
        formDirective.form.controls['currency'].value,
        formDirective.form.controls['service'].value,
        formDirective.form.controls['rate'].value
      );
      this.$incomeService.postIncome({
        amount: formDirective.form.controls['amount'].value,
        currency: formDirective.form.controls['currency'].value,
        service: formDirective.form.controls['service'].value,
        rate: formDirective.form.controls['rate'].value
      });
      this.incomes.push(income);
    }
  }

}
