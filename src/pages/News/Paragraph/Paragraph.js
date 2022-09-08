import classNames from 'classnames/bind';
import styles from './Paragraph.module.scss';

const cx = classNames.bind(styles);

function Paragraph({ title, text, subtext, image, children }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            {image && <img className={cx('image')} src={image} alt="" />}
            <p className={cx('text')}>{text}</p>
            <p className={cx('text')}>{subtext}</p>
            <div>{children}</div>
        </div>
    );
}

export default Paragraph;
