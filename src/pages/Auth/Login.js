import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import styles from './Auth.module.scss';
import * as authService from '~/services/authService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const data = { email, password };
        authService.login(data, dispatch, navigate);
    };
    return (
        <div className={cx('login')}>
            <h3>Đăng nhập</h3>
            <form>
                <div className={cx('form-group')}>
                    <label>Tên tài khoản hoặc địa chỉ email *</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={cx('form-group')}>
                    <label>Mật khẩu *</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button primary className={cx('btn-login')} onClick={handleLogin}>
                    Đăng Nhập
                </Button>
            </form>
        </div>
    );
}

export default Login;
