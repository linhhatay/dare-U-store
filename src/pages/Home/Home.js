import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { GoChevronRight } from 'react-icons/go';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from './Carousel';
import styles from './Home.module.scss';
import Product from '~/components/Product';
import Button from '~/components/Button';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'white',
                width: '34px',
                height: '100%',
                WebkitBoxShadow: '0 -150px 15px 0 rgb(0 0 0 / 30%)',
                boxShadow: '0 -150px 15px 0 rgb(0 0 0 / 30%)',
            }}
            onClick={onClick}
        >
            <GoChevronRight style={{ fontSize: '20px' }} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'white',
                width: '34px',
                height: '100%',
                WebkitBoxShadow: '0 -150px 15px 0 rgb(0 0 0 / 30%)',
                boxShadow: '0 -150px 15px 0 rgb(0 0 0 / 30%)',
            }}
            onClick={onClick}
        />
    );
}

function Home() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 849,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <Carousel />
            <div className={cx('banner')}>
                <div className={cx('banner-content')}>
                    <h3 className={cx('title')}>Đón chờ sản phẩm mới ra mắt</h3>
                    <p className={cx('label')}>Dareu sẽ mang đến những sản phẩm mới sắp ra mắt trong năm 2022.</p>
                    <div className={cx('timer')}>
                        <span>
                            0 <strong>HOURS</strong>
                        </span>
                        <span>
                            0 <strong>MIN</strong>
                        </span>
                        <span>
                            0 <strong>SEC</strong>
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('suggestion')}>
                <Slider {...settings}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Slider>
            </div>
            <div className={cx('banner-layers')}>
                <div>
                    <img src="https://dareu.com.vn/wp-content/uploads/2021/01/1-201021105I03L.jpg" alt="" />
                </div>
                <div>
                    <img
                        src="https://dareu.com.vn/wp-content/uploads/2021/01/ban-phim-co-dareu-ligh-year-full-size.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className={cx('nav')}>
                <div className={cx('nav-item')}>
                    <div>
                        <img
                            src="https://dareu.com.vn/wp-content/uploads/2021/01/0100ef677327e76f3dcce153df53ca18.png"
                            alt=""
                        />
                        <h2>KEYBOARD</h2>
                    </div>
                </div>
                <div className={cx('nav-item')}>
                    <div>
                        <img
                            src="https://dareu.com.vn/wp-content/uploads/2021/01/2db856cd6ddbce0e26843e94b096b6b7.png"
                            alt=""
                        />
                        <h2>MOUSE</h2>
                    </div>
                </div>
                <div className={cx('nav-item')}>
                    <div>
                        <img
                            src="https://dareu.com.vn/wp-content/uploads/2021/01/cb535f558e8112719e8f6c48234bc304.png"
                            alt=""
                        />
                        <h2>HEADSET</h2>
                    </div>
                </div>
            </div>
            <div className={cx('contact')}>
                <div className={cx('contact-inner')}>
                    <div className={cx('contact-item')}>
                        <div className={cx('contact-icon')}>
                            <img src="https://dareu.com.vn/wp-content/uploads/2021/01/cup-line.png" alt=" " />
                        </div>
                        <div className={cx('contact-desc')}>
                            <h3>Tìm kiếm cơ hội hợp tác</h3>
                            <p>Bạn có ý tưởng, chúng tôi trao cơ hội.</p>
                            <Button className={cx('send-email')} rounded>
                                SEND E-MAIL
                            </Button>
                        </div>
                    </div>
                    <div className={cx('contact-item')}>
                        <div className={cx('contact-icon')}>
                            <img src="https://dareu.com.vn/wp-content/uploads/2021/01/whatsapp-line.png" alt=" " />
                        </div>
                        <div className={cx('contact-desc')}>
                            <h3>Hỗ trợ 24/7?</h3>
                            <p>Chúng tôi luôn sẵn hàng hỗ trợ bạn</p>
                            <Button className={cx('call')} rounded>
                                0356.589.111
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('socials')}>
                    <FaFacebookF className={cx('social-icon')} />
                    <FaInstagram className={cx('social-icon')} />
                    <FaLinkedin className={cx('social-icon')} />
                </div>
            </div>
        </div>
    );
}

export default Home;
