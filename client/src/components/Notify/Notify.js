import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import Toast from './Toast';
import { useEffect } from 'react';

function Notify() {
    const { notify, loading } = useSelector((state) => state);

    const dispatch = useDispatch();

    const handleCloseToast = () => {
        dispatch({
            type: 'CLEAR_NOTIFY',
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({
                type: 'CLEAR_NOTIFY',
            });
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [dispatch]);

    return (
        <div>
            {loading && <Loading />}

            {notify.status === 'SUCCESS' && (
                <Toast title="Thành công" message={notify.message} handleCloseToast={handleCloseToast} />
            )}
            {notify.status === 'FAILURE' && (
                <Toast error title="Thất bại" message={notify.message} handleCloseToast={handleCloseToast} />
            )}
        </div>
    );
}

export default Notify;
