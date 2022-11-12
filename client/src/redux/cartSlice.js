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
            const { title, quantity, price, options } = action.payload;

            const check = state.products.every((item) => {
                return (
                    item.title !== title ||
                    item.options.color !== options.color ||
                    item.options.switch !== options.switch
                );
            });

            if (check) {
                state.products.push(action.payload);
            } else {
                state.products.forEach((element, index) => {
                    if (
                        element.title === title &&
                        element.options.color === options.color &&
                        element.options.switch === options.switch
                    ) {
                        state.products[index].quantity = state.products[index].quantity += quantity;
                    }
                });
            }

            state.quantity += quantity;
            state.total += price;
        },
        remove: (state, action) => {
            const { title, quantity, price, options } = action.payload;

            state.products = state.products.filter(
                (product) =>
                    product.title !== title ||
                    product.options.color !== options.color ||
                    product.options.switch !== options.switch,
            );
            state.quantity -= quantity;
            state.total -= price;
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
