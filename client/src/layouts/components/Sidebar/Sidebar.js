import classNames from 'classnames/bind';
import Filter from './Filter';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Sidebar;
