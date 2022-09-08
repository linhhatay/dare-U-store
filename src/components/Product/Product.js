import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <div className={cx('badge')}>-15%</div>
                <img
                    src="https://dareu.com.vn/wp-content/uploads/2021/04/ban-phim-co-khong-day-dareu-ek861-01-400x400.png"
                    alt=""
                />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Bàn phím cơ không dây DAREU EK861 61KEY (PBT, Blue/ Brown/ Red D-KAILH switch)
                </p>
                <div>
                    <span className={cx('old-price')}>1.099.000</span>
                    <span className={cx('new-price')}>600.000</span>
                </div>
                <div className={cx('status')}>
                    <FaCheck className={cx('icon')} />
                    Còn hàng
                </div>
            </div>
        </div>
    );
}

export default Product;
