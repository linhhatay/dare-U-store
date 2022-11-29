import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import styles from './Order.module.scss';

const cx = classNames.bind(styles);

function Order() {
    const { cart } = useSelector((state) => state);
    const { products, total } = cart;

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
                            {/* <div className={cx('form-group')}>
                                <label>Tỉnh/ Thành phố *</label>
                                <select>
                                    <option>Chọn Tỉnh/ Thành phố</option>
                                </select>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Quận/ Huyện *</label>
                                <select>
                                    <option>Chọn Quận/ Huyện</option>
                                </select>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Phường/ Xã *</label>
                                <select>
                                    <option>Chọn Phường/ Xã</option>
                                </select>
                            </div> */}
                            <div className={cx('note')}>
                                <label>Ghi chú về đơn hàng (tùy chọn)</label>
                                <textarea placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('bill')}>
                    <div className={cx('bill-inner')}>
                        <h3 className={cx('bill-title')}>Đơn hàng của bạn</h3>
                        <div className={cx('bill-review')}>
                            <div className={cx('bill-group')}>
                                <label>Sản phẩm</label>
                                <span>Tạm tính</span>
                            </div>
                            {products.map((product, index) => (
                                <div className={cx('bill-group')} key={index}>
                                    <label className={cx('product-name')}>
                                        {product.title} <span>x {product.quantity}</span>
                                    </label>
                                    <span>{product.price}đ</span>
                                </div>
                            ))}
                            <div className={cx('bill-group')}>
                                <label>Tạm tính</label>
                                <span>{total}đ</span>
                            </div>
                            <div className={cx('bill-group')}>
                                <label className={cx('ship')}>Giao hàng</label>
                                <span className={cx('ship-price')}>
                                    <strong>Đồng giá: </strong> 30.000đ
                                </span>
                            </div>
                            <div className={cx('bill-group')}>
                                <label>Tổng</label>
                                <span>{total + 30000}đ</span>
                            </div>
                        </div>
                        <ul className={cx('payment-method')}>
                            <li className={cx('cod')}>
                                <div>
                                    <input type="radio" />
                                    <label>Thanh toán khi nhận hàng</label>
                                </div>
                                <p>Hình thức nhận hàng thanh toán, khách hàng được quyền kiểm tra hàng</p>
                            </li>
                            <li className={cx('qr')}>
                                <div>
                                    <input type="radio" />
                                    <label>Quét mã MoMo</label>
                                </div>
                                <p>Hãy mở App Momo lên và nhấn Đặt Hàng để quét mã thanh toán</p>
                            </li>
                        </ul>
                        <Button className={cx('order')}>ĐẶT HÀNG</Button>
                        <p className={cx('privacy')}>
                            Tất cả thông tin của bạn chỉ được sử dụng cho việc đặt hàng và cải thiện trải nghiệm sản
                            phẩm. Ngoài ra được Dareu đảm bảo về quyền riêng tư cá nhân theo quy định luật pháp.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
