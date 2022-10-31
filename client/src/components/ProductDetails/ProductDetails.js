import classNames from 'classnames/bind';
import { FaCartPlus } from 'react-icons/fa';
import {
    TiSocialFacebook,
    TiSocialGooglePlus,
    TiSocialLinkedin,
    TiSocialPinterest,
    TiSocialTwitter,
} from 'react-icons/ti';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Sidebar from '~/layouts/components/Sidebar';
import Filter from '~/layouts/components/Sidebar/Filter';
import Button from '../Button';
import Separate from '../Separate';
import styles from './ProductDetails.module.scss';
import Product from '../Product/Product';

const cx = classNames.bind(styles);

const BROWSE_FILTER = [
    { item: 'Bàn phím' },
    { item: 'Chuột' },
    { item: 'Phụ kiện' },
    { item: 'Switch' },
    { item: 'Tai nghe' },
];

function ProductDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Dareu Store</h3>
                <div className={cx('control')}>
                    <FiChevronLeft className={cx('arrow')} />
                    <FiChevronRight className={cx('arrow')} />
                </div>
            </div>
            <div className={cx('container')}>
                <Sidebar>
                    <Filter title="BROWSE" data={BROWSE_FILTER} />
                </Sidebar>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        <div className={cx('image')}>
                            <div className={cx('badge')}>-15%</div>
                            <img src="https://dareu.com.vn/wp-content/uploads/2022/02/ban-phim-khong-day-dareu-ek868-01.jpg" />
                        </div>
                        <div className={cx('info')}>
                            <h1 className={cx('name')}>
                                Bàn phím cơ không dây DAREU EK868 68KEY (SLIM, Brown/ Red D-KAILH switch)
                            </h1>
                            <Separate />
                            <div className={cx('price')}>
                                <span>1.166.000₫</span>
                                <strong>1.099.000₫</strong>
                            </div>
                            <div className={cx('description')}>Bluetooth/ Wired (Type-C)</div>
                            <div className={cx('description')}>D-KAILH switch</div>
                            <div className={cx('description')}>Batterry: 2.000mAh</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Màu sắc</th>
                                        <td>
                                            <select>
                                                <option>Chọn một tùy chọn</option>
                                                <option>Màu đen</option>
                                                <option>Màu trắng</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>SWITCH</th>
                                        <td>
                                            <select>
                                                <option>Chọn một tùy chọn</option>
                                                <option>BLUE</option>
                                                <option>BROWN</option>
                                                <option>RED</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={cx('order')}>
                                <div className={cx('quantity')}>
                                    <input type="button" value="-" />
                                    <span>1</span>
                                    <input type="button" value="+" />
                                </div>
                                <Button className={cx('add')}>Thêm vào giỏ hàng</Button>
                            </div>
                            <div className={cx('link')}>
                                <b>Gian hàng ShopeeMall</b>
                                <br />
                                <b>
                                    Xem ngay tại:
                                    <a href="https://bit.ly/3zFa0XZ" target="_blank" rel="noreferrer">
                                        <FaCartPlus className={cx('icon')} />
                                        <span> Dareu Official Store</span>
                                    </a>
                                </b>
                            </div>
                            <span className={cx('code')}>Mã: N/A</span>
                            <span className={cx('posted')}>Danh mục: Bàn phím</span>
                            <div className={cx('socials')}>
                                <TiSocialFacebook className={cx('icons')} />
                                <TiSocialTwitter className={cx('icons')} />
                                <TiSocialGooglePlus className={cx('icons')} />
                                <TiSocialPinterest className={cx('icons')} />
                                <TiSocialLinkedin className={cx('icons')} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('suggested')}>
                        <h3 className={cx('suggested-title')}>Sản phẩm tương tự</h3>
                        <div className={cx('suggested-list')}>{/* <Product /> */}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
