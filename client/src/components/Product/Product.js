import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
    const handleSale = (price, sale) => {
        let newPrice = Number(price) - Math.floor(Number((price * sale) / 100));
        return newPrice;
    };

    return (
        <Link className={cx('wrapper')} to={`/${data._id}`}>
            <div className={cx('image')}>
                <div className={cx('badge')}>-{data.sale}%</div>
                <img src={data.image} alt="" />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.title}</p>
                <div>
                    <span className={cx('old-price')}>{data.price}đ</span>
                    <span className={cx('new-price')}>{handleSale(data.price, data.sale)}đ</span>
                </div>
                <div className={cx('status')}>
                    <FaCheck className={cx('icon')} />
                    Còn hàng
                </div>
            </div>
        </Link>
    );
}

export default Product;
