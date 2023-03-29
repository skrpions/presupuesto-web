import { Component, inject, Input } from '@angular/core';
import { IConcept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  @Input() totalIncome: number = 0;

  listExpenses: IConcept[] = [];

  private _budgetSvc = inject(BudgetService);

  ngOnInit(): void {
    this.listExpenses = this._budgetSvc.listExpenses;
  }

  delete(index: number) {
    this.listExpenses.splice(index, 1);
  }

  calculatePercentage(expense: IConcept) {
    return expense.value / this.totalIncome;
  }
}
