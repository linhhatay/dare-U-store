import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
    TiSocialFacebook,
    TiSocialGooglePlus,
    TiSocialLinkedin,
    TiSocialPinterest,
    TiSocialTwitter,
} from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Sidebar from '~/layouts/components/Sidebar';
import Filter from '~/layouts/components/Sidebar/Filter';
import Button from '../Button';
import Separate from '../Separate';
import styles from './ProductDetails.module.scss';

const cx = classNames.bind(styles);

const BROWSE_FILTER = [
    { item: 'Bàn phím' },
    { item: 'Chuột' },
    { item: 'Phụ kiện' },
    { item: 'Switch' },
    { item: 'Tai nghe' },
];

function ProductDetails() {
    const { id } = useParams();
    const { product } = useSelector((state) => state);
    const [details, setDetails] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const handleSale = (price, sold) => {
        let newPrice = Number(price) - Math.floor(Number((price * sold) / 100));
        return newPrice;
    };

    useEffect(() => {
        if (id) {
            product.data.forEach((item) => {
                if (item._id === id) {
                    setDetails(item);
                }
            });
        }
    }, [id, product]);

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
                            <div className={cx('badge')}>-{details.sale}%</div>
                            <img src={details.image} alt="" />
                        </div>
                        <div className={cx('info')}>
                            <h1 className={cx('name')}>{details.title}</h1>
                            <Separate />
                            <div className={cx('price')}>
                                <span>{details.price}đ</span>
                                <strong>{handleSale(details.price, details.sale)}đ</strong>
                            </div>
                            {details.description?.map((item, index) => (
                                <li className={cx('description')} key={index}>
                                    {item}
                                </li>
                            ))}
                            <table>
                                <tbody>
                                    {details.color?.length > 0 && (
                                        <tr>
                                            <th>Màu sắc</th>
                                            <td>
                                                <select>
                                                    <option>Chọn một tùy chọn</option>
                                                    {details.color.map((item, index) => (
                                                        <option key={index}>{item}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    )}
                                    {details.sw?.length > 0 && (
                                        <tr>
                                            <th>SWITCH</th>
                                            <td>
                                                <select>
                                                    <option>Chọn một tùy chọn</option>
                                                    {details.sw.map((item, index) => (
                                                        <option key={index}>{item}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className={cx('order')}>
                                <div className={cx('quantity')}>
                                    <input
                                        type="button"
                                        value="-"
                                        onClick={() => setQuantity((prev) => prev - 1)}
                                        disabled={quantity <= 1 ? true : false}
                                    />
                                    <span>{quantity}</span>
                                    <input type="button" value="+" onClick={() => setQuantity((prev) => prev + 1)} />
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
                            <span className={cx('posted')}>Danh mục: {details.category}</span>
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
