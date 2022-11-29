import classNames from 'classnames/bind';
import styles from './Insurance.module.scss';
import { FaRegUser } from 'react-icons/fa';
import Map from './Map';

const cx = classNames.bind(styles);

function Insurance() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>
                    <b />
                    <span>
                        <FaRegUser className={cx('icon')} />
                        Trung tâm bảo hành Dareu toàn quốc
                    </span>
                    <b />
                </h1>
            </div>
            <div className={cx('item')}>
                <div className={cx('address')}>
                    <div>
                        <h1>Hà Nội</h1>
                        <nav>Địa chỉ bảo hành </nav>
                    </div>
                </div>
                <div className={cx('map')}>
                    <div className={cx('contact')}>
                        <h2>TTBH Mai Hoàng – 241 Phố vọng, Hai Bà Trưng, HN</h2>
                        <p>Tel: 024.3628.5868- Fax: 024.3.6285867</p>
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>
            <div className={cx('item')}>
                <div className={cx('address')}>
                    <div>
                        <h1>Hồ Chí Minh</h1>
                        <nav>Địa chỉ bảo hành </nav>
                    </div>
                </div>
                <div className={cx('map')}>
                    <div className={cx('contact')}>
                        <h2>TTBH Mai Hoàng – 666/35 Đường 3/2, Phường 14, Quận 10, TP.HCM </h2>
                        <p>Tel: 0973196066</p>
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>
            <div className={cx('item')}>
                <div className={cx('address')}>
                    <div>
                        <h1>Đà Nẵng</h1>
                        <nav>Địa chỉ bảo hành </nav>
                    </div>
                </div>
                <div className={cx('map')}>
                    <div className={cx('contact')}>
                        <h2>TTBH Mai Hoàng: Lô 10 Hoàng Thị Loan, Quận Liên Chiểu, TP Đà Nẵng ( Đối diện BV- UB ĐN)</h2>
                        <p>Tel: 0236.3611788-0236.3611688</p>
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Insurance;
