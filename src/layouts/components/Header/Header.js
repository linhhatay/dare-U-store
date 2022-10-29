import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { FaFacebookF, FaLeaf } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import Search from '../Search';
import Navigation from '../Navigation';
import config from '~/config';
import Portal from '~/components/Portal';
import Modal from '~/components/Modal';
import Cart from './Cart';

const cx = classNames.bind(styles);

function Header() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sticky]);

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

            <div className={cx([sticky && 'sticky'])}>
                <div className={cx(['main', sticky && 'sticky'])}>
                    <div className={cx('mobile-nav')} onClick={openModal}>
                        <HiOutlineMenu className={cx('mobile-nav-btn')} />
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
                    <Cart />
                </div>
            </div>

            {modalIsOpen && (
                <Portal>
                    <Modal closeModal={closeModal}>
                        {/* <Navigation /> */}
                        {/* <div className={cx('mobile-nav-content')}>
                            <div className={cx('mobile-nav-inner')}>
                            </div>
                        </div> */}
                    </Modal>
                </Portal>
            )}
        </header>
    );
}

export default Header;
