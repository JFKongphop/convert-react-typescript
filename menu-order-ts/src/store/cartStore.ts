import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cardSlice";

export const store = configureStore({
    reducer: {
        cartConsole: cartSlice.reducer
    }
})

export const cartAction = cartSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;