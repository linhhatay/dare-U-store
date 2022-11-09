import { createSlice } from '@reduxjs/toolkit';

export const notifySlice = createSlice({
    name: 'notify',
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
    },
    reducers: {
        loading: (state, action) => {
            state.isLoading = action.payload;
        },
        success: (state, action) => {
            state.message = action.payload;
            state.isSuccess = true;
            state.isLoading = action.payload;
        },
        error: (state, action) => {
            state.message = action.payload;
            state.isError = true;
            state.isLoading = action.payload;
        },
    },
});

export const { loading, success, error } = notifySlice.actions;
export default notifySlice.reducer;
