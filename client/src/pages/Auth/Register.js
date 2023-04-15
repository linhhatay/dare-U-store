import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import styles from './Auth.module.scss';
import { register } from '~/redux/actions/authAction';

const cx = classNames.bind(styles);

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register({ email, password, passwordConfirm }));
    };

    return (
        <div className={cx('register')}>
            <h3>Đăng ký</h3>
            <form>
                <div className={cx('form-group')}>
                    <label>Địa chỉ email *</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={cx('form-group')}>
                    <label>Mật khẩu *</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={cx('form-group')}>
                    <label>Xác nhận mật khẩu *</label>
                    <input
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <p className={cx('description')}>
                    Tất cả thông tin của bạn chỉ được sử dụng cho việc đặt hàng và cải thiện trải nghiệm sản phẩm. Ngoài
                    ra được Dareu đảm bảo về quyền riêng tư cá nhân theo quy định luật pháp.
                </p>
                <Button primary className={cx('btn-login')} onClick={handleRegister}>
                    Đăng ký
                </Button>
            </form>
        </div>
    );
}

export default Register;
