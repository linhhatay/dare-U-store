import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import styles from './Carousel.module.scss';
import CarouselItem from './CarouselItem';

const cx = classNames.bind(styles);

function Carousel({ data }) {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevImage = () => {
        if (currentImage <= data.length - 1 && currentImage > 0) {
            setCurrentImage((prev) => prev - 1);
        } else if (currentImage <= 0) {
            setCurrentImage(data.length - 1);
        }
    };

    const handleNextImage = () => {
        if (currentImage < data.length - 1) {
            setCurrentImage((prev) => prev + 1);
        } else if (currentImage >= data.length - 1) {
            setCurrentImage(0);
        }
    };

    const handleChangeImage = (index) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNextImage();
        }, 3000);

        return () => clearInterval(timer);
    }, [currentImage]);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('prev')}>
                <MdOutlineChevronLeft onClick={handlePrevImage} />
            </span>
            <div className={cx('content')}>
                <CarouselItem data={data[currentImage]} />
            </div>
            <div className={cx('dots')}>
                {data.map((item, index) => (
                    <div
                        className={cx(['dot', index === currentImage ? 'active' : ''])}
                        key={index}
                        onClick={() => handleChangeImage(index)}
                    />
                ))}
            </div>
            <div className={cx('next')}>
                <MdOutlineChevronRight onClick={handleNextImage} />
            </div>
        </div>
    );
}

export default Carousel;
