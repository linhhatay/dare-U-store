import classNames from 'classnames/bind';
import { HiOutlineChevronDown } from 'react-icons/hi';
import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function DropdownItem({ data = [] }) {
    return (
        <div className={cx('dropdown-item')}>
            <div className={cx('header')}>
                <HiOutlineChevronDown className={cx('icon')} />
                <div className={cx('title')}>{data.title}</div>
            </div>
            <div className={cx('body')}>
                <ol>
                    {data.body.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default DropdownItem;
