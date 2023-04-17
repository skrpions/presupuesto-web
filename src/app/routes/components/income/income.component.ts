import { Component, OnInit, inject } from '@angular/core';
import { Concept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  listIncome: Concept[] = [];

  private _budgetService = inject(BudgetService);

  ngOnInit(): void {
    this.listIncome = this._budgetService.listIncome;
  }

  delete(index: number) {
    this.listIncome.splice(index, 1);
  }
}
