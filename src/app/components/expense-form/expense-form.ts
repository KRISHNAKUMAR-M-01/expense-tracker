import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-expense-form',
  styleUrl: './expense-form.css',
  templateUrl: './expense-form.html',
})
export class ExpenseForm {

  private expenseService = inject(ExpenseService);

  title = '';
  amount: number | null = null;
  type: 'income' | 'expense' = 'expense';
  category = 'Food';
  date = new Date().toISOString().split('T')[0];

  categories = this.expenseService.categories;

  onSubmit(form: NgForm) {
    if(form.invalid || !this.title.trim() || this.amount === null) {
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      title: this.title.trim(),
      amount: this.amount,
      type: this.type, 
      category: this.category,
      date: this.date,
    };

    this.expenseService.addExpense(newExpense);
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm({
    title: '',
    amount: null,
    type: 'expense',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],

    })
  }
}
