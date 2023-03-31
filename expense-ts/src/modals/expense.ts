export type Expense = {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

export type Items = {
    items: Expense[];
}

export type ExpenseItems = {
    title: string;
    amount: number;
    date: Date;
}

export type ExpenseDate = {
    date: Date;
}