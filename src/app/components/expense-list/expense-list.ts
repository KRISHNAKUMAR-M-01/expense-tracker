import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CurrencyPipe, DatePipe, FormsModule],
  selector: 'app-expense-list',
  styleUrl: './expense-list.css',
  templateUrl: './expense-list.html',
})
export class ExpenseList {
  expenseService = inject(ExpenseService);

  // Options for the dropdown
  categories = this.expenseService.categories;

  // The category the user picked
  selectedCategory = signal('All');

  // The list we actually show
  filteredExpenses = computed(() => {
    const category = this.selectedCategory();
    const list = this.expenseService.allExpenses();

    return category === 'All' ? list : list.filter((e) => e.category === category);
  });

  onDelete(id: number) {
    const confirmed = confirm('Delete this Transaction');
    if (confirmed) {
      this.expenseService.deleteExpense(id);
    }
  }
}
