import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: {},
    },
    reducers: {
        login: (state, action) => {
            state.data = action.payload;
        },
        register: (state, action) => {
            state = action.payload;
        },
    },
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
