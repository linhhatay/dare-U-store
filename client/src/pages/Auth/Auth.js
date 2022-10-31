import classNames from 'classnames/bind';

import Separate from '~/components/Separate';
import styles from './Auth.module.scss';
import Register from './Register';
import Login from './Login';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Auth() {
    const { auth } = useSelector((state) => state);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <h1>Tài khoản</h1>
                    <Separate />
                </header>
                <div className={cx('container')}>
                    <div className={cx('woocommerce')}>
                        {auth.data.accessToken ? (
                            <div>
                                <p className={cx('notify')}>
                                    Xin chào <strong>Linh</strong> (không phải tài khoản <strong>Linh</strong>? Hãy
                                    thoát ra và đăng nhập vào tài khoản của bạn)
                                </p>
                                <p className={cx('notify')}>
                                    Từ trang quản lý tài khoản bạn có thể xem <a>đơn hàng mới</a>, quản lý{' '}
                                    <a>địa chỉ giao hàng và thanh toán</a>, and{' '}
                                    <a>sửa mật khẩu và thông tin tài khoản</a>
                                </p>
                                <div className={cx('dashboard')}>
                                    <div>
                                        <a>Đơn hàng</a>
                                    </div>
                                    <div>
                                        <a>Tải xuống</a>
                                    </div>
                                    <div>
                                        <a>Địa chỉ</a>
                                    </div>
                                    <div>
                                        <a>Tài khoản</a>
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
