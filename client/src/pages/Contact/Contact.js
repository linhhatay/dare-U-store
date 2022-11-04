import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import Button from '~/components/Button';
import Separate from '~/components/Separate';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const DATA_DROPDOWN = [
    {
        title: 'Điều kiện bảo hành',
        body: [
            'Sản phẩm còn trong thời gian bảo hành',
            'Sản phẩm còn nguyên vẹn, không có tác động vật lý làm vỡ, gãy, đứt sản phẩm..',
            'Không cháy nổ, chập do lỗi người dùng',
        ],
    },
    {
        title: 'Phương thức bảo hành sản phẩm',
        body: [
            'Các sản phẩm sẽ được đổi mới trong 1/2 thời gian bảo hành. Ví dụ: Bàn phím cơ Dareu bảo hành 24 tháng thì sẽ được đổi mới trong 12 tháng đầu, còn thời gian sau sẽ bảo hành sửa chữa.',
            'Thời gian bảo hành: Tùy thuộc vào tình hình làm việc của TTBH thời gian Trung bình từ 3-7 ngày làm việc. Nếu lâu hơn phía TTBH sẽ có thông báo cụ thể đến khách hàng',
        ],
    },
    {
        title: 'Đối với khách hàng ở tỉnh xa',
        body: [
            'Đối với khách hàng ở tỉnh xa không thể qua trực tiếp TTBH của Dareu trên toàn quốc, khách hàng có thể gửi sản phẩm qua các đơn vị vận chuyển để bảo hành. Lưu ý: khách hàng vui lòng ghi rõ thông tin người gửi, tình trạng lỗi của sản phẩm ( Đồng thời thanh toán trước cước gửi hàng cho đơn vị vận chuyển)',
        ],
    },
];

function Contact() {
    const [openIsDropdown, setOpenIsDropdown] = useState(false);
    const [isActive, setIsActive] = useState();

    const handleToggleDropdown = (index) => {
        if (index === isActive && openIsDropdown === true) {
            setOpenIsDropdown(false);
            setIsActive(null);
        } else {
            setOpenIsDropdown(true);
            setIsActive(index);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('header')}>
                    <Separate className={cx('divider')} />
                    <span className={cx('title')}>Kiểm tra sản phẩm chính hãng</span>
                    <Separate className={cx('divider')} />
                </div>
                <ul className={cx('descriptions')}>
                    <li>
                        Khách hàng lấy serial trên vỏ hộp hoặc trên trực tiếp sản phẩm (Có phân biệt chữ hoa, chữ
                        thường)
                    </li>
                    <li>
                        Thông tin kiểm tra là thời gian xuất kho của các sản phẩm từ Dareu Việt Nam đến các đại lý ủy
                        quyền
                    </li>
                </ul>
                <div className={cx('form')}>
                    <input type="text" placeholder="Nhập serial" spellCheck="false" />
                    <Button rounded className={cx('btn')}>
                        CHECK
                    </Button>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('header')}>
                    <Separate className={cx('divider')} />
                    <span className={cx('title')}>Chính sách bảo hành Dareu</span>
                    <Separate className={cx('divider')} />
                </div>
                <div className={cx('dropdown')}>
                    {DATA_DROPDOWN.map((item, index) => (
                        <div className={cx('dropdown-item')} key={index}>
                            <div
                                className={cx(['dropdown-header', index === isActive ? 'active' : ''])}
                                onClick={() => handleToggleDropdown(index)}
                            >
                                {index === isActive && openIsDropdown ? (
                                    <HiOutlineChevronUp className={cx('dropdown-icon')} />
                                ) : (
                                    <HiOutlineChevronDown className={cx('dropdown-icon')} />
                                )}
                                <span className={cx('dropdown-title')}>{item.title}</span>
                            </div>
                            {index === isActive && openIsDropdown && (
                                <div className={cx('dropdown-body')}>
                                    <ol>
                                        {item.body.length > 1
                                            ? item.body.map((item, index) => <li key={index}>{item}</li>)
                                            : item.body.map((item, index) => <p key={index}>{item}</p>)}
                                    </ol>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
