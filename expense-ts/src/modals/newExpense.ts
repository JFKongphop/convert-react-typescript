import { Expense } from './expense';
export type NewExpense = {
    enteredTitle: string
    enteredAmount: number
    enteredDate: string
}

export type NewExpenseProps = {
    onAddExpense: (expense: Expense) => void
}