import classNames from 'classnames/bind';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { FaGamepad, FaHeadphones, FaKeyboard, FaBook, FaShoppingCart, FaBuilding } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { MdDownload } from 'react-icons/md';
import { GrDownloadOption } from 'react-icons/gr';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

import config from '~/config';
import styles from './Navigation.module.scss';
import Dropdown from '~/components/Popper/Dropdown';
import Modal from '~/components/Modal';
import Portal from '~/components/Portal';
import Separate from '~/components/Separate';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

const MENU_PRODUCTS = [
    {
        icon: <FaKeyboard />,
        title: 'Bàn phím',
    },
    {
        icon: <FaHeadphones />,
        title: 'Tai nghe',
    },
    {
        icon: (
            <img
                style={{ width: 20, height: 20 }}
                src="https://dareu.com.vn/wp-content/uploads/2021/01/dareu-mouse-game-280x280.png"
                alt="mouse"
            />
        ),
        title: 'Chuột',
    },
    {
        icon: <AiTwotoneSetting />,
        title: 'Switch',
    },
    {
        icon: <FaGamepad />,
        title: 'Phụ kiện',
    },
];

const MENU_SUPPORT = [
    {
        icon: <MdDownload />,
        title: 'Driver tải về',
    },
    {
        icon: <FaBook />,
        title: 'Hướng dẫn sử dụng',
    },
    {
        icon: <GrDownloadOption />,
        title: 'Câu hỏi thường gặp',
    },
    {
        icon: <FaShoppingCart />,
        title: 'Mua hàng',
    },
];

const MENU_CONTACT = [
    {
        icon: <ImSearch />,
        title: 'Kiểm tra bảo hành',
    },
    {
        icon: <FaBuilding />,
        title: 'Địa chỉ bảo hành',
    },
];

function Navigation() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={cx('wrapper')}>
            <Menu>
                <Dropdown items={MENU_PRODUCTS}>
                    <div>
                        <MenuItem title="Sản phẩm" to={config.routes.store} dropdown={true} />
                    </div>
                </Dropdown>
                <MenuItem title="Tin tức" to={config.routes.news} />
                <Dropdown items={MENU_SUPPORT}>
                    <div>
                        <MenuItem title="Hỗ trợ" to={config.routes.support} dropdown={true} />
                    </div>
                </Dropdown>
                <Dropdown items={MENU_CONTACT}>
                    <div>
                        <MenuItem title="Liên hệ" to={config.routes.contact} dropdown={true} />
                    </div>
                </Dropdown>

                <div className={cx('separate')}></div>
            </Menu>
            <div className={cx('cart')} onClick={openModal}>
                <span className={cx('badge')}>1</span>
                <RiShoppingBasketFill className={cx('cart-btn')} />
            </div>

            {modalIsOpen && (
                <Portal>
                    <Modal closeModal={closeModal}>
                        <div className={cx('content')}>
                            <div className={cx('cart-inner')}>
                                <h4 className={cx('cart-title')}>Giỏ hàng</h4>
                                <Separate className={cx('divider')} />
                                <div className={cx('cart-content')}>
                                    <p className={cx('cart-message')}>Chưa có sản phẩm trong giỏ hàng.</p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </Portal>
            )}
        </div>
    );
}

export default Navigation;
