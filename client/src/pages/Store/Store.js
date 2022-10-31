import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { RiEqualizerLine } from 'react-icons/ri';

import styles from './Store.module.scss';
import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Product from '~/components/Product';
import Sidebar from '~/layouts/components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '~/layouts/components/Sidebar/Filter';

const cx = classNames.bind(styles);

const COLOR_FILTER = [
    {
        item: 'Màu cam',
        count: 1,
    },
    {
        item: 'Màu đỏ',
        count: 2,
    },
    {
        item: 'Màu xanh',
        count: 4,
    },
    {
        item: 'Màu đen',
        count: 36,
    },
    {
        item: 'Màu trắng',
        count: 14,
    },
    {
        item: 'Màu vàng',
        count: 2,
    },
    {
        item: 'Màu cam',
        count: 1,
    },
];

const FILTER_PRICE = [
    {
        item: 'Trên 2 triệu',
        count: 1,
    },
    {
        item: 'Dưới 500 ngàn',
        count: 34,
    },
    {
        item: 'Từ 500 - 1 triệu',
        count: 31,
    },
    {
        item: '1 triệu - 2 triệu',
        count: 9,
    },
];

const PRODUCTS = [{ item: 'Bàn phím' }, { item: 'Chuột' }, { item: 'Phụ kiện' }];

function Store() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { product } = useSelector((state) => state);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Dareu Store</h3>
                <div className={cx('filter-btn')} onClick={openModal}>
                    <span>
                        <RiEqualizerLine />
                    </span>
                    <strong>Lọc</strong>
                </div>
                <div className={cx('filter-options')}>
                    <p className={cx('result-count')}>Hiển thị 1–12 của 84 kết quả</p>
                    <form className={cx('form')}>
                        <select>
                            <option>Mới nhất</option>
                            <option>Thứ tự theo giá: thấp đến cao</option>
                            <option>Thứ tự theo giá: cao xuống thấp</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className={cx('container')}>
                <Sidebar>
                    <Filter title="Màu sắc" data={COLOR_FILTER} />
                    <Filter title="Khoảng giá" data={FILTER_PRICE} />
                    <Filter title="Sản phẩm" data={PRODUCTS} />
                </Sidebar>
                <div className={cx('content')}>
                    {product.data.map((item, index) => (
                        <Product data={item} key={index} />
                    ))}
                </div>
            </div>
            {modalIsOpen && (
                <Portal>
                    <Modal closeModal={closeModal}>
                        <Sidebar />
                    </Modal>
                </Portal>
            )}
        </div>
    );
}

export default Store;
