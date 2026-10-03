import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseService } from './services/expense.service';
import { ExpenseForm } from './components/expense-form/expense-form';
import { ExpenseList } from './components/expense-list/expense-list';
import { ExpenseSummary } from './components/expense-summary/expense-summary';

@Component({
  imports: [RouterOutlet, ExpenseForm, ExpenseList, ExpenseSummary],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('expense-tracker');
  expenseService = inject(ExpenseService);
}
