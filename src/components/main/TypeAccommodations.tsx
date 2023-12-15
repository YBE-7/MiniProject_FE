import React from 'react';
import { Link } from 'react-router-dom';
import hotel from '../../assets/images/hotelImg.svg';
import pension from '../../assets/images/pensionImg.svg';
import poolVilla from '../../assets/images/poolVillaImg.svg';
import resort from '../../assets/images/resortImg.svg';

const TypeAccommodations = () => {
	return (
		<div className="flex text-xxsm max-w-xl lg:max-w-none mx-auto lg:px-20 pt-20 lg:pt-24 py-5 justify-between items-center">
			<Link to="/hotel">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={hotel} alt="Hotel" width={40} height={40} />
					<span> 호텔</span>
				</div>
			</Link>
			<Link to="/resort">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={resort} alt="resort" className="h-[48px]" />
					<span> 리조트 </span>
				</div>
			</Link>
			<Link to="/pension">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={pension} alt="pension" className="h-[48px]" />
					<span> 펜션</span>
				</div>
			</Link>
			<Link to="/pool_villa">
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={poolVilla} alt="poolVilla" className="h-[48px] w-[43px]" />
					<span> 풀빌라</span>
				</div>
			</Link>
		</div>
	);
};

export default TypeAccommodations;
