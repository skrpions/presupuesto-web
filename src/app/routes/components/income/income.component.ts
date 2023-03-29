import { Component, inject, OnInit } from '@angular/core';
import { IConcept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  listIncome: IConcept[] = [];

  private _budgetSvc = inject(BudgetService);

  ngOnInit(): void {
    this.listIncome = this._budgetSvc.listIncome;
  }

  /* deleteItem(index: number) {
    this._budgetSvc.delete(index);
  } */

  delete(index: number) {
    this.listIncome.splice(index, 1);
  }
}
