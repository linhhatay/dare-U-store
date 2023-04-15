import classNames from 'classnames/bind';
import { FaGamepad, FaHeadphones, FaKeyboard, FaBook, FaShoppingCart, FaBuilding } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai';
import { MdDownload } from 'react-icons/md';
import { GrDownloadOption } from 'react-icons/gr';
import { ImSearch } from 'react-icons/im';

import config from '~/config';
import styles from './Navigation.module.scss';
import Dropdown from '~/components/Popper/Dropdown';
import Menu, { MenuItem } from './Menu';
import { useSelector } from 'react-redux';

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
        to: config.routes.support,
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
        to: config.routes.contact,
    },
    {
        icon: <FaBuilding />,
        title: 'Địa chỉ bảo hành',
        to: config.routes.insurance,
    },
];

const MENU_AUTH = [
    {
        title: 'Trang tài khoản',
        to: config.routes.auth,
    },
    {
        title: 'Đăng xuất',
        action: true,
    },
];

function Navigation() {
    const { auth } = useSelector((state) => state);

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
                        <MenuItem title="Hỗ trợ" dropdown={true} />
                    </div>
                </Dropdown>
                <Dropdown items={MENU_CONTACT}>
                    <div>
                        <MenuItem title="Liên hệ" dropdown={true} />
                    </div>
                </Dropdown>

                <div className={cx('separate')}></div>

                <div>
                    {auth.isAuthenticated ? (
                        <Dropdown items={MENU_AUTH}>
                            <div>
                                <MenuItem title="Tài khoản" dropdown={true} />
                            </div>
                        </Dropdown>
                    ) : (
                        <MenuItem title="Đăng Nhập" to={config.routes.auth} />
                    )}
                </div>
            </Menu>
        </div>
    );
}

export default Navigation;
