import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.slug === newItem.slug);
            state.cartItems = existingItem ? state.cartItems.map((item) => item.title === newItem.title ? newItem : item) : [...state.cartItems, newItem];
            state.itemsPrice = state.cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
            state.totalPrice = state.itemsPrice;
        },
        REMOVE_ITEM: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.slug !== action.payload.slug);
            state.itemsPrice = state.cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
            state.totalPrice = state.itemsPrice;
        }
    }
})

export const { ADD_TO_CART, REMOVE_ITEM } = cartSlice.actions;
export default cartSlice.reducer;