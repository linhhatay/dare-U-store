import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const { cart } = useSelector((state) => state);

    return (
        <div className={cx('wrapper')}>
            {cart.products.length > 0 ? (
                <div className={cx('container')}>
                    <div className={cx('list-products')}>
                        <div className={cx('edit')}>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="product-name" colSpan="3">
                                                Sản phẩm
                                            </th>
                                            <th className="product-price">Giá</th>
                                            <th className="product-quantity">Số lượng</th>
                                            <th className="product-subtotal">Tạm tính</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={cx('product-item')}>
                                            <td className={cx('product-remove')}>
                                                <a
                                                    href="https://dareu.com.vn/gio-hang/?remove_item=3d2d8ccb37df977cb6d9da15b76c3f3a&amp;_wpnonce=4ca269d427"
                                                    className="remove"
                                                    aria-label="Xóa sản phẩm này"
                                                    data-product_id="655"
                                                    data-product_sku=""
                                                >
                                                    ×
                                                </a>
                                            </td>
                                            <td className={cx('product-thumbnail')}>
                                                <a href="https://dareu.com.vn/tai-nghe-gaming-dareu-eh416-rgb/">
                                                    <img
                                                        src="https://dareu.com.vn/wp-content/uploads/2021/04/tai-nghe-gaming-dareu-eh416-rgb-01-300x300.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td className={cx('product-name')} data-title="Sản phẩm">
                                                <a href="https://dareu.com.vn/tai-nghe-gaming-dareu-eh416-rgb/">
                                                    Tai nghe gaming DAREU EH416 RGB
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
                                                        359.000
                                                        <span className="woocommerce-Price-currencySymbol">₫</span>
                                                    </bdi>
                                                </span>
                                            </td>
                                            <td className={cx('product-quantity')} data-title="Số lượng">
                                                <div className="quantity buttons_added">
                                                    <input type="button" value="-" className="minus button is-form" />
                                                    {/* <label className="screen-reader-text" for="quantity_6370b36d2530b">
                                                        Tai nghe gaming DAREU EH416 RGB số lượng
                                                    </label> */}
                                                    <input
                                                        type="number"
                                                        step="1"
                                                        min="0"
                                                        max=""
                                                        value="1"
                                                        title="SL"
                                                        size="4"
                                                        placeholder=""
                                                        inputMode="numeric"
                                                    />
                                                    <input type="button" value="+" className="plus button is-form" />
                                                </div>
                                            </td>
                                            <td className={cx('product-subtotal')} data-title="Tạm tính">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        359.000
                                                        <span className="woocommerce-Price-currencySymbol">₫</span>
                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div classNames={cx('bill')}>
                        <h3 className={cx('bill-title')}>CỘNG GIỎ HÀNG</h3>
                        <div className={cx('bill-review')}>
                            <div className={cx('bill-group')}>
                                <label>Tạm tính</label>
                                <span>289.000đ</span>
                            </div>
                            <div className={cx('bill-group')}>
                                <label className={cx('ship')}>Giao hàng</label>
                                <span className={cx('ship-price')}>
                                    <strong>Đồng giá: </strong> 30.000đ
                                </span>
                            </div>
                            <div className={cx('bill-group')}>
                                <label>Tổng</label>
                                <span>319.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <p className={cx('empty')}>Chưa có sản phẩm nào trong giỏ hàng.</p>
                    <Button className={cx('back')}>Quay trở lại cửa hàng</Button>
                </>
            )}
        </div>
    );
}

export default Cart;
