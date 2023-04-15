import classNames from 'classnames/bind';
import styles from './Newslette.module.scss';

const cx = classNames.bind(styles);

function Newslette() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <h3>
                        <strong>Đăng ký nhận tin tức từ Dareu:</strong>
                    </h3>
                    <p>Cảm ơn bạn đã luôn đồng hành cùng Dareu</p>
                </div>
            </div>
        </div>
    );
}

export default Newslette;
