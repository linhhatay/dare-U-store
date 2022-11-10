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
        refreshToken: (state, action) => {
            return (state = { ...state, accessToken: action.payload });
        },
    },
});

export const { login, register, logout, refreshToken } = authSlice.actions;
export default authSlice.reducer;
