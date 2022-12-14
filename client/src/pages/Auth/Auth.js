import classNames from 'classnames/bind';

import Separate from '~/components/Separate';
import styles from './Auth.module.scss';
import Register from './Register';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

function Auth() {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogout = () => {
        const data = auth?.accessToken;
        authService.logout(data, dispatch);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <h1>Tài khoản</h1>
                    <Separate />
                </header>
                <div className={cx('container')}>
                    <div className={cx(['woocommerce', auth.accessToken && 'account'])}>
                        {auth.accessToken ? (
                            <div>
                                <p className={cx('notify')}>
                                    Xin chào <strong>Linh</strong> (không phải tài khoản <strong>Linh</strong>? Hãy
                                    <strong onClick={handleLogout}> thoát ra</strong> và đăng nhập vào tài khoản của
                                    bạn)
                                </p>
                                <p className={cx('notify')}>
                                    Từ trang quản lý tài khoản bạn có thể xem <a>đơn hàng mới</a>, quản lý{' '}
                                    <a>địa chỉ giao hàng và thanh toán</a>, <a>sửa mật khẩu và thông tin tài khoản</a>
                                </p>
                                <div className={cx('dashboard')}>
                                    <div>
                                        <a>Đơn hàng</a>
                                    </div>
                                    <div>
                                        <a>Tải xuống</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Login />
                                <Register />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
