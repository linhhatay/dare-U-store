import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { RiEqualizerLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import styles from './Store.module.scss';
import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Product from '~/components/Product';
import Sidebar from '~/layouts/components/Sidebar';
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

const PRODUCTS = [
    { item: 'Bàn phím' },
    { item: 'Chuột' },
    { item: 'Phụ kiện' },
    { item: 'Switch' },
    { item: 'Tai nghe' },
];

function Store() {
    const { product } = useSelector((state) => state);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [filtered, setFiltered] = useState(product);
    const [isFilter, setIsFilter] = useState(null);

    const handleFilterProduct = (value) => {
        let result = [];
        let products;
        let output;

        if (!(isFilter === value)) {
            product.forEach((item) => {
                if (item.color.includes(value) || item.category === value) {
                    result.push(item);
                    output = result;
                } else {
                    if (value === 'Trên 2 triệu') {
                        products = product.filter((item) => item.price > 2000000);
                        output = result.concat(products);
                    } else if (value === 'Dưới 500 ngàn') {
                        products = product.filter((item) => item.price < 500000);
                        output = result.concat(products);
                    } else if (value === 'Từ 500 - 1 triệu') {
                        products = product.filter((item) => item.price >= 500000 && item.price <= 1000000);
                        output = result.concat(products);
                    } else if (value === '1 triệu - 2 triệu') {
                        products = product.filter((item) => item.price >= 1000000 && item.price <= 2000000);
                        output = result.concat(products);
                    }
                }
            });

            setIsFilter(value);
            setFiltered(output);
        } else {
            setFiltered(product);
            setIsFilter(null);
        }
    };

    const handleOptions = (e) => {
        const value = e.target.value;
        if (value === 'Thứ tự theo giá: thấp đến cao') {
            filtered.sort((a, b) => a.price.localeCompare(b.price, undefined, { numeric: true }));
        } else if (value === 'Thứ tự theo giá: cao xuống thấp') {
            filtered.sort((a, b) => b.price.localeCompare(a.price, undefined, { numeric: true }));
        } else {
        }
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(product));
        let products = JSON.parse(localStorage.getItem('products'));
        setFiltered(products);
    }, [product]);

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
                    <p className={cx('result-count')}>
                        Hiển thị 1–12 của {filtered?.length > 0 ? filtered.length : 0} kết quả
                    </p>
                    <form className={cx('form')}>
                        <select onChange={handleOptions}>
                            <option>Mới nhất</option>
                            <option>Thứ tự theo giá: thấp đến cao</option>
                            <option>Thứ tự theo giá: cao xuống thấp</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className={cx('container')}>
                <Sidebar>
                    <Filter
                        title="Màu sắc"
                        data={COLOR_FILTER}
                        handleFilterProduct={handleFilterProduct}
                        isFilter={isFilter}
                    />
                    <Filter
                        title="Khoảng giá"
                        data={FILTER_PRICE}
                        handleFilterProduct={handleFilterProduct}
                        isFilter={isFilter}
                    />
                    <Filter
                        title="Sản phẩm"
                        data={PRODUCTS}
                        handleFilterProduct={handleFilterProduct}
                        isFilter={isFilter}
                    />
                </Sidebar>
                <div className={cx('content')}>
                    {filtered?.length > 0 && filtered.map((item, index) => <Product data={item} key={index} />)}
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
