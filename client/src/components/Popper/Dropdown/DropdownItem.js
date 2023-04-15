import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import styles from './Dropdown.module.scss';
import { logout } from '~/redux/actions/authAction';

const cx = classNames.bind(styles);

function DropdownItem({ data }) {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Button className={cx('dropdown-item')} leftIcon={data.icon} to={data.to} onClick={data.action && handleLogout}>
            {data.title}
        </Button>
    );
}

export default DropdownItem;
