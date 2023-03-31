export type StateMents = {
    id: number;
    title: string;
    amount: number
}

export type RemoveById = {
    id: number;
}

export type InitialStatement = {
    income: number,
    expense: number,
    total: number,
    statement: StateMents[]
}