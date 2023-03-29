import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from 'src/app/core/services/budget.service';
import { IConcept } from './../../../core/models/concept';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formBudget!: FormGroup;
  redBorder: boolean = false;

  private concept!: IConcept;
  private fb = inject(FormBuilder);
  private _budgetSvc = inject(BudgetService);

  operations = [
    {
      abbreviation: 'ing',
      sign: '+',
    },
    {
      abbreviation: 'egr',
      sign: '-',
    },
  ];

  constructor() {
    this.loadForm();
  }

  loadForm(): void {
    this.formBudget = this.fb.nonNullable.group({
      operation: ['ing', []],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      value: ['', [Validators.required, Validators.min(0)]],
      percentage: 0,
    });

    this.formBudget.get('operation')?.valueChanges.subscribe((value) => {
      return (this.redBorder = value !== 'ing');
    });
  }

  send(): void {
    if (this.formBudget.invalid) return;

    this.concept = this.formBudget.value;
    const operation = this.concept.operation;

    // send form
    operation === 'ing'
      ? this._budgetSvc.listIncome.push(this.concept)
      : this._budgetSvc.listExpenses.push(this.concept);

    // reset form
    this.formBudget.reset();
  }
}
