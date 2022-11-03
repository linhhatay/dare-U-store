import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('empty')}>Chưa có sản phẩm nào trong giỏ hàng.</p>
            <Button className={cx('back')}>Quay trở lại cửa hàng</Button>
        </div>
    );
}

export default Cart;
