import {configureStore } from '@reduxjs/toolkit';
import statementSlice from './statementStore'

export const store = configureStore({
    reducer: {
        statementConsole: statementSlice.reducer
    }
});

export const statementAction = statementSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

