import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await axios.get('http://localhost:5000/api/v1/products');

        dispatch({
            type: 'FETCH_PRODUCTS',
            payload: response.data.data.data,
        });

        dispatch({ type: 'CALL_API_END' });
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
