import classNames from 'classnames/bind';
import { useState } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';

import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Separate from '~/components/Separate';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className={cx('wrapper')} onClick={openModal}>
                <span className={cx('badge')}>1</span>
                <RiShoppingBasketFill className={cx('btn')} />
            </div>

            {modalIsOpen && (
                <Portal>
                    <Modal closeModal={closeModal}>
                        <div className={cx('content')}>
                            <div className={cx('inner')}>
                                <h4 className={cx('title')}>Giỏ hàng</h4>
                                <Separate className={cx('divider')} />
                                <div className={cx('orders')}>
                                    <p className={cx('message')}>Chưa có sản phẩm trong giỏ hàng.</p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </Portal>
            )}
        </>
    );
}

export default Cart;
