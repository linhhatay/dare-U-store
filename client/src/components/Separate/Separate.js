import classNames from 'classnames/bind';
import styles from './Separate.module.scss';

const cx = classNames.bind(styles);

function Separate({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return <div className={classes}></div>;
}

export default Separate;
