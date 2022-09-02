import classNames from 'classnames/bind';
import { RiShoppingBasketFill } from 'react-icons/ri';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Sản phẩm" to={config.routes.products} dropdown={true} />
                <MenuItem title="Tin tức" to={config.routes.news} />
                <MenuItem title="Hỗ trợ" to={config.routes.support} dropdown={true} />
                <MenuItem title="Liên hệ" to={config.routes.contact} dropdown={true} />
                <div className={cx('separate')}></div>
                <MenuItem title="Tài khoản" to={config.routes.products} />
            </Menu>
            <div className={cx('cart')}>
                <span className={cx('badge')}>1</span>
                <RiShoppingBasketFill className={cx('cart-btn')} />
            </div>
        </div>
    );
}

export default Navigation;
