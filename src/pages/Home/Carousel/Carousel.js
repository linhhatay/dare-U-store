import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from '../Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Carousel() {
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <Slider {...settings}>
            <img
                className={cx('carousel-item')}
                src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-01-1400x649.jpg"
                alt=""
            />
            <img
                className={cx('carousel-item')}
                src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-02-1400x649.jpg"
                alt=""
            />
            <img
                className={cx('carousel-item')}
                src="https://dareu.com.vn/wp-content/uploads/2021/01/37ec4bc1a6dfcd1c9f7ac68589ec1e98-1400x683.jpg"
                alt=""
            />
            <img
                className={cx('carousel-item')}
                src="https://dareu.com.vn/wp-content/uploads/2021/01/dareu-banner-a960-1400x683.jpg"
                alt=""
            />
            <img
                className={cx('carousel-item')}
                src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-03-1400x649.jpg"
                alt=""
            />
        </Slider>
    );
}

export default Carousel;
