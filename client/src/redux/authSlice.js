import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        login: (state, action) => {
            return (state = action.payload);
        },
        register: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
