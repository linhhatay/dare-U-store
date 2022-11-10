import * as request from '~/utils/request';
import * as notifySlice from '~/redux/notifySlice';
import * as authSlice from '~/redux/authSlice';

export const login = async (data, dispatch, navigate) => {
    dispatch(notifySlice.loading(true));
    const res = await request.post('/auth/login', data);
    try {
        dispatch(authSlice.login(res));
        localStorage.setItem('token', res.accessToken);
        dispatch(notifySlice.success(res.message));
        navigate('/');
        dispatch(notifySlice.loading(false));
    } catch (error) {
        dispatch(notifySlice.error(res.message));
        dispatch(notifySlice.loading(false));
    }
};

export const register = async (data, dispatch) => {
    dispatch(notifySlice.loading(true));
    const res = await request.post('/auth/register', data);
    try {
        dispatch(authSlice.register(res.data));
        dispatch(notifySlice.success(res.message));
        dispatch(notifySlice.loading(false));
    } catch (error) {
        dispatch(notifySlice.error(res.message));
        dispatch(notifySlice.loading(false));
    }
};

export const logout = async (token, dispatch) => {
    dispatch(notifySlice.loading(true));
    const res = await request.post('/auth/logout', {}, token);
    try {
        localStorage.removeItem('token');
        dispatch(authSlice.logout());
        dispatch(notifySlice.success(res.message));
        dispatch(notifySlice.loading(false));
    } catch (error) {
        dispatch(notifySlice.error(res.message));
        dispatch(notifySlice.loading(false));
    }
};

export const refreshToken = async (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        dispatch(notifySlice.loading(true));
        const res = await request.post('/auth/refresh_token', {}, token);
        try {
            dispatch(authSlice.refreshToken(res.accessToken));
            dispatch(notifySlice.loading(false));
        } catch (error) {
            dispatch(notifySlice.error(res.message));
            dispatch(notifySlice.loading(false));
        }
    }
};
