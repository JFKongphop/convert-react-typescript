import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store/statementConsole";

export const generateId = ():number => {
    return Math.floor(Date.now() * Math.random())
}

export const statementStatus = (amount: number, type: string): string => {
    if (type === 'status') {
        if (amount > 0) return 'income';
        return 'expense';
    }

    if (type === 'symbol') {
        if (amount > 0) return '+';
        return '-';
    }

    return '';
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;