import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        add: (state, action) => {
            // const titleProduct = action.payload.title;
            // const options = action.payload.options;
            // const quantity = action.payload.quantity;
            // const price = action.payload.price;
            const { title, quantity, price, options, image } = action.payload;
            state.products.push({ title, options, quantity, price, image });
            state.quantity += quantity;
            state.total += price;
        },
    },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
