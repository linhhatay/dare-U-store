import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa';

import styles from './Header.module.scss';
import Search from '../Search';
import Navigation from '../Navigation';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <div className={cx('banner__left')}>
                        <strong>With DAREU store Viet NAM Keep Fighting...</strong>
                    </div>
                    <ul className={cx('banner__right')}>
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
                <div className={cx('main')}>
                    <Link to={config.routes.home}>
                        <img
                            className={cx('logo')}
                            src="https://dareu.com.vn/wp-content/uploads/2021/01/dareulogo.png"
                            alt="logo"
                        />
                    </Link>
                    <Search />
                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default Header;
