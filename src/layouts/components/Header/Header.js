import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';

import styles from './Header.module.scss';
import Search from '../Search';
import Navigation from '../Navigation';
import config from '~/config';
import Portal from '~/components/Portal';
import Modal from '~/components/Modal';

const cx = classNames.bind(styles);

function Header() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner-content')}>
                    <div className={cx('banner-left')}>
                        <strong>With DAREU store Viet NAM Keep Fighting...</strong>
                    </div>
                    <ul className={cx('banner-right')}>
                        <li className={cx('icon')}>
                            <FaFacebookF />
                        </li>
                        <li className={cx('icon')}>
                            <AiOutlineInstagram />
                        </li>
                        <li className={cx('icon')}>
                            <AiOutlineTwitter />
                        </li>
                        <li className={cx('icon')}>
                            <TiMail />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('main')}>
                <div className={cx('mobile-nav')} onClick={openModal}>
                    <HiOutlineMenu className={cx('mobile-nav-btn')} />
                    MENU
                </div>
                <Link to={config.routes.home} className={cx('back')}>
                    <img
                        className={cx('logo')}
                        src="https://dareu.com.vn/wp-content/uploads/2021/01/dareulogo.png"
                        alt="logo"
                    />
                </Link>
                <Search />
                <Navigation />
            </div>

            {modalIsOpen && (
                <Portal>
                    <Modal closeModal={closeModal}>
                        <div className={cx('mobile-nav-content')}>
                            <div className={cx('mobile-nav-inner')}></div>
                        </div>
                    </Modal>
                </Portal>
            )}
        </header>
    );
}

export default Header;
