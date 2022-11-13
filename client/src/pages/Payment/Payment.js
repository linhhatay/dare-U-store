import classNames from 'classnames/bind';
import styles from './Payment.module.scss';

const cx = classNames.bind(styles);

function Payment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('order')}>
                <p>Hình thức nhận hàng thanh toán, khách hàng được quyền kiểm tra hàng</p>
                <section className={cx('order-details')}>
                    <h2>Chi tiết đơn hàng</h2>

                    <table className={cx('order-table')}>
                        <thead>
                            <tr>
                                <th className={cx('product-name')}>Sản phẩm</th>
                                <th className={cx('product-total')}>Tổng</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className={cx('order-item')}>
                                <td className={cx('product-name')}>
                                    <a href="https://dareu.com.vn/ban-di-chuot-dareu-esp101-mau-hong-boc-vien/">
                                        Bàn di chuột Dareu ESP101 - Màu hồng - Bọc viền
                                    </a>
                                    <strong className={cx('product-quantity')}>×&nbsp;1</strong>
                                </td>

                                <td className={cx('product-total')}>
                                    <span className={cx('amount')}>
                                        <bdi>
                                            65.000<span>₫</span>
                                        </bdi>
                                    </span>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <th scope="row">Tổng số phụ:</th>
                                <td>
                                    <span className={cx('amount')}>
                                        65.000<span>₫</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Giao nhận hàng:</th>
                                <td>
                                    <span className={cx('amount')}>
                                        30.000<span>₫</span>
                                    </span>
                                    &nbsp;<small className="shipped_via">qua Đồng giá</small>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Phương thức thanh toán:</th>
                                <td className={cx('order-method')}>Thanh toán khi nhận hàng</td>
                            </tr>
                            <tr>
                                <th scope="row">Tổng cộng:</th>
                                <td>
                                    <span className={cx('amount')}>
                                        95.000<span>₫</span>
                                    </span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            </div>
            <div className={cx('overview')}>
                <div className={cx('entry-content')}>
                    <p className={cx('notice')}>
                        <strong>Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</strong>
                    </p>

                    <ul className={cx('overview-details')}>
                        <li>
                            Mã đơn hàng: <strong>2517</strong>
                        </li>

                        <li>
                            Ngày: <strong>13 Tháng Mười Một, 2022</strong>
                        </li>

                        <li>
                            Tổng cộng:
                            <strong>
                                <span className={cx('amount')}>
                                    <bdi>
                                        95.000<span>₫</span>
                                    </bdi>
                                </span>
                            </strong>
                        </li>

                        <li className="method">
                            Phương thức thanh toán: <strong>Thanh toán khi nhận hàng</strong>
                        </li>
                    </ul>

                    <div className="clear"></div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
