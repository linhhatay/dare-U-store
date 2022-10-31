import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

import Separate from '~/components/Separate';

const cx = classNames.bind(styles);

function Filter({ title, data }) {
    return (
        <aside className={cx('wrapper')}>
            <span className={cx('title')}>{title}</span>
            <Separate className={cx('divider')} />
            <ul className={cx('list')}>
                {data.map((filter, index) => (
                    <li className={cx('item')} key={index}>
                        <a>{filter.item}</a>
                        {filter.count && <span className={cx('count')}>({filter.count})</span>}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Filter;
