export interface Expense {
    id: number;
    title: string;
    amount: number;
    type: 'income'|'expense';
    category: string;
    date: string;
}
