import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Auth.module.scss';
import { login } from '~/redux/actions/authAction';

const cx = classNames.bind(styles);

function Login() {
    const { auth } = useSelector((state) => state);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    useEffect(() => {
        if (auth.token) navigate('/');
    }, [auth.token, navigate]);

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
