import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Dropdown.module.scss';
import DropdownItem from './DropdownItem';

const cx = classNames.bind(styles);

function Dropdown({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <DropdownItem key={index} data={item} />);
    };

    return (
        <div>
            <Tippy
                delay={[200, 0]}
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>{renderItems()}</PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Dropdown;
