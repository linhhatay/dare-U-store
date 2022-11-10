import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';

import styles from './Toast.module.scss';

const cx = classNames.bind(styles);

const Toast = ({ title, message, error = false, handleCloseToast }) => {
    const [visible, setVisible] = useState(true);
    const classes = cx('toast', {
        error,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
            setVisible(true);
        };
    }, [message]);

    return visible ? (
        <div className={classes}>
            <div className={cx('toast__icon')}>
                <MdNotifications />
            </div>
            <div className={cx('toast__body')}>
                <h3 className={cx('toast__title')}>{title} </h3>
                <p className={cx('toast__msg')}>{message}</p>
            </div>
            <div className={cx('toast__close')} onClick={handleCloseToast}>
                <FaTimes />
            </div>
        </div>
    ) : null;
};

export default Toast;
