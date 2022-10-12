import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(create.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
            })
            .addCase(create.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(get.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(get.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(get.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export const create = createAsyncThunk('product/create', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/product/create', state);
        return res.data;
    } catch (error) {
        console.log('Có lỗi !!');
    }
});

export const get = createAsyncThunk('product/get', async (state, action) => {
    try {
        const res = await axios.get('http://localhost:5000/api/v1/product');
        console.log(res);
        return res.data;
    } catch (error) {
        console.log('Có lỗi !!');
    }
});

export const {} = productSlice.actions;
export default productSlice.reducer;
