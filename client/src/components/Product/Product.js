import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <div className={cx('badge')}>-15%</div>
                <img src={data.image} alt="" />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.name}</p>
                <div>
                    <span className={cx('old-price')}>{data.oldPrice}đ</span>
                    <span className={cx('new-price')}>{data.newPrice}đ</span>
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
