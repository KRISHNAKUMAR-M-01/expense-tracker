import { computed, Injectable, signal } from "@angular/core";
import { Expense } from '../models/expense';

@Injectable({ providedIn: 'root'})
export class ExpenseService {

    //categories
    readonly categories = ['Food', 'Travel', 'Shopping', 'Bills', 'Job', 'Other'];

    // Array that holds all our data
    private expenses = signal<Expense[]>([
        {
            id: 1,
            title: 'Salary',
            amount: 30000,
            type: 'income',
            category: 'Job',
            date: '2026-10-01',
        },
        {
            id: 2,
            title: 'Biriyani',
            amount: 250,
            type: 'expense',
            category: 'Food',
            date: '2026-10-02',
        },
    ]);

    // Read-only version for components
    readonly allExpenses = this.expenses.asReadonly();

    //Total income
    readonly totalIncome = computed(() => 
    this.expenses().filter((e) => e.type === 'income').reduce((sum, e) => sum + e.amount, 0));

    //Total expense
    readonly totalExpense = computed(() =>
        this.expenses()
           .filter((e) => e.type === 'expense')
           .reduce((sum,e) => sum + e.amount, 0)
        );

    //Balance
    readonly balance = computed(() => this.totalIncome() - this.totalExpense());    

    //Add a new expense
    addExpense(expense: Expense) {
        this.expenses.update((list) => [...list,expense]);
    }

    //Delete an expense by id
    deleteExpense(id: number) {
        this.expenses.update((list) => list.filter((e) => e.id !== id));
    }
}