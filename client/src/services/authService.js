import * as request from '~/utils/request';
import * as notifySlice from '~/redux/notifySlice';
import * as authSlice from '~/redux/authSlice';

export const login = async (data, dispatch, navigate) => {
    dispatch(notifySlice.loading(true));
    const res = await request.post('/auth/login', data);
    console.log(res);
    try {
        dispatch(authSlice.login(res));
        localStorage.setItem('firstLogin', true);
        dispatch(notifySlice.success(res.message));
        navigate('/');
        dispatch(notifySlice.loading(false));
    } catch (error) {
        dispatch(notifySlice.error(res.message));
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
    }
};

export const logout = async (token, dispatch) => {
    dispatch(notifySlice.loading(true));
    const res = await request.post('/auth/logout', {}, token);
    console.log(res);
    try {
        localStorage.removeItem('firstLogin');
        dispatch(authSlice.logout());
        dispatch(notifySlice.success(res.message));
        dispatch(notifySlice.loading(false));
    } catch (error) {
        dispatch(notifySlice.error(res.message));
    }
};
