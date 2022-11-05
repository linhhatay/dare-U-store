import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

import Separate from '~/components/Separate';

const cx = classNames.bind(styles);

function Filter({ title, data, handleFilter, isFilter }) {
    return (
        <aside className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <Separate className={cx('divider')} />
            <ul className={cx('list')}>
                {data.map((filter, index) => (
                    <li className={cx('item')} key={index} onClick={() => handleFilter(filter.item)}>
                        {isFilter === filter.item && <span className={cx('close')}>x</span>}
                        <a href="#">{filter.item}</a>
                        {filter.count && <span className={cx('count')}>({filter.count})</span>}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Filter;
