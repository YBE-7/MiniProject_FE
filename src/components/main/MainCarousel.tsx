import React from 'react';
import carousel1 from '../../assets/images/carousel1.svg';
import carousel2 from '../../assets/images/carousel2.svg';
import carousel3 from '../../assets/images/carousel3.svg';
import carousel4 from '../../assets/images/carousel4.svg';
import carousel5 from '../../assets/images/carousel5.svg';
import carousel6 from '../../assets/images/carousel6.svg';
import carousel7 from '../../assets/images/carousel7.svg';
import carousel8 from '../../assets/images/carousel8.svg';
import carousel9 from '../../assets/images/carousel9.svg';
import carousel10 from '../../assets/images/carousel10.svg';
import carousel11 from '../../assets/images/carousel11.svg';
import carousel12 from '../../assets/images/carousel12.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carouse.css';
import styles from './MainCarousel.module.css';

const MainCarousel = () => {
	const carouselDate = [
		{
			id: 'carousel1',
			src: carousel1,
			url: 'https://board.yanolja.com/event/294/index.html',
		},
		{
			id: 'carousel2',
			src: carousel2,
			url: 'https://board.yanolja.com/event/375/index.html',
		},
		{
			id: 'carousel3',
			src: carousel3,
			url: 'https://www.yanolja.com/exhibition/7967',
		},
		{
			id: 'carousel4',
			src: carousel4,
			url: 'https://board.yanolja.com/event/151/index.html',
		},
		{
			id: 'carousel5',
			src: carousel5,
			url: 'https://board.yanolja.com/event/328/index.html',
		},
		{
			id: 'carousel6',
			src: carousel6,
			url: 'https://board.yanolja.com/event/154/index.html',
		},
		{
			id: 'carousel7',
			src: carousel7,
			url: 'https://board.yanolja.com/event/151/index.html',
		},
		{
			id: 'carousel8',
			src: carousel8,
			url: 'https://www.yanolja.com/live-commerce/lkyanolja-c895984665b846c78aa2da52e3354a31',
		},
		{
			id: 'carousel9',
			src: carousel9,
			url: 'https://www.yanolja.com/promotion/nol-promotion?eventcode=NOY92',
		},
		{
			id: 'carousel10',
			src: carousel10,
			url: 'https://board.yanolja.com/event/328/index.html',
		},
		{
			id: 'carousel11',
			src: carousel11,
			url: 'https://board.yanolja.com/event/294/index.html',
		},
		{
			id: 'carousel12',
			src: carousel12,
			url: 'https://board.yanolja.com/event/323/index.html',
		},
	];

	return (
		<div>
			<div className="my-3 flex ">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={10}
					slidesPerView={1}
					// scrollbar={{ draggable: true }}
					navigation
					pagination={{
						type: 'fraction',
					}}
					breakpoints={{
						768: {
							slidesPerView: 2.5,
						},
					}}
					className={styles.mainSwiper}
				>
					{carouselDate.map((item) => (
						<SwiperSlide key={item.id}>
							<a target="_blank" href={item.url} rel="noreferrer">
								<img
									src={item.src}
									alt="{item}"
									className="h-[125px] mr-4 rounded-md"
								/>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default MainCarousel;
