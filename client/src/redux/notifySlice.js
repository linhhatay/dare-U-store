import { createSlice } from '@reduxjs/toolkit';
const initialStates = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

export const notifySlice = createSlice({
    name: 'notify',
    initialState: initialStates,
    reducers: {
        loading: (state, action) => {
            state.isLoading = action.payload;
        },
        success: (state, action) => {
            state.message = action.payload;
            state.isSuccess = true;
            // state.isLoading = action.payload;
        },
        error: (state, action) => {
            state.message = action.payload;
            state.isError = true;
            // state.isLoading = action.payload;
        },
        hide: (state) => {
            return (state = initialStates);
        },
    },
});

export const { loading, success, error, hide } = notifySlice.actions;
export default notifySlice.reducer;
