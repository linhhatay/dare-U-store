import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { BiSearch } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input type="text" placeholder="Tìm kiếm..." />
                <div className={cx('search-btn')}>
                    <BiSearch />
                </div>
            </div>
        </div>
    );
}

export default Search;
