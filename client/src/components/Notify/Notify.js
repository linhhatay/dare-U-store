import { useSelector, useDispatch } from 'react-redux';

import Loading from './Loading';
import Toast from './Toast';
import * as notifySlice from '~/redux/notifySlice';

function Notify() {
    const { notify } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleCloseToast = () => {
        dispatch(notifySlice.hide());
    };

    return (
        <div>
            {notify.isLoading && <Loading />}
            {notify.isSuccess && (
                <Toast title="Thành công" message={notify.message} handleCloseToast={handleCloseToast} />
            )}
            {notify.isError && (
                <Toast error title="Thất bại" message={notify.message} handleCloseToast={handleCloseToast} />
            )}
        </div>
    );
}

export default Notify;
