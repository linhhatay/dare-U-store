import { configureStore } from '@reduxjs/toolkit';
import product from './productSlice';
import notify from './notifySlice';
import auth from './authSlice';
import cart from './cartSlice';

export default configureStore({
    reducer: {
        product,
        notify,
        auth,
        cart,
    },
});
