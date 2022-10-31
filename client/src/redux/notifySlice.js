import { createSlice } from '@reduxjs/toolkit';

export const notifySlice = createSlice({
    name: 'notify',
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        success: (state) => {
            state.isSuccess = true;
            state.isLoading = false;
        },
        error: (state) => {
            state.isError = true;
            state.isLoading = false;
        },
    },
});

export const { loading, success, error } = notifySlice.actions;
export default notifySlice.reducer;
