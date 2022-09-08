import classNames from 'classnames/bind';

import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function CarouselItem(prop) {
    return <img className={cx('carousel-item')} src={prop.data} alt="" />;
}

export default CarouselItem;
