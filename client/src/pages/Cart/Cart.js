import classNames from 'classnames/bind';
import { AiFillTag } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import config from '~/config';
import * as cartSlice from '~/redux/cartSlice';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDeleteProduct = (product) => {
        dispatch(cartSlice.remove(product));
    };

    return (
        <div className={cx('wrapper')}>
            {cart.products.length > 0 ? (
                <div className={cx('container')}>
                    <div className={cx('list-products')}>
                        <div className={cx('edit')}>
                            <div>
                                <table className={cx('table')}>
                                    <thead>
                                        <tr>
                                            <th className={cx('product-name')} colSpan="3">
                                                Sản phẩm
                                            </th>
                                            <th className={cx('product-price')}>Giá</th>
                                            <th className={cx('product-quantity')}>Số lượng</th>
                                            <th className={cx('product-subtotal')}>Tạm tính</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.products.map((product, index) => (
                                            <tr className={cx('product-item')} key={index}>
                                                <td className={cx('product-remove')}>
                                                    <a href="#" onClick={handleDeleteProduct}>
                                                        ×
                                                    </a>
                                                </td>
                                                <td className={cx('product-thumbnail')}>
                                                    <a href="https://dareu.com.vn/tai-nghe-gaming-dareu-eh416-rgb/">
                                                        <img src={product.image} alt="" />
                                                    </a>
                                                </td>
                                                <td className={cx('product-name')} data-title="Sản phẩm">
                                                    <a href="https://dareu.com.vn/tai-nghe-gaming-dareu-eh416-rgb/">
                                                        {product.title}
                                                    </a>
                                                    {/* <div className="show-for-small mobile-product-price">
                                                    <span className="mobile-product-price__qty">1 x </span>
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            359.000
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </bdi>
                                                    </span>
                                                </div> */}
                                                </td>
                                                <td className={cx('product-price')} data-title="Giá">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            {product.price}
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </bdi>
                                                    </span>
                                                </td>
                                                <td className={cx('product-quantity')} data-title="Số lượng">
                                                    <div className="quantity buttons_added">
                                                        <input
                                                            type="button"
                                                            value="-"
                                                            className="minus button is-form"
                                                        />
                                                        {/* <label className="screen-reader-text" for="quantity_6370b36d2530b">
                                                        Tai nghe gaming DAREU EH416 RGB số lượng
                                                    </label> */}
                                                        {/* <input
                                                            value={product.quantity}
                                                            type="number"
                                                            step="1"
                                                            min="0"
                                                            max=""
                                                            title="SL"
                                                            size="4"
                                                            placeholder=""
                                                            inputMode="numeric"
                                                        /> */}
                                                        <span>{product.quantity}</span>
                                                        <input
                                                            type="button"
                                                            value="+"
                                                            className="plus button is-form"
                                                        />
                                                    </div>
                                                </td>
                                                <td className={cx('product-subtotal')} data-title="Tạm tính">
                                                    <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                            {product.price}
                                                            <span className="woocommerce-Price-currencySymbol">₫</span>
                                                        </bdi>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bill')}>
                        <div className={cx('bill-inner')}>
                            <h3 className={cx('bill-title')}>CỘNG GIỎ HÀNG</h3>
                            <div className={cx('bill-review')}>
                                <div className={cx('bill-group')}>
                                    <label>Tạm tính</label>
                                    <span>{cart.total}</span>
                                </div>
                                <div className={cx('bill-group')}>
                                    <label className={cx('ship')}>Giao hàng</label>
                                    <span className={cx('ship-price')}>
                                        <strong>Đồng giá: </strong> 30.000đ
                                    </span>
                                </div>
                                <div className={cx('bill-group')}>
                                    <label>Tổng</label>
                                    <span>{cart.total + 30000}</span>
                                </div>
                            </div>
                            <Button to={config.routes.order} className={cx('pay-btn')}>
                                TIẾN HÀNH THANH TOÁN
                            </Button>
                            <div className={cx('coupons')}>
                                <h3 className={cx('coupons-title')}>
                                    <AiFillTag className={cx('coupons-icon')} />
                                    Phiếu ưu đãi
                                </h3>
                                <input type="text" placeholder="Mã ưu đãi" />
                                <Button className={cx('coupons-btn')}>Áp dụng</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <p className={cx('empty')}>Chưa có sản phẩm nào trong giỏ hàng.</p>
                    <Button to={config.routes.store} className={cx('back')}>
                        Quay trở lại cửa hàng
                    </Button>
                </>
            )}
        </div>
    );
}

export default Cart;
