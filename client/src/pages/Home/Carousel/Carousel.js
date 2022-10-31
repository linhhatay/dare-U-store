import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import styles from './Carousel.module.scss';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const cx = classNames.bind(styles);

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className={cx('next-arrow')} onClick={onClick}>
            <GoChevronRight />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={cx('prev-arrow')} onClick={onClick}>
            <GoChevronLeft />
        </div>
    );
}

function Carousel() {
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        dotsClass: cx('dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div>
            <Slider {...settings} className={cx('wrapper')}>
                <img
                    src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-01-1400x649.jpg"
                    alt=""
                />

                <img
                    src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-02-1400x649.jpg"
                    alt=""
                />

                <img
                    src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-03-1400x649.jpg"
                    alt=""
                />

                {/* <div className={cx('carousel-item')}>
                    <img
                        src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-01-1400x649.jpg"
                        alt=""
                    />
                </div>
                <div className={cx('carousel-item')}>
                    <img
                        src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-02-1400x649.jpg"
                        alt=""
                    />
                </div>
                <div className={cx('carousel-item')}>
                    <img
                        src="https://dareu.com.vn/wp-content/uploads/2021/01/37ec4bc1a6dfcd1c9f7ac68589ec1e98-1400x683.jpg"
                        alt=""
                    />
                </div>
                <div className={cx('carousel-item')}>
                    <img src="https://dareu.com.vn/wp-content/uploads/2021/01/dareu-banner-a960-1400x683.jpg" alt="" />
                </div>
                <div className={cx('carousel-item')}>
                    <img
                        src="https://dareu.com.vn/wp-content/uploads/2022/02/dareu-viet-nam-banner-03-1400x649.jpg"
                        alt=""
                    />
                </div> */}
            </Slider>
        </div>
    );
}

export default Carousel;
