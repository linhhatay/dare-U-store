import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, dropdown = false }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('title')}>{title}</span>
            {dropdown && (
                <div className={cx('dropdown')}>
                    <BsChevronDown />
                </div>
            )}
        </NavLink>
    );
}

export default MenuItem;
