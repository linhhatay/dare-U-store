import classNames from 'classnames/bind';
import { useState } from 'react';
import { RiEqualizerLine } from 'react-icons/ri';

import styles from './Store.module.scss';
import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Product from '~/components/Product';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);

function Store() {
    const [modalIsOpen, setIsOpen] = useState(false);

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
                <Sidebar />
                <div className={cx('content')}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
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
