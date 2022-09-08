import classNames from 'classnames/bind';
import Filter from './Filter';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const COLOR_FILTER = [
    {
        item: 'Màu cam',
        count: 1,
    },
    {
        item: 'Màu đỏ',
        count: 2,
    },
    {
        item: 'Màu xanh',
        count: 4,
    },
    {
        item: 'Màu đen',
        count: 36,
    },
    {
        item: 'Màu trắng',
        count: 14,
    },
    {
        item: 'Màu vàng',
        count: 2,
    },
    {
        item: 'Màu cam',
        count: 1,
    },
];

const FILTER_PRICE = [
    {
        item: 'Trên 2 triệu',
        count: 1,
    },
    {
        item: 'Dưới 500 ngàn',
        count: 34,
    },
    {
        item: 'Từ 500 - 1 triệu',
        count: 31,
    },
    {
        item: '1 triệu - 2 triệu',
        count: 9,
    },
];

const PRODUCTS = [{ item: 'Bàn phím' }, { item: 'Chuột' }, { item: 'Phụ kiện' }];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Filter title="Màu sắc" data={COLOR_FILTER} />
            <Filter title="Khoảng giá" data={FILTER_PRICE} />
            <Filter title="Sản phẩm" data={PRODUCTS} />
        </div>
    );
}

export default Sidebar;
