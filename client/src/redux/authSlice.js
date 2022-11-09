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
        logout: (state) => {
            return (state = {});
        },
    },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
