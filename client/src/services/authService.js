import * as request from '~/utils/request';
import * as notifySlice from '~/redux/notifySlice';
import * as authSlice from '~/redux/authSlice';

export const login = async (data, dispatch, navigate) => {
    try {
        dispatch(notifySlice.loading());
        const res = await request.post('/auth/login', data);
        dispatch(authSlice.login(res));
        localStorage.setItem('firstLogin', true);
        dispatch(notifySlice.success());
        navigate('/');
    } catch (error) {
        dispatch(notifySlice.error());
    }
};

export const register = async (data, dispatch) => {
    try {
        dispatch(notifySlice.loading());
        const res = await request.post('/auth/register', data);
        dispatch(authSlice.register(res.data));
        dispatch(notifySlice.success());
    } catch (error) {
        dispatch(notifySlice.error());
    }
};

export const logout = async (token, dispatch) => {
    try {
        dispatch(notifySlice.loading());
        await request.post('/auth/logout', {}, token);
        localStorage.removeItem('firstLogin');
        dispatch(authSlice.logout());
        dispatch(notifySlice.success());
    } catch (error) {
        dispatch(notifySlice.error());
    }
};
