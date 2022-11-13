import classNames from 'classnames/bind';
import { useState } from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Separate from '~/components/Separate';
import styles from './Cart.module.scss';
import * as cartSlice from '~/redux/cartSlice';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function Cart() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDeleteProduct = (product) => {
        dispatch(cartSlice.remove(product));
    };

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
                                    {cart.quantity > 0 ? (
                                        <>
                                            {cart.products.map((product, index) => (
                                                <div className={cx('item')} key={index}>
                                                    <div
                                                        className={cx('delete')}
                                                        onClick={() => handleDeleteProduct(product)}
                                                    >
                                                        x
                                                    </div>
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
                                            ))}
                                            <p className={cx('total')}>
                                                <strong>Tổng số phụ:</strong>
                                                <span>550.000đ</span>
                                            </p>
                                            <div className={cx('buttons')}>
                                                <Button to={config.routes.cart}>XEM GIỎ HÀNG</Button>
                                                <Button>THANH TOÁN</Button>
                                            </div>
                                        </>
                                    ) : (
                                        <p className={cx('message')}>Chưa có sản phẩm trong giỏ hàng.</p>
                                    )}
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
