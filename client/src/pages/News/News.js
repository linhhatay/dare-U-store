import classNames from 'classnames/bind';

import styles from './News.module.scss';
import Paragraph from './Paragraph';
import Separate from '~/components/Separate';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function News() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <h6>Hướng dẫn sử dụng</h6>
                    <h1 className={cx('title')}>Sản phẩm Dareu nào sử dụng được cho macbook?</h1>
                    <Separate className={cx('separate')} />
                    <div className={cx('time')}>POSTED ON 29 THÁNG BA, 2022 BY ADMIN</div>
                </div>
                <div className={cx('content')}>
                    <Paragraph
                        title="1.Tại sao người dùng Macbook lại khó lựa chọn thiết bị hơn?"
                        image="https://dareu.com.vn/wp-content/uploads/2022/03/san-pham-dareu-dung-cho-macbook.png"
                        text="Đối với người dùng Macbook thế hệ cũ có hỗ trợ cổng giao tiếp USB-A thì việc lựa chọn các thiết bị ngoại vi tương thích để sử dụng sẽ dễ dàng hơn rất nhiều. Vì trên thị trường hiện nay phần lớn các thiết bị ngoại vi như:  Chuột, bàn phím, Tai nghe … đều hỗ trợ cổng kết nối USB-A với giá thành tương đối hợp lý cho người dùng. "
                        subtext="Nhưng đối với các thế hệ Macbook mới hiện nay các cổng USB-A đã được thay thế sang chuẩn Type-C khiến cho việc lựa chọn các thiết bị ngoại vi cũng hạn chế hơn."
                    />
                    <Paragraph
                        title="2. Làm cách nào để chọn mua các sản phẩm phù hợp cho Macbook?"
                        text="Có rất nhiều khách hàng của Dareu  sau khi mua sản phẩm về mới nhận ra không thể cắm trên các cổng giao tiếp có sẵn của Macbook. Vì vậy chúng tôi sẽ giúp bạn dễ dàng hơn khi chọn mua nhé. "
                        subtext={`Đối với các thiết bị ngoại vi sử dụng dây cổng USB-A mà trên Macbook của bạn chỉ có cổng Type C thì các bạn đừng vội buồn, hãy sắm cho mình ngay 1 hub chuyển đổi từ Type C -> USB -A là có thể sử dụng thoải mái rồi nhé. Đối với các thiết bị không dây: Macbook sẽ chỉ hỗ trợ kết nối Bluetooth thôi nhé, nên các bạn hãy chọn các thiết bị có hỗ trợ Bluetooth để có thể sử dụng được.`}
                    />
                    <Paragraph
                        title="3. Sản phẩm nào của Dareu sử dụng được cho Macbook?"
                        text="Như đã nói ở trên thì tất cả các sản phẩm của Dareu đều có thể sử dụng trên hệ điều hành của Macbook, chỉ cần bạn chọn đùng chuẩn kết nối phù hợp. Dareu sẽ giới thiệu giúp bạn 1 số sản phẩm không dây có hỗ trợ bluetooth nhé."
                    >
                        <div className={cx('paragraph-sub')}>
                            <h4>3.1 Chuột không dây </h4>
                            <p>
                                Với thiết kế nhỏ nhắn và nhiều màu sắc, sản phẩm chuột không dây Dareu LM115B hỗ trợ cả
                                2 kết nối wireless và bluetooth
                            </p>
                            <img
                                src="https://dareu.com.vn/wp-content/uploads/2022/02/chuot-khong-day-dareu-lm115b-01-801x800.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('paragraph-sub')}>
                            <h4>3.2 Bàn phím không dây</h4>
                            <p>2 mẫu bàn phím Dareu EK871 và EK861 hỗ trợ kết nối Bluetooth rất nhỏ gọn</p>
                            <img
                                src="https://dareu.com.vn/wp-content/uploads/2021/04/ban-phim-co-khong-day-dareu-ek871-01.jpg"
                                alt=""
                            />
                            <img
                                src="https://dareu.com.vn/wp-content/uploads/2021/04/ban-phim-co-khong-day-dareu-ek861-01-800x800.png"
                                alt=""
                            />
                        </div>
                    </Paragraph>
                </div>
                <footer>This entry was posted in Hướng dẫn sử dụng. Bookmark the permalink.</footer>
            </div>
            <aside className={cx('aside')}>
                <div className={cx('category')}>
                    <div className={cx('post-item')}>
                        <span className={cx('heading')}>Latest Posts</span>
                        <Separate />
                        <div className={cx('post')}>
                            <div className={cx('date')}>
                                <span className={cx('day')}>29</span>
                                <span className={cx('month')}>Th3</span>
                            </div>
                            <p className={cx('label')}>Sản phẩm Dareu nào sử dụng được cho macbook?</p>
                        </div>
                    </div>
                    <div className={cx('post-item')}>
                        <span className={cx('heading')}>Danh mục bài viết</span>
                        <Separate />
                    </div>
                    <div className={cx('post-item')}>
                        <span className={cx('heading')}>Khoảng thời gian</span>
                        <Separate />
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default News;
