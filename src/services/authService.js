import * as request from '~/utils/request';
import * as notifySlice from '~/redux/notifySlice';
import * as authSlice from '~/redux/authSlice';

export const login = async (data, dispatch, navigate) => {
    try {
        dispatch(notifySlice.loading());
        const res = await request.post('/auth/login', data);
        dispatch(authSlice.login(res));
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

export const logout = async (data, dispatch) => {
    try {
        const res = await request.post('/auth/logout', data);
        return res.data;
    } catch (error) {
        dispatch(notifySlice.error());
    }
};
