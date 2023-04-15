import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await axios.post('http://localhost:5000/api/v1/users/login', credentials);

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user: response.data.data.user, token: response.data.token },
        });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: 'Đăng nhập thành công',
                status: 'SUCCESS',
            },
        });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: 'Đăng nhập không thành công',
                status: 'FAILURE',
            },
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        await axios.get('http://localhost:5000/api/v1/users/logout');

        dispatch({ type: 'LOGOUT' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: 'Đăng xuất thành công',
                status: 'SUCCESS',
            },
        });
    } catch (error) {
        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: 'Đã có lỗi xảy ra',
                status: 'FAILURE',
            },
        });
    }
};

export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await axios.post('http://localhost:5000/api/v1/users/signup', data);

        dispatch({ type: 'REGISTER_SUCCESS', payload: { user: response.data.data.user, token: response.data.token } });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: 'Đăng kí thành công',
                status: 'SUCCESS',
            },
        });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE' });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: error.response.data.message,
                status: 'FAILURE',
            },
        });
    }
};
