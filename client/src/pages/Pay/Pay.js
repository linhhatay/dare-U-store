import classNames from 'classnames/bind';
import styles from './Pay.module.scss';

const cx = classNames.bind(styles);

function Pay() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('customer')}>
                    <div className={cx('infomation')}>
                        <h3>Thông tin thanh toán</h3>
                        <div>
                            <div className={cx('form-group')}>
                                <label>Tên *</label>
                                <input type="text" />
                            </div>
                            <div className={cx('form-group')}>
                                <label>Tên công ty (tùy chọn)</label>
                                <input type="text" />
                            </div>
                            <div className={cx('form-group')}>
                                <label>Số điện thoại *</label>
                                <input type="text" />
                            </div>
                            <div className={cx('form-group')}>
                                <label>Địa chỉ email *</label>
                                <input type="text" />
                            </div>
                            <div className={cx('country')}>
                                <label>Quốc gia/Khu vực *</label>
                                <span>Việt Nam</span>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Địa chỉ *</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('bill')}></div>
            </div>
        </div>
    );
}

export default Pay;
