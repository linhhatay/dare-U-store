import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function Dropdown({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Dropdown;
