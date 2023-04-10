import { Injectable } from '@angular/core';
import { IConcept } from '../models/concept';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  listIncome: IConcept[] = [
    {
      operation: 'ing',
      description: 'Salary',
      value: 4000,
    },
    {
      operation: 'ing',
      description: 'Carro',
      value: 500,
    },
  ];

  listExpenses: IConcept[] = [
    {
      operation: 'egr',
      description: 'Renta',
      value: 900,
    },
    {
      operation: 'egr',
      description: 'Ropa',
      value: 200,
    },
  ];
}
