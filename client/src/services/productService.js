import * as request from '~/utils/request';
import * as notifySlice from '~/redux/notifySlice';
import * as productSlice from '~/redux/productSlice';

export const getProducts = async (dispatch) => {
    try {
        dispatch(notifySlice.loading());
        const res = await request.get('/product');
        dispatch(productSlice.get(res));
        dispatch(notifySlice.success());
    } catch (error) {
        dispatch(notifySlice.error());
    }
};
