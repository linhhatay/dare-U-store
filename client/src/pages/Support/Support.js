import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Button from '~/components/Button';
import styles from './Support.module.scss';

const cx = classNames.bind(styles);

const DRIVER_PRODUCTS = [
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/11/13552-600x600.png',
        name: 'Chuột EM908',
        link: 'https://drive.google.com/file/d/1eZCQEus9k3IU5B41oJ4Nwt9Vw-yguCD6/view?usp=sharing',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2022/02/chuot-khong-day-gaming-dareu-em901x-002-600x600.png',
        name: 'Chuột EM901X – Vỏ hộp đen (ATG4090)',
        link: 'https://www.dareu.com/public/uploads/file_material/20220815/Dareu_EM901%20-%20ATG4090%20Driver.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2022/08/dadcf9900ded30406833a0c26cae03de-1-600x600.png',
        name: 'Chuột EM901X – Vỏ hộp trắng(AIM-WL)',
        link: 'https://www.dareu.com/public/uploads/file_material/20220815/Dareu%20EM901%20-%20AIM-WL%20Driver.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2022/02/chuot-khong-day-gaming-dareu-em901x-002-600x600.png',
        name: 'Chuột EM901',
        link: 'https://en.dareu.com/public/uploads/file_material/20220401/DAREU_EM901_Setup_v3.0_2020.11.20.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/04/tai-nghe-gaming-dareu-eh925s-pro-02-600x600.png',
        name: 'EH925s Pro',
        link: 'https://en.dareu.com/public/uploads/file_material/20220208/Dareu-EH925s%20pro%C2%A0Driver.zip',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/04/tai-nghe-khong-day-dareu-a700-04-600x600.png',
        name: 'Tai nghe A700',
        link: 'https://www.dareu.com/public/uploads/file_material/20220815/Dareu%20EM901%20-%20AIM-WL%20Driver.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2022/02/tai-nghe-khong-day-a710-rgb-wireless-004-600x600.png',
        name: 'Tai nghe A710',
        link: 'https://www.dareu.com/public/uploads/file_material/20220815/Dareu%20EM901%20-%20AIM-WL%20Driver.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/04/tai-nghe-gaming-dareu-eh925s-queen-01-600x600.png',
        name: 'Tai nghe EH925s',
        link: 'https://en.dareu.com/public/uploads/file_material/20220208/Dareu-EH925%20Driver.zip',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/04/tai-nghe-gaming-dareu-eh745-red-01-600x600.png',
        name: 'Tai nghe EH745',
        link: 'https://en.dareu.com/public/uploads/file_material/20220208/Dareu-EH745%20Driver.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/04/ban-phim-co-khong-day-dareu-ek861-01-600x600.png',
        name: 'Bàn phím EK861 Dual Mode',
        link: 'https://en.dareu.com/public/uploads/file_material/20210726/1627271589304894b84657a5e8.rar',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2021/04/ban-phim-co-dareu-a87-summer-01-600x600.png',
        name: 'Bàn phím A87 Series',
        link: 'https://en.dareu.com/public/uploads/file_material/20220208/Dareu-A87%20series%20Driver.zip',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2022/02/ban-phim-gaming-dareu-a98-600x600.png',
        name: 'Bàn phím A98',
        link: 'https://en.dareu.com/public/uploads/file_material/20220208/Dareu-A98%20tri-mode%20Driver.zip',
    },
    {
        image: 'https://dareu.com.vn/wp-content/uploads/2022/02/ban-phim-gaming-dareu-EK871-dual-mode-600x507.png',
        name: 'Bàn phím EK871 Dual mode',
        link: 'https://en.dareu.com/public/uploads/file_material/20220208/Dareu-EK871%20Driver.zip',
    },
];

function Support() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Driver Dareu tải về </h3>
                <p className={cx('description')}>
                    Tổng hợp toàn bộ các bản driver mới nhất cho các thiết bị gaming Dareu
                </p>
            </div>
            <div className={cx('content')}>
                {DRIVER_PRODUCTS.map((item, index) => (
                    <div className={cx('driver-item')} key={index}>
                        <img src={item.image} alt={item.name} className={cx('driver-image')} />
                        <h2 className={cx('product')}>{item.name}</h2>
                        <Button href={item.link} className={cx('download')}>
                            Tải về driver cho window
                            <BiChevronRight className={cx('icon')} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Support;
