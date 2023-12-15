import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
	items: Array<string> | undefined;
}

export default function ImageSwiper({ items }: Props) {
	return (
		<Swiper
			slidesPerView={'auto'}
			slidesPerGroup={1}
			navigation={true}
			loop={true}
			modules={[Navigation]}
			className="imageSwiper"
		>
			{items &&
				items.map((item, index) => (
					<SwiperSlide key={item}>
						<div className="aspect-[1.515]">
							<img
								src={item}
								alt="숙소사진"
								className="w-full h-full object-cover"
							/>
							<p className="absolute bottom-1 right-1 text-xs text-white font-bold bg-transparentGray px-1 py-[2px]">
								{index + 1}/{items.length}
							</p>
						</div>
					</SwiperSlide>
				))}
		</Swiper>
	);
}
