import classNames from 'classnames/bind';
import { IoClose } from 'react-icons/io5';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, closeModal }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')} onClick={closeModal} />
            <div className={cx('body')}>{children}</div>
            <button className={cx('close')} onClick={closeModal}>
                <IoClose />
            </button>
        </div>
    );
}

export default Modal;
