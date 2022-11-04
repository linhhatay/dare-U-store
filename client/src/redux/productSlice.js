import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
    name: 'product',
    initialState: {},
    reducers: {
        get: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { get } = productSlice.actions;
export default productSlice.reducer;
