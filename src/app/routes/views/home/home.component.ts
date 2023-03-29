import { Component, inject, OnInit } from '@angular/core';
import { IConcept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalIncome: IConcept[] = [];
  totalExpenses: IConcept[] = [];

  private _budgetSvc = inject(BudgetService);

  ngOnInit(): void {
    this.totalIncome = this._budgetSvc.listIncome;
    this.totalExpenses = this._budgetSvc.listExpenses;
  }

  getTotalIncome(): number {
    let total: number = 0;

    this.totalIncome.map((income: IConcept) => {
      total += income.value;
    });

    return total;
  }

  getTotalExpenses(): number {
    let total: number = 0;

    this.totalExpenses.map((expenses: IConcept) => {
      total += expenses.value;
    });

    return total;
  }

  getTotalBudget(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  getTotalPercentage(): number {
    return this.getTotalExpenses() / this.getTotalIncome();
  }
}
