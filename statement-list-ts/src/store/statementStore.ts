import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateMents, InitialStatement, RemoveById} from '../modals/initialStatement'

const initialStatement: InitialStatement = {
    income: 0,
    expense: 0,
    total: 0,
    statement: []
}

const statementSlice = createSlice({
    name: 'statement',
    initialState: initialStatement,
    reducers: {
        addStatement: (state, action: PayloadAction<StateMents>) => {
            const { id, title, amount } = action.payload
            if (amount >= 0) {
                state.income += amount
            } 

            else {
                state.expense += amount
            }

            state.statement.push({
                id,
                title,
                amount
            });
        },
        removeStatement: (state, action: PayloadAction<RemoveById>) => {
            state.statement.filter((tx) => tx.id !== action.payload.id)
        }
    }
});

export default statementSlice;