import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Income } from '../models/income';

@Component({
  selector: 'micro-f-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {
  public incomes: Income[] = [
    new Income(1000, 'USD', 'Website development', 3.9),
    new Income(758, 'GPD', 'Logo design', 4.7),
    new Income(633, 'EUR', 'Additional IT services', 4.3),
    new Income(1924,'PLN', 'Programming services', 1)
  ];

  public incomeForm = this.formBuilder.group({
    amount: [0, Validators.compose([Validators.required, Validators.min(0)])],
    currency: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    service: ['', Validators.compose([Validators.required])],
    rate: [0, Validators.compose([Validators.required, Validators.min(0)])],
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  addIncome(formDirective: FormGroupDirective, incomes: Income[]): void {
    if(formDirective.form.valid) {
      incomes.push(new Income(
        formDirective.form.controls['amount'].value,
        formDirective.form.controls['currency'].value,
        formDirective.form.controls['service'].value,
        formDirective.form.controls['rate'].value
      ));
    }
  }

}
