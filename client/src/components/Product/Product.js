import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
    const handleSale = (price, discount) => {
        let newPrice = Number(price) - Math.floor(Number((price * discount) / 100));
        return (Math.round(newPrice / 1000) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        <Link className={cx('wrapper')} to={`/${data._id}`}>
            <div className={cx('image')}>
                <div className={cx('badge')}>-{data.discount}%</div>
                <img src={`http://localhost:5000/img/products/${data.imageCover}`} alt="imageProduct" />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{data.name}</p>
                <div>
                    <span className={cx('old-price')}>{data.price}đ</span>
                    <span className={cx('new-price')}>{handleSale(data.price, data.discount)}đ</span>
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
