import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartType, Item } from '../models/cartType';

const initialCart: CartType = {
    items: [],
    totalAmount: 0, // total price not total item
} 

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            state.totalAmount += (newItem.amount * newItem.price);
            
            if (!state.items[existingItemIndex]) {
                state.items.push(newItem);
            }

            else {
                state.items[existingItemIndex].amount += newItem.amount;
                
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            const existingItemIndex = state.items.findIndex((item) => item.id === id);
            state.totalAmount -= existingItem!.price;

            if (existingItem?.amount === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            }

            else {
                state.items[existingItemIndex].amount--;
            }

        } 
    }
});

export default cartSlice;