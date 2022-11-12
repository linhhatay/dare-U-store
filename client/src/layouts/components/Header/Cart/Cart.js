import classNames from 'classnames/bind';
import { useState } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Separate from '~/components/Separate';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const { cart } = useSelector((state) => state);

    const cartFilter = cart.products.reduce((acc, cur) => {
        const check = acc.some(
            (item) =>
                item.title === cur.title &&
                item.options.color === cur.options.color &&
                item.options.switch === cur.options.switch,
        );
        if (check) {
            console.log(1);
        } else {
            acc.push(cur);
        }

        return acc;
    }, []);

    // console.log(cartFilter);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className={cx('wrapper')} onClick={openModal}>
                <span className={cx('badge')}>{cart.quantity}</span>
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
                                    {/* {cart.quantity > 0 ? (
                                        cartFilter.map((product, index) => (
                                            <div className={cx('item')} key={index}>
                                                <div className={cx('delete')}>x</div>
                                                <a>
                                                    <img src={product.image} alt="" />
                                                    {product.title}
                                                </a>
                                                <dl className="variation">
                                                    {product.options.color ? (
                                                        <>
                                                            <dt className="variation-color">Màu sắc:</dt>
                                                            <dd className="variation-color">
                                                                <p>{product.options?.color}</p>
                                                            </dd>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {product.options.switch ? (
                                                        <>
                                                            <dt className="variation-SWITCH">SWITCH:</dt>
                                                            <dd className="variation-SWITCH">
                                                                <p>{product.options?.switch}</p>
                                                            </dd>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </dl>
                                                <span className={cx('quantity')}>
                                                    {product.quantity} x{' '}
                                                    <span className={cx('price')}>{product.price}đ</span>
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className={cx('message')}>Chưa có sản phẩm trong giỏ hàng.</p>
                                    )} */}
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
