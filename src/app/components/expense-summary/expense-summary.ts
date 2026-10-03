import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-summary',
  imports: [CurrencyPipe],
  templateUrl: './expense-summary.html',
  styleUrl: './expense-summary.css',
})
export class ExpenseSummary {
  expenseService = inject(ExpenseService);
}