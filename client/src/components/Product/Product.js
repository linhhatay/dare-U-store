import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
    const handleSale = (price, sold) => {
        let newPrice = Math.floor(Number(price) - Number((price * sold) / 100));
        return newPrice.toFixed(3);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <div className={cx('badge')}>-{data.sold}%</div>
                <img src={data.image} alt="" />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.title}</p>
                <div>
                    <span className={cx('old-price')}>{data.price}đ</span>
                    <span className={cx('new-price')}>{handleSale(data.price, data.sold)}đ</span>
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
