import { configureStore } from '@reduxjs/toolkit';
import product from './productSlice';
import notify from './notifySlice';
import auth from './authSlice';

export default configureStore({
    reducer: {
        product,
        notify,
        auth,
    },
});
